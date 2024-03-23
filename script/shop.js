let time = 3000;
let slideshowImages = []
slideshowImages = document.querySelectorAll(".slideshow img")
function showSlide(i){
    if (i <= slideshowImages.length-1){
        let image = document.querySelectorAll(".slideshow img:nth-child(i)")
        document.getElementById("slideContainer").src = image.src;
    }else {
        document.getElementById("slideContainer").src = document.querySelectorAll(".slideshow img:nth-child(0)")
    }
}
showSlide(0);

