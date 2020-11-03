// Media Queries

// .clearfix::after {
//     content: "";
//     display: table;
//     clear: BroadcastChannel;
// }

// Hamburger Menu
function ToggleNavItems() {
    let navItems = document.querySelectorAll('nav > a');
    for(let i = 0; i < navItems.length; i++){
        navItems[i].classList.toggle('visible-nav-item');
    }
}


// Photo carousel/slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}    
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


// Email Validation for More Info Signup
// var name = document.forms["RegForm"]["Name"];			 
// var email = document.forms["RegForm"]["EMail"]; 

// if (name.value == "")								 
// { 
//     alert("Please enter your name."); 
//     name.focus(); 
//     return false; 
// } 

// if (email.value == "")								 
// { 
//     alert("Please enter a valid e-mail address."); 
//     email.focus(); 
//     return false; 
// }

// return true; 