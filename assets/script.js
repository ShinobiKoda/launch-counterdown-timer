// Set the date to the end of the current month
var countDownDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0
).getTime();

// Function to flip the card
function flipCard(cardId) {
  var card = document.getElementById(cardId);
  card.classList.add("flipped");
  setTimeout(function () {
    card.classList.remove("flipped");
  }, 500);
}

// Update the countdown every second
var x = setInterval(function () {
  // Get the current time
  var now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the new values
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Call flip animation for each card
  flipCard("days");
  flipCard("hours");
  flipCard("minutes");
  flipCard("seconds");
}, 1000);
