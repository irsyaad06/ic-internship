document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-active');
            navLinks.classList.toggle('nav-active');
        });
    }

    // 2. Active Page Logic
    const currentPath = window.location.pathname;
    const pageName = currentPath.split("/").pop() || "index.html"; // Handle empty path as index.html
    
    // Also consider query parameters for comingsoon pages
    const urlParams = new URLSearchParams(window.location.search);
    const qsPage = urlParams.get('page');

    const navItems = document.querySelectorAll('.nav-links a');
    
    navItems.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Remove existing active classes first
        link.classList.remove('active');

        if (qsPage && linkHref.includes('comingsoon.html')) {
            // If we are on comingsoon and link is a comingsoon link, match the query param
            if (linkHref.includes(`page=${qsPage}`)) {
                link.classList.add('active');
            }
        } else if (!qsPage && linkHref === pageName) {
            // For normal pages like index, ketentuan, dll
            link.classList.add('active');
        } else if (!qsPage && pageName === '' && linkHref === 'index.html') {
             link.classList.add('active');
        }
    });
});
