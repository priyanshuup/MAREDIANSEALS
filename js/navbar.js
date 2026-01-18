// Navbar Active State - Simple Version
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current page filename
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
    
    console.log('Current page:', currentPage); // Debug
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Check if this is the current page
        if (linkHref.includes(currentPage) || 
            (currentPage === '' && linkHref.includes('index.html')) ||
            (currentPage === 'index.html' && linkHref.includes('index.html')) ||
            (currentPage === 'about.html' && linkHref.includes('about.html'))) {
            link.classList.add('active');
        }
        
        // Click handler for anchor links
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});