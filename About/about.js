// About/about.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

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

    // Event listener for hamburger menu keypress (Enter key)
    hamburger.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            toggleNavbar();
        }
    });

    // Event listeners for navigation links click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close the navbar if it's open (useful for mobile)
            if (navbar.classList.contains('active')) {
                toggleNavbar();
            }

            // Remove 'active' class from all nav-links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add 'active' class to the clicked nav-link
            link.classList.add('active');
        });
    });

    // Intersection Observer setup for updating 'active' class on scroll
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '-150px 0px 0px 0px', // Adjust based on your fixed headers' combined height
        threshold: 0.6 // 60% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the section's ID
                const sectionId = entry.target.getAttribute('id');
                console.log(`Section in view: ${sectionId}`); // Debugging log

                // Remove 'active' class from all nav-links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the nav-link corresponding to the current section
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    console.log(`Active link set to: ${activeLink.textContent}`); // Debugging log
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => observer.observe(section));
});

document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        item.querySelector('.faq-toggle').textContent = answer.style.display === 'block' ? '-' : '+';
    });
});
