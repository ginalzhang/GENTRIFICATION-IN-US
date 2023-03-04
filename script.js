let card1 = document.querySelector("#harlem")
let card2 = document.querySelector("#hawaii")
let card3 = document.querySelector("#oakland")
let button1 = document.querySelector(".previous")
let button2 = document.querySelector(".next")
let form = document.querySelector("#form")
// Slideshow
let slides = document.getElementsByClassName("slides");
let slideIndex = 1;
displaySlides(slideIndex);

// Slideshow function declared

function displaySlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Next/previous arrows function
function goBack() {
  if (slideIndex > 1) {
    slideIndex = slideIndex - 1;
    displaySlides(slideIndex);
  }
}

function goForward() {
  // if (slideIndex <= slides.length) {
    slideIndex = slideIndex + 1;
    displaySlides(slideIndex);
  // }
  // else {
  //   slideIndex = 1;
  //   displaySlides(slideIndex);
  // }
}

// Image display function
function currentSlide(n) {
  displaySlides(slideIndex === n);
}
function subscribe(event){
  event.preventDefault()

  console.log(event.target.name.value)
    console.log(event.target.mail.value)
alert(`Thank you ${event.target.name.value} for subscribing to our newsletter! Look forward to recieving one each year!`)
}



form.addEventListener("submit",subscribe)
