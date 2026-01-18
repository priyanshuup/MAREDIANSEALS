const categoryList = document.getElementById("categoryList");
const productsGrid = document.getElementById("productsGrid");

function renderCategories() {
    categoryList.innerHTML = "";
    const allLi = document.createElement("li");
    allLi.textContent = "All Products";
    allLi.classList.add("active");
    allLi.onclick = () => {
        setActive(allLi);
        renderProducts(productData);
    };
    categoryList.appendChild(allLi);

    const categories = [...new Set(productData.map(p => p.category))];
    categories.forEach(cat => {
        const li = document.createElement("li");
        li.textContent = cat;
        li.onclick = () => {
            setActive(li);
            filterProducts(cat);
        };
        categoryList.appendChild(li);
    });
}

function renderProducts(products) {
    productsGrid.innerHTML = "";
    products.forEach(p => {
        const thumb = p.images[0] || "";
        productsGrid.innerHTML += `
            <div class="product-card">
                <img src="${thumb}" alt="${p.category}">
                <h4>${p.category}</h4>
                <div class="product-actions">
                    <button class="read-more" onclick="showProductDetails('${p.slug}')">READ MORE →</button>
                    <a href="contact.html" class="enquiry-btn-small">ENQUIRY →</a>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    if(category === "all") {
        renderProducts(productData);
    } else {
        renderProducts(productData.filter(p => p.category === category));
    }
}

function setActive(el) {
    document.querySelectorAll(".category-list li").forEach(li => li.classList.remove("active"));
    el.classList.add("active");
}

// Call initial render
renderCategories();
renderProducts(productData);
