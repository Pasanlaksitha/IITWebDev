document.addEventListener('DOMContentLoaded', function() {
    const formInputs = document.querySelectorAll('.form-inputs input, .form-inputs textarea, .form-inputs select');
    const formPreview = document.querySelector('.form-preview');

    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            const label = this.labels[0].textContent;
            const value = this.value;
            const previewText = document.createElement('p');
            previewText.textContent = `${label}: ${value}`;
            formPreview.appendChild(previewText);
        });
    });
});