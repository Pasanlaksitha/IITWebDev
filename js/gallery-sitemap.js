// Adding event listener to the document to make sure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() { 
    // Swiper slider initialization
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    // Adding event listeners to the swiper container to stop the autoplay when the mouse is over the slider
    const swiperContainer = document.querySelector('.swiper-container');
    swiperContainer.addEventListener('mouseover', function() {
        swiper.autoplay.stop();
    });
    // Adding event listeners to the swiper container to start the autoplay when the mouse leaves the slider
    swiperContainer.addEventListener('mouseout', function() {
        swiper.autoplay.start();
    });
    // Adding event listeners to the swiper container to stop the autoplay when the mouse is over the slider
    const thumbnails = document.querySelectorAll('.thumbnail');
    const extendedImage = document.querySelector('.extended-image');
    const extendedText = document.querySelector('.extended-text');
    // Function to show the extended view
    function showExtendedView(imageSrc, description) {
        extendedImage.src = imageSrc;
        extendedText.textContent = description;
        extendedImage.parentElement.style.display = 'flex';
    }
    // Function to hide the extended view
    function hideExtendedView() {
        extendedImage.parentElement.style.display = 'none';
    }
    // Adding event listeners to the thumbnails
    thumbnails.forEach(thumbnail => {
        const imageSrc = thumbnail.querySelector('.thumbnail-image').src;
        const description = thumbnail.getAttribute('data-description');
        // Adding event listener to the thumbnail to show the extended view
        thumbnail.addEventListener('click', function() {
            showExtendedView(imageSrc, description);
        });
    });
    // Adding event listener to the extended view to hide it when clicked
    extendedImage.parentElement.addEventListener('click', function() {
        hideExtendedView();
    });
});
// Get the button
var mybutton = document.getElementById("top-button");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
// When the user clicks on the button, scroll to the top of the document
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari 
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
