console.clear();
console.log("Started anti server shutdown.");

function timeToSeconds(timeStr) {
    var parts = String(timeStr).split(':');
    var minutes = parseInt(parts[0], 10);
    var seconds = parseInt(parts[1], 10);
    return (minutes * 60) + seconds;
}

//var lastPlayersOnline = null;

function main() {
    console.log("---");
    
    var statusElement = document.querySelectorAll(".statuslabel-label")[0];
    var playersElement = document.querySelector(".live-status-box-value.js-players");

    // Ensure elements exist before accessing their values
    if (statusElement && playersElement) {
        var status = statusElement.innerText;
        var playersOnline = parseInt(playersElement.innerText.split('/')[0]);
        var countdownElement = document.querySelector(".server-end-countdown");
        
        console.log("Current Status: " + status);
        console.log("Players Online: " + playersOnline);

        if (status === "Online") {
            console.log("Server is online");
            if (playersOnline === 0) {
                console.log("No players online.");
                console.log("Starting function to increase countdown to prevent shutdown");
                console.log("checking if countdown can be increased")

                if (countdownElement) {
                    var countdownValueWhenRunned = countdownElement.innerText; // Get the innerText
                    var countdownValue = timeToSeconds(countdownValueWhenRunned);

                    console.log("Countdown Value: " + countdownValue + " Seconds"); 

                    if (countdownValue < 60) { // Check if less than a minute
                        console.log("Less than a minute left, need to add time to keep the server on.");
                        
                        var addOneMinuteButton = document.querySelector(".extend").children[0];
                        if(addOneMinuteButton !== null) {
                            addOneMinuteButton.click();
                            console.log("Before: " + countdownValue + " -> " + countdownElement.innerText)
                            console.log('%cAdded a minute.', 'color: green');

                        }
                        
                    } else {
                        console.log("More than one minute left, can't add time yet.");
                        console.log('%ccouldnt add minute, will add a minute when possible', 'color: red');
                    }
                } else {
                    console.log("Countdown not found.");
                }
            } else {
                console.log("1 or more players online.");
            }
        } else if (status === "Offline") {
            console.log("Server is offline.");
            console.log("Turn your server on.");
        } else {
            console.log("Not online nor offline, your server may be: waiting, loading, starting, preparing, or saving.");
        }
    } else {
        console.log("One or more required elements are not found in the DOM."); // Log if elements are not found
    }

    console.log("---");
}

//main();

var interval = setInterval(main, 10000);
