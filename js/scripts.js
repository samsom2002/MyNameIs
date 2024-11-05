// Contact Form Validation and Submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        // Optionally, you can reset the form here
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = targetElement.offsetTop - document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
document.getElementById('darkModeSwitch').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
});
