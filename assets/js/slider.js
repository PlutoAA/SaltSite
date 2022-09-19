let offset = 0;
const sliderLine = document.querySelector('.slider__line');
let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
showSlides();

document.querySelector('#slideBtn1').addEventListener('click', function(){
    slideIndex = 0;
    slides[0].style.display = "block";
    slides[1].style.display = "none";
    slides[2].style.display = "none";

    if (slideIndex == 0) {
        slideBtn1.querySelector('svg').querySelector('path').classList += " slider-rounds__img_active";
        slideBtn2.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
        slideBtn3.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
    }
});

document.querySelector('#slideBtn2').addEventListener('click', function(){
    slideIndex = 1;
    slides[1].style.display = "block";
    slides[0].style.display = "none";
    slides[2].style.display = "none";

    if (slideIndex == 1) {
        slideBtn1.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
        slideBtn2.querySelector('svg').querySelector('path').classList += " slider-rounds__img_active";
        slideBtn3.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
    }
});

document.querySelector('#slideBtn3').addEventListener('click', function(){
    slideIndex = 2;
    slides[2].style.display = "block";
    slides[0].style.display = "none";
    slides[1].style.display = "none";

    if (slideIndex == 2) {
        slideBtn1.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
        slideBtn2.querySelector('svg').querySelector('path').classList -= " slider-rounds__img_active";
        slideBtn3.querySelector('svg').querySelector('path').classList += " slider-rounds__img_active";
    }
});

function showSlides() {
    let i;
    let dots = document.querySelectorAll(".slider-rounds__btn");

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
slideIndex++;

if (slideIndex > slides.length) {slideIndex = 1}

for (i = 0; i < dots.length; i++) {
    dots[i].querySelector('path').classList -= " slider-rounds__img_active";
}

slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].querySelector('path').classList += " slider-rounds__img_active";
setTimeout(showSlides, 20000); // Change image every 20 seconds
}