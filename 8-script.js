// JavaScript for Hamburger Menu Functionality

document.addEventListener('DOMContentLoaded', function () {
    // Get hamburger button and nav menu elements
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    // Check if elements exist before adding event listeners
    if (hamburger && navMenu) {
        // Add click event listener to hamburger button
        hamburger.addEventListener('click', function () {
            // Toggle active class on hamburger button for animation
            hamburger.classList.toggle('active');

            // Toggle active class on nav menu to show/hide
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links (for better UX)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                // Remove active classes to close menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside (optional enhancement)
        document.addEventListener('click', function (event) {
            // Check if click is outside the nav area
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Handle window resize to ensure proper menu state
        window.addEventListener('resize', function () {
            // If window is resized to desktop size, reset menu state
            if (window.innerWidth > 480) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links (enhancement)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
