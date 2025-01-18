// Declare a variable for the music source
var musik = "";

// Select the audio element
var audio = document.querySelector(".audio");

// Set the audio source if musik is not empty
if (musik) {
    audio.src = musik;
}

// Function to start the application
function mulai() {
    // Play the audio
    audio.play();

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Hide the opening screen
    document.querySelector(".open").style.opacity = "0";

    // Enable vertical scrolling
    document.querySelector(".body").style.overflowY = "scroll";

    // Remove the opening screen from the DOM after a delay
    setTimeout(function() {
        document.querySelector(".open").style.display = "none";
    }, 1200);
}


  
  