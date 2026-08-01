let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slides[current].classList.add("active");

    current++;

    if (current >= slides.length) {
        current = 0;
    }
}

showSlide();

setInterval(showSlide, 4000);
