class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
        this.buttonNext = carousel.querySelector('[data-carousel-button-next]');
        this.slidesContainer = carousel.querySelector('[data-carousel-slides-container]');

        this.currentSlide = 0;
        this.numSlides = this.slidesContainer.children.length;

        this.buttonPrevious.addEventListener('click', this.handlePrevious.bind(this));
        this.buttonNext.addEventListener('click', this.handleNext.bind(this));
    }

    handleNext() {
        this.currentSlide = (this.currentSlide + 1) % this.numSlides;
        this.slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }

    handlePrevious() {
        this.currentSlide = (this.currentSlide - 1 + this.numSlides) % this.numSlides;
        this.slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
}

const carousels = document.querySelectorAll('[data-carousel]');
carousels.forEach(carousel => new Carousel(carousel));
