// 🔥 Global translations object
let translations = {};
let currentLang = localStorage.getItem("lang") || "en";

// 🔥 Helper to get nested translation values
function getNestedValue(obj, key) {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
}

// 🔥 Build ticker dynamically
function buildTicker(tickerData) {
  const tickerRows = document.querySelectorAll(".news-ticker-content");
  
  tickerRows.forEach(row => {
    row.innerHTML = "";
    Object.values(tickerData).forEach(text => {
      const span = document.createElement("span");
      span.className = "news-item";
      span.textContent = text;
      row.appendChild(span);
    });
  });
}

// 🔥 Translation helper (expose globally)
window.t = function(key, fallback = "") {
  return getNestedValue(translations, key) || fallback;
};

// 🔥 Load language JSON
async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    translations = await response.json();
    
    // 🔥 Make translations globally accessible
    window.translations = translations;
    currentLang = lang;
    
    // Apply translations to all [data-i18n] elements
    applyTranslations();
    
    // Build ticker if data exists
    if (translations.ticker) {
      buildTicker(translations.ticker);
    }
    
    // Save language preference
    localStorage.setItem("lang", lang);
    
    // 🔥 Re-render products with new language
    if (window.renderCategories && window.renderProducts && window.productData) {
      renderCategories();
      renderProducts(window.productData);
    }
    
  } catch (err) {
    console.error("Language load failed:", err);
  }
}

// 🔥 Apply translations to DOM elements
function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = getNestedValue(translations, el.dataset.i18n);
    if (value) {
      el.innerHTML = value;
    }
  });
}

// 🔥 Language switcher event
document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
  
  const langSwitcher = document.getElementById("languageSwitcher");
  if (langSwitcher) {
    langSwitcher.value = currentLang;
    langSwitcher.addEventListener("change", (e) => {
      loadLanguage(e.target.value);
    });
  }
});