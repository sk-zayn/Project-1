function updateClock() {
  let now = new Date(); // current date & time

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading 0 if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Put it together
  let timeString = `${hours}:${minutes}:${seconds}`;

  // Update DOM
  document.getElementById("clock").textContent = timeString;
}

// Call every second
setInterval(updateClock, 1000);

// Run immediately so it doesn’t wait 1 second
updateClock();
