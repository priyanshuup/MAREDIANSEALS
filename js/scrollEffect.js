// GSAP Scroll Animation for Hexagons - Tight Honeycomb
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded. Please include GSAP library.');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial positions with tight spacing
    const distance = 280;
    const angleOffset = Math.PI / 6; // 30 degrees
    
    // Calculate positions for perfect honeycomb
    gsap.set('.hex-1', { 
        x: -distance * Math.cos(angleOffset), 
        y: -distance * Math.sin(angleOffset), 
        opacity: 0 
    });
    
    gsap.set('.hex-2', { 
        x: distance * Math.cos(angleOffset), 
        y: -distance * Math.sin(angleOffset), 
        opacity: 0 
    });
    
    gsap.set('.hex-3', { 
        x: -distance * Math.cos(angleOffset), 
        y: distance * Math.sin(angleOffset), 
        opacity: 0 
    });
    
    gsap.set('.hex-4', { 
        x: 0, 
        y: 0, 
        opacity: 0, 
        scale: 0.5 
    });
    
    gsap.set('.hex-5', { 
        x: distance * Math.cos(angleOffset), 
        y: distance * Math.sin(angleOffset), 
        opacity: 0 
    });

    // Create timeline for converging animation
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hexagon-container',
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
        }
    });

    // Animate center first, then outer hexagons
    tl.to('.hex-4', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.5)'
    })
    .to(['.hex-1', '.hex-2', '.hex-3', '.hex-5'], {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power2.out',
        stagger: 0.08
    }, '-=0.2');

     // About Header
    gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    gsap.fromTo(
        ".about-subtitle",
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 72%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Left content
    gsap.fromTo(
        ".about-left",
        { opacity: 0, x: -60 },
        {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Feature badges
    gsap.fromTo(
        ".feature-badge",
        { opacity: 0, y: 30, scale: 0.9 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.4)",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".about-features",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // About images (right side)
    gsap.fromTo(
        ".about-right .main-image, .about-right .sub-image",
        { opacity: 0, x: 60, scale: 0.95 },
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".about-right",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    /* ================= INDUSTRIES SECTION ================= */

    // Industries header
    gsap.fromTo(
        ".industries-title",
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".industries-section",
                start: "top 75%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    gsap.fromTo(
        ".industries-subtitle",
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".industries-section",
                start: "top 72%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Industry cards
    gsap.fromTo(
        ".industry-card",
        { opacity: 0, y: 60, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".industries-grid",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

      // Footer logo
    gsap.fromTo(
        ".footer-logo",
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Footer contact items
    gsap.fromTo(
        ".footer-contact .contact-item",
        { opacity: 0, x: -40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: ".footer-left",
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Social icons
    gsap.fromTo(
        ".footer-social",
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer-social",
                start: "top 90%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    /* Footer middle & right columns */
    gsap.fromTo(
        ".footer-middle, .footer-right",
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".footer-content",
                start: "top 85%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Footer links (nice cascade)
    gsap.fromTo(
        ".footer-links li",
        { opacity: 0, x: 20 },
        {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: {
                trigger: ".footer-content",
                start: "top 80%",
                toggleActions: "play reverse play reverse"
            }
        }
    );

    // Footer bottom copyright
    gsap.fromTo(
        ".footer-bottom",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".footer-bottom",
                start: "top 95%",
                toggleActions: "play reverse play reverse"
            }
        }
    );
});



