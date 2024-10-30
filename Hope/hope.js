// project.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('.header-container');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Function to toggle navbar visibility
    const toggleNavbar = () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('toggle');

        // Update ARIA attributes for accessibility
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !expanded);
    };

    // Event listener for hamburger menu click
    hamburger.addEventListener('click', toggleNavbar);

    // Function to adjust content margin to offset fixed headers
    const adjustContentMargin = () => {
        if (header && contentWrapper) {
            const headerHeight = header.offsetHeight;
            contentWrapper.style.marginTop = `${headerHeight}px`;
        }
    };

    // Initial adjustment
    adjustContentMargin();

    // Adjust on window load and resize
    window.addEventListener('load', adjustContentMargin);
    window.addEventListener('resize', adjustContentMargin);

    // Dynamic Active Link Assignment
    const sections = document.querySelectorAll('.projects .project, .events .communityservice, .events .nontechnicalevents .event');
    const navLinks = document.querySelectorAll('.nav-links a');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.6 // 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the corresponding nav link
                const id = entry.target.getAttribute('id');
                const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
