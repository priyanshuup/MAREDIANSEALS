document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".contact-form");
  const modal = document.getElementById("brochureModal");
  const brochureBtn = document.querySelectorAll("downloadBrochureBtn");

  function downloadBrochure() {
    const link = document.createElement("a");
    link.href = "./brochure/Maredian_Seals_Brochure.pdf";
    link.download = "Maredian_Seals_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 🔹 Brochure button click
  brochureBtn?.addEventListener("click", e => {
    e.preventDefault();

    const allowed = sessionStorage.getItem("brochureAllowed") === "yes";

    if (allowed) {
      downloadBrochure();
      return ;
    } 
    modal?.classList.add("active");
  });

  // 🔹 Handle ALL enquiry forms
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const btn = form.querySelector(".submit-btn");

      const get = id =>
        form.querySelector(`#${id}`)?.value.trim() || "";

      const name = get("yourName");
      const email = get("email");
      const contact = get("contactNumber");
      const country = get("country");

      const isBrochureFlow =
        form.id === "contactFormBrochure";

      // 🔐 Validation
      if (!name || !contact || !country) {
        alert("Please fill all required fields.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      btn.disabled = true;
      btn.textContent = "Sending...";

      const params = {
        company: get("companyName"),
        name,
        contact,
        email,
        product: get("productSelect"),
        country,
        message: get("question"),
        brochureDownloaded: isBrochureFlow ? "Yes" : "No",
        time: new Date().toLocaleString()
      };

      emailjs
        .send("service_urdb6qd", "template_q5bfmqs", params)
        .then(() => {
          form.reset();
          btn.textContent = "Sent ✓";

          // ✅ UNLOCK brochure on ANY enquiry
          sessionStorage.setItem("brochureAllowed", "yes");

          if (isBrochureFlow) {
            modal?.classList.remove("active");
            downloadBrochure();
          }

          alert("Thank you for your enquiry! We will get back to you soon.");

          setTimeout(() => {
            btn.textContent = "Send";
            btn.disabled = false;
          }, 2000);
        })
        .catch(err => {
          console.error(err);
          btn.textContent = "Failed – Try Again";
          btn.disabled = false;
        });
    });
  });
});
