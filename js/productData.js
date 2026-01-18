/* ===============================
   PRODUCT DATA (images + slug only)
================================ */
window.productData = [
  { slug: "pusher-seals", images: ["./images/products/section1/Pusher Seals/Pusher Seals 1.png","./images/products/section1/Pusher Seals/Pusher Seals 2.png"] },
  { slug: "single-spring", images: ["./images/products/section1/Single Spring Seal/Single Spring Seal 1.jpg","./images/products/section1/Single Spring Seal/Single Spring Seal 2.jpg"] },
  { slug: "multi-spring", images: ["./images/products/section1/Multi Spring Seal/Multi-Spring-Seal-1.jpg","./images/products/section1/Multi Spring Seal/Multi-Spring-Seal-2.jpg"] },
  { slug: "textile-seal", images: ["./images/products/section1/Textile Seal/Textile-Seal1.png","./images/products/section1/Textile Seal/Textile-Seal---1.png"] },
  { slug: "teflon-bellow", images: ["./images/products/section1/Teflon Bellow Seals/Teflon-Bellow-Seals--1.png","./images/products/section1/Teflon Bellow Seals/Teflon-Bellow-Seals---2.png"] },
  { slug: "metal-bellow", images: ["./images/products/section1/Metal Bellow Mechanical/Metal-Bellow-Mechanical---1.png","./images/products/section1/Metal Bellow Mechanical/Metal-Bellow-Mechanical---2.png"] },
  { slug: "boiler-feed", images: ["./images/products/section1/Boiler Feed Water Seals/Boiler-Feed-Water-Seals---1.png","./images/products/section1/Boiler Feed Water Seals/Boiler-Feed-Water-Seals---2.png"] },
  { slug: "split-seals", images: ["./images/products/section1/Split Seals/Split-Seals---1.png","./images/products/section1/Split Seals/Split-Seals---2.png"] },
  { slug: "high-pressure", images: ["./images/products/section1/High Pressure Seal/High-Pressure-Seal--1.png","./images/products/section1/High Pressure Seal/High-Pressure-Seal---2.png"] },
  { slug: "dry-seals", images: ["./images/products/section1/Dry Seals/Dry-Seals--1.png","./images/products/section1/Dry Seals/Dry-Seals---2.png"] },
  { slug: "cartridge-single", images: ["./images/products/section1/Cartridge Single Acting/Cartridge-Single-Acting--1.png","./images/products/section1/Cartridge Single Acting/Cartridge-Single-Acting--2.png"] },
  { slug: "cartridge-double", images: ["./images/products/section1/Cartridge Double Acting/Cartridge-Double-Acting---1.png","./images/products/section1/Cartridge Double Acting/Cartridge-Double-Acting---2.png"] }
];

/* ===============================
   ELEMENTS
================================ */
const categoryList = document.getElementById("categoryList");
const productsGrid = document.getElementById("productsGrid");

/* ===============================
   RENDER CATEGORIES
================================ */
function renderCategories() {
  if (!categoryList || !window.translations) return;
  categoryList.innerHTML = "";

  const allLi = document.createElement("li");
  allLi.classList.add("category-item", "active");
  allLi.textContent = window.t("productPage.allProducts.all", "All Products");
  allLi.onclick = () => {
    setActive(allLi);
    renderProducts(productData);
  };
  categoryList.appendChild(allLi);

  productData.forEach(p => {
    const li = document.createElement("li");
    li.classList.add("category-item");
    li.textContent = window.t(`productPage.categories.${p.slug}`, p.slug.replace(/-/g, " "));
    li.onclick = () => {
      setActive(li);
      filterProducts(p.slug);
    };
    categoryList.appendChild(li);
  });
}

/* ===============================
   RENDER PRODUCTS
================================ */
function renderProducts(products) {
  if (!productsGrid || !window.translations) return;
  productsGrid.classList.remove("details-mode");
  productsGrid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.images[0]}" alt="${window.t(`productPage.categories.${p.slug}`)}">
      <h4>${window.t(`productPage.categories.${p.slug}`, p.slug.replace(/-/g, " "))}</h4>
      <div class="product-actions">
        <button class="read-more" onclick="showProductDetails('${p.slug}')">
          ${window.t("productPage.products.readMore", "Read More")}
        </button>
        <a href="contact.html" class="enquiry-btn-small">
          ${window.t("productPage.products.enquiry", "Enquiry")}
        </a>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

/* ===============================
   DETAILS VIEW (FROM JSON)
================================ */
function showProductDetails(slug) {
  // 🔥 Check if translations are loaded
  if (!window.translations || !window.translations.productPage) {
    console.error("❌ Translations not loaded yet!");
    return;
  }

  const product = productData.find(p => p.slug === slug);
  const details = window.translations.productPage.productDetails?.[slug];

  if (!product || !details) {
    console.error("❌ Product or details not found for:", slug);
    return;
  }

  productsGrid.classList.add("details-mode");

 productsGrid.innerHTML = `
  <div class="product-details">

    <button class="back-btn" onclick="renderProducts(productData)">
      ← Back to Products
    </button>

    <h2 class="product-title">${t(`productPage.categories.${slug}`)}</h2>

    <div class="product-top">
      <img src="${product.images[0]}" alt="">
    </div>

    <div class="details-section">
      <h3>⚙ ${t("productPage.details.standardStyle")}</h3>
      <ul>
        ${details.standardStyle.map(item => {
          const [k, v] = item.split(":");
          return `<li><strong>${k}:</strong> <span>${v}</span></li>`;
        }).join("")}
      </ul>
    </div>

    <div class="details-split">
      <div>
        <h3>⚙ ${t("productPage.details.characteristics")}</h3>
        <ul>${details.characteristics.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div>
        <h3>⚙ ${t("productPage.details.operatingLimits")}</h3>
        <ul>${details.operatingLimits.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>

    <div class="details-bottom">
      <img src="${product.images[1]}" alt="">
      <div>
        <h3>⚙ ${t("productPage.details.applications")}</h3>
        <ul>${details.applications.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>
    </div>

  </div>
`;

}

/* ===============================
   HELPERS
================================ */
function filterProducts(slug) {
  renderProducts(productData.filter(p => p.slug === slug));
}

function setActive(el) {
  document.querySelectorAll("#categoryList .category-item").forEach(li => li.classList.remove("active"));
  el.classList.add("active");
}

/* ===============================
   EXPOSE FOR i18n
================================ */
window.renderCategories = renderCategories;
window.renderProducts = renderProducts;
window.showProductDetails = showProductDetails;

document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit for translations to load
  setTimeout(() => {
    if (window.translations) {
      renderCategories();
      renderProducts(productData);
    }
  }, 100);
});