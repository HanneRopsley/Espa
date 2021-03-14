//slideshow home page

let slideIndex = 0;

const showSlide = (s) => {
    let x = document.getElementsByClassName("photoSlide");
    if (s >= x.length) {
        slideIndex = 0;
    } 
    if (s<0) {
        slideIndex = x.length-1;
    }
    for (i=0; i<x.length;i++) {
        x[i].style.display="none";
    }
    x[slideIndex].style.display="block";
}

showSlide(slideIndex);

let nextPhoto = (n) => {
    slideIndex +=n;
    showSlide(slideIndex);
}

