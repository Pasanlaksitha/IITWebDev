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

    const message = `Name: ${name}\nEmail: ${email}\nVisit: ${visit}\nSuggestion: ${suggestion}\nSatisfaction: ${satisfaction}\nRecommendation: ${recommendation}\nUpdates: ${updates}\nQuestion or Request: ${qor} \n \n Enter ok to Submit your details`;

    alert(message);
});



document.getElementById('feedbackform').addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelector('.submit').style.display = 'none';
    document.getElementById('preview-section').style.display = 'block';

    const previewContent = generatePreviewContent();
    document.getElementById('preview-content').innerHTML = previewContent;
});

function generatePreviewContent() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const visit = document.querySelector('input[name="visit"]:checked').value;
    const suggestion = document.getElementById('suggestion').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const recommendation = document.querySelector('input[name="recommendation"]:checked').value;
    const updates = document.getElementById('updates').value;
    const qor = document.getElementById('qor').value;

    let content = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Visit:</strong> ${visit}</p>
        <p><strong>Suggestion:</strong> ${suggestion}</p>
        <p><strong>Satisfaction:</strong> ${satisfaction}</p>
        <p><strong>Recommendation:</strong> ${recommendation}</p>
        <p><strong>Updates:</strong> ${updates}</p>
        <p><strong>Question or Request:</strong> ${qor}</p>
    `;

    return content;
}

document.getElementById('confirm-submit').addEventListener('click', function() {
    alert('Feedback form successfully submitted!');
    document.getElementById('feedbackform').submit();
});

document.getElementById('cancel-submit').addEventListener('click', function() {
    document.getElementById('preview-section').style.display = 'none';
    document.querySelector('.submit').style.display = 'inline-block';
});

