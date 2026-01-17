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
});