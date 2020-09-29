var slideIndex = 1; //set starting point
showSlides(slideIndex);

function plusSlides(n) { 
    showSlides(slideIndex += n);// call showSlides function for the buttons
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides"); //get class "mySlides" from html
    if(n > slides.length) {
        slideIndex = 1;//if n greater than slide total length go back to 1
    } else if(n < 1) {
        slideIndex = slides.length;
    } else {
        
    }
    for (i = 0; i < slides.length; i++) {//iterate through Slides variable
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";//switches display from none to block
}