let slides = document.querySelectorAll(".slide");
let index = 0;

function changePhoto() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";

    index++;

    if (index >= slides.length) {
        index = 0;
    }
}

changePhoto();

setInterval(changePhoto, 4000);
