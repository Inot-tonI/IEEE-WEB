// // js/script.js

// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.getElementById('hamburger');
//     const navbar = document.getElementById('navbar');

//     hamburger.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//         hamburger.classList.toggle('toggle');

//         // Update ARIA attributes for accessibility
//         const expanded = hamburger.getAttribute('aria-expanded') === 'true';
//         hamburger.setAttribute('aria-expanded', !expanded);
//     });

//     // Close navbar when clicking outside
//     document.addEventListener('click', (event) => {
//         if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
//             if (navbar.classList.contains('active')) {
//                 navbar.classList.remove('active');
//                 hamburger.classList.remove('toggle');
//                 hamburger.setAttribute('aria-expanded', false);
//             }
//         }
//     });

//     // Close navbar when a link is clicked
//     const navLinks = navbar.querySelectorAll('a');
//     navLinks.forEach(link => {
//         link.addEventListener('click', () => {
//             if (navbar.classList.contains('active')) {
//                 navbar.classList.remove('active');
//                 hamburger.classList.remove('toggle');
//                 hamburger.setAttribute('aria-expanded', false);
//             }
//         });
//     });

//     // Enable keyboard accessibility for hamburger
//     hamburger.addEventListener('keypress', (event) => {
//         if (event.key === 'Enter') {
//             hamburger.click();
//         }
//     });
// });
