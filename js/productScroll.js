// GSAP Scroll Animation for Products Section (FIXED)
document.addEventListener('DOMContentLoaded', function () {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* ===== Header ===== */
    gsap.fromTo(
        ".products-section .section-title",
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".products-section",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    gsap.fromTo(
        ".products-section .section-description",
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: {
                trigger: ".products-section",
                start: "top 72%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    /* ===== Product Cards ===== */
    gsap.fromTo(
        ".products-grid .product-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".products-grid",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});
