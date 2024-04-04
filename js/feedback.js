const form = document.getElementById('feedbackform');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const visit = document.querySelector('input[name="visit"]:checked').value;
    const suggestion = document.getElementById('suggestion').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const recommendation = document.querySelector('input[name="recommendation"]:checked').value;
    const updates = document.getElementById('updates').value;
    const qor = document.getElementById('qor').value;

    const message = `Name: ${name}\nEmail: ${email}\nVisit: ${visit}\nSuggestion: ${suggestion}\nSatisfaction: ${satisfaction}\nRecommendation: ${recommendation}\nUpdates: ${updates}\nQOR: ${qor} \n \n Enter ok to Submit your details`;

    alert(message);
});
