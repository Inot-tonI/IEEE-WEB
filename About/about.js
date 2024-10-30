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
        rootMargin: '-140px 0px 0px 0px', // Adjust based on your fixed headers' combined height
        threshold: 0.6 // 60% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get the section's ID
                const sectionId = entry.target.getAttribute('id');

                // Remove 'active' class from all nav-links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the nav-link corresponding to the current section
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => observer.observe(section));
});

// FAQ Toggle functionality
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        item.querySelector('.faq-toggle').textContent = answer.style.display === 'block' ? '-' : '+';
    });
});
