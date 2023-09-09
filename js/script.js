function updateCurrentTime() {
    // Get the current UTC time in milliseconds
    var currentUTCTime = new Date().getTime();

    // Display it in the HTML element with id "time"
    document.querySelector(".time").textContent = "Current UTC Time in milliseconds: " + currentUTCTime;
}

// Update the current time every second (1000 milliseconds)
setInterval(updateCurrentTime, 800);

// Call the function immediately to display the initial time
updateCurrentTime();

