document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000, // Autoplay delay in milliseconds
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.elementor-swiper-button-next',
            prevEl: '.elementor-swiper-button-prev',
        },
    });

    // Pause on Hover
    const swiperContainer = document.querySelector('.swiper-container');
    
    swiperContainer.addEventListener('mouseover', function() {
        swiper.autoplay.stop();
    });

    swiperContainer.addEventListener('mouseout', function() {
        swiper.autoplay.start();
    });
});
