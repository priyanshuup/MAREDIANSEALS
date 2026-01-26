/* ===============================
   PRODUCT DATA (images + slug)
================================ */
window.productData = [
  { slug: "pusher-seals", images: ["./images/products/section1/Pusher Seals/Pusher Seals 1.png", "./images/products/section1/Pusher Seals/Pusher Seals 2.png"] },
  { slug: "single-spring", images: ["./images/products/section1/Single Spring Seal/Single Spring Seal 1.jpg", "./images/products/section1/Single Spring Seal/Single Spring Seal 2.jpg"] },
  { slug: "multi-spring", images: ["./images/products/section1/Multi Spring Seal/Multi-Spring-Seal-1.jpg", "./images/products/section1/Multi Spring Seal/Multi-Spring-Seal-2.jpg"] },
  { slug: "textile-seal", images: ["./images/products/section1/Textile Seal/Textile-Seal1.png", "./images/products/section1/Textile Seal/Textile-Seal---1.png"] },
  { slug: "teflon-bellow", images: ["./images/products/section1/Teflon Bellow Seals/Teflon-Bellow-Seals--1.png", "./images/products/section1/Teflon Bellow Seals/Teflon-Bellow-Seals---2.png"] },
  { slug: "metal-bellow", images: ["./images/products/section1/Metal Bellow Mechanical/Metal-Bellow-Mechanical---1.png", "./images/products/section1/Metal Bellow Mechanical/Metal-Bellow-Mechanical---2.png"] },
  { slug: "boiler-feed", images: ["./images/products/section1/Boiler Feed Water Seals/Boiler-Feed-Water-Seals---1.png", "./images/products/section1/Boiler Feed Water Seals/Boiler-Feed-Water-Seals---2.png"] },
  { slug: "split-seals", images: ["./images/products/section1/Split Seals/Split-Seals---1.png", "./images/products/section1/Split Seals/Split-Seals---2.png"] },
  { slug: "high-pressure", images: ["./images/products/section1/High Pressure Seal/High-Pressure-Seal--1.png", "./images/products/section1/High Pressure Seal/High-Pressure-Seal---2.png"] },
  { slug: "dry-seals", images: ["./images/products/section1/Dry Seals/Dry-Seals--1.png", "./images/products/section1/Dry Seals/Dry-Seals---2.png"] },
  { slug: "cartridge-single", images: ["./images/products/section1/Cartridge Single Acting/Cartridge-Single-Acting--1.png", "./images/products/section1/Cartridge Single Acting/Cartridge-Single-Acting--2.png"] },
  { slug: "cartridge-double", images: ["./images/products/section1/Cartridge Double Acting/Cartridge-Double-Acting---1.png", "./images/products/section1/Cartridge Double Acting/Cartridge-Double-Acting---2.png"] }
];

/* ===============================
   ELEMENTS
================================ */
const categoryList = document.getElementById("categoryList");
const productsGrid = document.getElementById("productsGrid");

/* ===============================
   URL HELPER
================================ */
function getProductFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("product");
}

/* ===============================
   FORMATTERS
================================ */
function formatHeading(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\D)(\d+)/g, "$1 $2")
    .replace(/^./, c => c.toUpperCase());
}

function renderSection(titleKey, values) {
  if (!Array.isArray(values) || !values.length) return "";

  return `
    <div class="details-section">
      <h3>⚙ ${formatHeading(titleKey)}</h3>
      <ul>
        ${values.map(item => {
    if (item.includes(":")) {
      const [k, ...v] = item.split(":");
      return `<li><strong>${k}:</strong> ${v.join(":")}</li>`;
    }
    return `<li>${item}</li>`;
  }).join("")}
      </ul>
    </div>
  `;
}

/* ===============================
   RENDER CATEGORIES
================================ */
function renderCategories() {
  if (!categoryList || !window.translations) return;
  categoryList.innerHTML = "";

  /* ---------- ALL PRODUCTS ---------- */
  const allLi = document.createElement("li");
  allLi.className = "category-item active";
  allLi.textContent = t("productPage.allProducts.all", "All Products");
  allLi.onclick = () => {
    setActive(allLi);
    renderProducts(productData);
  };
  categoryList.appendChild(allLi);

  /* ---------- CATEGORIES → OPEN DETAILS ---------- */
  productData.forEach(p => {
    const li = document.createElement("li");
    li.className = "category-item";
    li.textContent = t(
      `productPage.categories.${p.slug}`,
      p.slug.replace(/-/g, " ")
    );

    li.onclick = () => {
      setActive(li);
      showProductDetails(p.slug); // 🔥 DIRECT DETAILS VIEW
    };

    categoryList.appendChild(li);
  });
}

/* ===============================
   RENDER PRODUCTS GRID
================================ */
function renderProducts(products) {
  if (!productsGrid) return; // 🚑 guard
  productsGrid.classList.remove("details-mode");
  productsGrid.innerHTML = "";

  products.forEach(p => {
    productsGrid.innerHTML += `
      <div class="product-card">
        <img src="${p.images[0]}" alt="">
        <h4>${t(`productPage.categories.${p.slug}`)}</h4>
        <div class="product-actions">
          <button class="read-more" onclick="showProductDetails('${p.slug}')">
            ${t("productPage.products.readMore")}
          </button>
          <a href="contact.html" class="enquiry-btn-small">
            ${t("productPage.products.enquiry")}
          </a>
        </div>
      </div>
    `;
  });
}

/* ===============================
   PRODUCT DETAILS VIEW
================================ */
function showProductDetails(slug) {
  const product = productData.find(p => p.slug === slug);
  const detailsObj = window.translations?.productPage?.productDetails?.[slug];

  if (!product || !detailsObj) return;

  productsGrid.classList.add("details-mode");

  const entries = Object.entries(detailsObj);

  /* -----------------------------------------
     1️⃣ First row → Image 1 + First Detail
  ----------------------------------------- */
  const firstDetail = entries.shift();

  let html = `
    <div class="details-row">
      <div class="details-image">
        <img src="${product.images[0]}" alt="">
      </div>
      ${renderSection(firstDetail[0], firstDetail[1])}
    </div>
  `;

  /* -----------------------------------------
     2️⃣ Middle rows → 2 text sections
  ----------------------------------------- */
  while (entries.length > 1) {
    const first = entries.shift();
    const second = entries.shift();

    html += `
      <div class="details-row">
        ${renderSection(first[0], first[1])}
        ${renderSection(second[0], second[1])}
      </div>
    `;
  }

  /* -----------------------------------------
     3️⃣ Last row → Last Detail + Image 2
  ----------------------------------------- */
  if (entries.length === 1) {
    const last = entries.shift();

    html += `
      <div class="details-row">
        ${renderSection(last[0], last[1])}
        <div class="details-image">
          <img src="${product.images[1]}" alt="">
        </div>
      </div>
    `;
  }

  /* -----------------------------------------
     FINAL RENDER
  ----------------------------------------- */
  productsGrid.innerHTML = `
    <div class="product-details">

      <button class="back-btn" onclick="renderProducts(productData)">
        ← Back to Products
      </button>

      <h2 class="product-title">
        ${t(`productPage.categories.${slug}`)}
      </h2>

      <div class="details-wrapper">
        ${html}
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
  document
    .querySelectorAll("#categoryList .category-item")
    .forEach(li => li.classList.remove("active"));
  el.classList.add("active");
}

/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const slugFromURL = getProductFromURL();

  const waitForI18n = setInterval(() => {
    if (window.translations?.productPage) {
      clearInterval(waitForI18n);

      renderCategories();
      renderProducts(productData);

      if (slugFromURL) {
        showProductDetails(slugFromURL);
        document
          .getElementById("products-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 50);
});
