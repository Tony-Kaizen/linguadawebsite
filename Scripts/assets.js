// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2020 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results
  document.getElementById("days-countdown-number").innerHTML = days;
  document.getElementById("hours-countdown-number").innerHTML = hours;
  document.getElementById("minutes-countdown-number").innerHTML = minutes;
  document.getElementById("seconds-countdown-number").innerHTML = seconds;
  /* document.getElementById("days-countdown-number").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s "; */

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "A festa está rolando!";
  }
}, 1000);
// END OF COUNTDOWN TIMER


// DIRECTIONS TO EVENT SECTION
function initMap() {
  // The location of Linguada
  var Linguada = { lat: -23.957172, lng: 46.414607 };
  // The map, centered at Linguada
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 4, center: Linguada });
  // The marker, positioned at Linguada
  var marker = new google.maps.Marker({ position: Linguada, map: map });
}
// END OF DIRECTIONS TO EVENT


// FREQUENTLY ASKED QUESTIONS SECTION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// END OF FAQ SECTION


// LINGUADA FOUNDERS MODAL 1
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// end of modal


/* SCROLL TO TOP BUTTON */
//Get the button
var scrollButton = document.getElementById("scrollBtn");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}