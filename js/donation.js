document.addEventListener("DOMContentLoaded", function() {
    // Get the form and thank you message elements
    const form = document.querySelector('.donation-form form');
    const thankYouMessage = document.getElementById('thank-you');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Hide the form
        form.style.display = 'none';

        // Show the thank you message
        thankYouMessage.style.display = 'block';
    });
});
