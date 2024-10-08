document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');

            console.log('Menu button clicked'); // Debugging line
        });
    } else {
        console.error('Menu toggle or nav links not found');
    }
});



// Smooth scrolling and highlighting the active section in the navbar
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll smoothly to the section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Remove active class from all links and add to the clicked one
        document.querySelectorAll('#navbar a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Highlighting the first navbar link as active on page load
document.querySelector('#navbar a').classList.add('active');
