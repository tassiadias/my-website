document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Check if hamburger and navLinks exist before proceeding
    if (hamburger && navLinks) {
        const links = navLinks.querySelectorAll("li");

        // Toggle the menu when hamburger is clicked
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open"); // Optional: animate the hamburger icon
        });

        // Close the menu when any link is clicked
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                hamburger.classList.remove("open");
            });
        });
    } else {
        console.error("Hamburger or NavLinks not found in the DOM");
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let form = event.target;

    // Submit the form via Netlify
    fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
    })
    .then(() => {
        document.getElementById('form-response').style.display = 'block'; // Show success message
        form.style.display = 'none'; // Hide the form
    })
    .catch(error => alert('Form submission error: ' + error));
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
