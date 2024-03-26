const thumbnails = document.querySelectorAll('.thumbnail');
const extendedViews = document.querySelectorAll('.extended-view');

thumbnails.forEach((thumbnail, index) => {
    const extendedView = extendedViews[index];
    const colorInput = extendedView.querySelector('#color');
    const fontSelect = extendedView.querySelector('#font');

    thumbnail.addEventListener('click', () => {
        extendedView.style.display = 'block';
    });

    colorInput.addEventListener('input', () => {
        extendedView.style.color = colorInput.value;
    });

    fontSelect.addEventListener('change', () => {
        extendedView.style.fontFamily = fontSelect.value;
    });
});