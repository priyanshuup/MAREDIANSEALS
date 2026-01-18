/* ===============================
   PRODUCT DATA
================================ */
const productData = [
    {
        category: "Pusher Seals",
        image: "./images/products/section1/Pusher Seals/Pusher Seals 1.png",
        slug: "pusher-seals"
    },
    {
        category: "Single Spring Seal",
        image: "./images/products/section1/Single Spring Seal/Single Spring Seal 1.jpg",
        slug: "single-spring"
    },
    {
        category: "Multi Spring Seal",
        image: "./images/products/section1/Multi Spring Seal/Multi-Spring-Seal-1.jpg",
        slug: "multi-spring"
    },
    {
        category: "Textile Seal",
        image: "./images/products/section1/Textile Seal/Textile-Seal---1.png",
        slug: "textile-seal"
    },
    {
        category: "Teflon Bellow Seals",
        image: "./images/products/section1/Teflon Bellow Seals/Teflon-Bellow-Seals--1.png",
        slug: "teflon-bellow"
    },
    {
        category: "Metal Bellow Mechanical",
        image: "./images/products/section1/Metal Bellow Mechanical/Metal-Bellow-Mechanical---1.png",
        slug: "metal-bellow"
    },
    {
        category: "Boiler Feed Water Seals",
        image: "./images/products/section1/Boiler Feed Water Seals/Boiler-Feed-Water-Seals---1.png",
        slug: "boiler-feed"
    },
    {
        category: "Split Seals",
        image: "./images/products/section1/Split Seals/Split-Seals---1.png",
        slug: "split-seals"
    },
    {
        category: "High Pressure Seal",
        image: "./images/products/section1/High Pressure Seal/High-Pressure-Seal--1.png",
        slug: "high-pressure"
    },
    {
        category: "Dry Seals",
        image: "./images/products/section1/Dry Seals/Dry-Seals--1.png",
        slug: "dry-seals"
    },
    {
        category: "Cartridge Single Acting",
        image: "./images/products/section1/Cartridge Single Acting/Cartridge-Single-Acting--1.png",
        slug: "cartridge-single"
    },
    {
        category: "Cartridge Double Acting",
        image: "./images/products/section1/Cartridge Double Acting/Cartridge-Double-Acting---1.png",
        slug: "cartridge-double"
    }
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
    categoryList.innerHTML = "";

    /* ALL PRODUCTS BUTTON */
    const allLi = document.createElement("li");
    allLi.textContent = "All Products";
    allLi.classList.add("active");
    allLi.onclick = () => {
        setActive(allLi);
        renderProducts(productData);
    };
    categoryList.appendChild(allLi);

    /* UNIQUE CATEGORY LIST */
    const categories = [...new Set(productData.map(p => p.category))];

    categories.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.onclick = () => {
            setActive(li);
            filterProducts(category);
        };
        categoryList.appendChild(li);
    });
}

/* ===============================
   RENDER PRODUCTS
================================ */
function renderProducts(products) {
    productsGrid.innerHTML = "";

    products.forEach(p => {
        productsGrid.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.category}">
                <h4>${p.category}</h4>
                <div class="product-actions">
                    <a href="product-details.html?product=${p.slug}" class="read-more">
                        READ MORE →
                    </a>
                    <a href="contact.html" class="enquiry-btn-small">
                        ENQUIRY →
                    </a>
                </div>
            </div>
        `;
    });
}

/* ===============================
   FILTER PRODUCTS
================================ */
function filterProducts(category) {
    const filtered = productData.filter(p => p.category === category);
    renderProducts(filtered);
}

/* ===============================
   ACTIVE STATE HANDLER
================================ */
function setActive(activeEl) {
    document
        .querySelectorAll(".category-list li")
        .forEach(li => li.classList.remove("active"));

    activeEl.classList.add("active");
}

/* ===============================
   INIT
================================ */
renderCategories();
renderProducts(productData);
