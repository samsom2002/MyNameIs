// Contact Form Validation and Submission


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
