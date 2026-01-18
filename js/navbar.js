// Navbar Active State - Final Version
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current page filename from URL
    const currentPath = window.location.pathname;
    const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    // Default to index.html if no page specified
    const activePage = currentPage || 'index.html';
    
    console.log('Current page detected:', activePage); // Debug
    
    // Set active state based on current page
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        const linkPage = linkHref.substring(linkHref.lastIndexOf('/') + 1);
        
        // Match current page with link
        if (linkPage === activePage) {
            link.classList.add('active');
            console.log('Active link set:', linkPage); // Debug
        }
        
        // Click handler to update active state
        link.addEventListener('click', function(e) {
            // Remove active from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked link
            this.classList.add('active');
        });
    });
    
    // Handle page visibility changes (when user returns to tab)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Re-check active page when tab becomes visible
            const newPath = window.location.pathname;
            const newPage = newPath.substring(newPath.lastIndexOf('/') + 1) || 'index.html';
            
            navLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                const linkPage = linkHref.substring(linkHref.lastIndexOf('/') + 1);
                
                if (linkPage === newPage) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
});