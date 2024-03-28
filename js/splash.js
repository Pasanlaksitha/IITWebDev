document.addEventListener('DOMContentLoaded', function() {
    const intro = document.querySelector('.intro');
    const logo = document.querySelectorAll('.logo');
    const logoHeader = document.querySelector('.logo-header');

    //animate the logo
    function animateLogo() {
        logo.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('active');
            }, index * 200); // Adjust the timing as needed
        });
    }

    // hide the splash screen
    function hideSplash() {
        setTimeout(() => {
            intro.style.top = '-100%';
            logoHeader.classList.add('fade');
        }, 3000); // Adjust the duration as needed
    }

    animateLogo();
    hideSplash();
});
