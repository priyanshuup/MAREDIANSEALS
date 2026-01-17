// Hero Section Animations
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded. Please include GSAP library.');
        return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('.hero-left::before', { x: '-100%' });
    gsap.set('.hero-text-content', { opacity: 0, x: -50 });
    gsap.set('.logo-overlay', { opacity: 0, scale: 0.5 });
    gsap.set('.angle-container', { opacity: 0, x: 100 });

    // Create timeline for hero animations
    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
        }
    });

    // Animate left overlay background
    heroTimeline.to('.hero-left::before', {
        x: '0%',
        duration: 1,
        ease: 'power2.out'
    })
    // Animate text content from left
    .to('.hero-text-content', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5')
    // Animate logo overlay
    .to('.logo-overlay', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.7)'
    }, '-=0.4')
    // Animate right image from right to left
    .to('.angle-container', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6');
});