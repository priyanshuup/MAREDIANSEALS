// GSAP Scroll Animation for Hexagons - Tight Honeycomb
document.addEventListener('DOMContentLoaded', function () {
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
    // About Us Section Animations

    // Set initial positions for images
    gsap.set('.image-1', { x: -150, y: -100, opacity: 0, rotation: -15 });
    gsap.set('.image-2', { x: 150, y: -100, opacity: 0, rotation: 15 });
    gsap.set('.image-3', { x: -150, y: 100, opacity: 0, rotation: -10 });
    gsap.set('.image-4', { x: 150, y: 100, opacity: 0, rotation: 10 });
    gsap.set('.center-logo', { scale: 0, opacity: 0, rotation: -180 });
    gsap.set('.decorative-stars .star', { scale: 0, opacity: 0 });
    gsap.set('.about-us-title', { x: 50, opacity: 0 });
    gsap.set('.about-us-tagline', { x: 50, opacity: 0 });
    gsap.set('.about-us-text p', { y: 30, opacity: 0 });

    // Create timeline
    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-us-section',
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    });

    // Animate images converging to position
    aboutTimeline
        .to('.image-1', {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out'
        })
        .to('.image-2', {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .to('.image-3', {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .to('.image-4', {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.8')
        .to('.center-logo', {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .to('.decorative-stars .star', {
            scale: 1,
            opacity: 0.6,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.5)'
        }, '-=0.3')
        .to('.about-us-title', {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.6')
        .to('.about-us-tagline', {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4')
        .to('.about-us-text p', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.4');

    // Set initial states for strengths
    gsap.set('.strengths-title', { y: -50, opacity: 0 });
    gsap.set('.strengths-tagline', { y: -30, opacity: 0 });
    gsap.set('.strength-item', { scale: 0, opacity: 0, rotation: -180 });
    gsap.set('.timeline-connector', { scaleX: 0, opacity: 0 });

    const strengthsTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.strengths-section',
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    });

    strengthsTimeline
        .to('.strengths-title', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        .to('.strengths-tagline', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')
        .to('.strength-item', {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.timeline-connector', {
            scaleX: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.6');

    // === CORE VALUES SECTION ANIMATION ===

    // Set initial states for core values
    gsap.set('.core-values-title', { y: -50, opacity: 0 });
    gsap.set('.value-card', { y: 100, opacity: 0, rotationX: -15 });

    const valuesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.core-values-section',
            start: 'top 60%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    });

    valuesTimeline
        .to('.core-values-title', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        .to('.value-card', {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        }, '-=0.3');



    // gsap.to(".industry-list li", {
    //     scrollTrigger: {
    //         trigger: ".industries-serve-section",
    //         start: "top 70%",
    //         end: "bottom 60%",
    //         toggleActions: "play reverse play reverse",
    //         markers: false
    //     },
    //     opacity: 1,
    //     x: 0,
    //     duration: 0.6,
    //     ease: "power3.out",
    //     stagger: {
    //         each: 0.12,
    //         from: "start"
    //     }
    // });

    // Set initial states
    gsap.set('.industries-grid-title', { y: -50, opacity: 0 });
    gsap.set('.industries-grid-subtitle', { y: -30, opacity: 0 });
    
    // Set initial state for all cards
    gsap.set('.industry-grid-card', { 
        x: -100,
        opacity: 0
    });

    // Create timeline
    const industriesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.industries-grid-section',
            start: 'top 60%',
            end: 'top 30%',
            toggleActions: 'play none none reverse',
            // markers: true, // Uncomment for debugging
        }
    });

    // Animate header
    industriesTimeline
        .to('.industries-grid-title', {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        })
        .to('.industries-grid-subtitle', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.3');

    // Animate first row (cards 1-4)
    industriesTimeline.to(['.card-1', '.card-2', '.card-3', '.card-4'], {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.2');

    // Animate second row (cards 5-8)
    industriesTimeline.to(['.card-5', '.card-6', '.card-7', '.card-8'], {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
    }, '-=0.4');

    // Optional: Add subtle floating animation after initial animation
    ScrollTrigger.create({
        trigger: '.industries-grid-section',
        start: 'top 60%',
        onEnter: () => {
            gsap.to('.industry-grid-card', {
                y: -5,
                duration: 2,
                ease: 'sine.inOut',
                stagger: 0.1,
                repeat: -1,
                yoyo: true
            });
        }
    });

    gsap.from('.ms-contact-info', {
x: -60,
opacity: 0,
duration: 0.9,
ease: 'power2.out',
scrollTrigger: {
trigger: '.ms-contact-section',
start: 'top 75%'
}
});


gsap.from('.ms-contact-form', {
x: 60,
opacity: 0,
duration: 0.9,
delay: 0.1,
ease: 'power2.out',
scrollTrigger: {
trigger: '.ms-contact-section',
start: 'top 75%'
}
});


}

);

window.addEventListener("load", () => {
    ScrollTrigger.refresh(true);
});
