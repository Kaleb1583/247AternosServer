console.clear();

var isServerPage = false;
var url = location.href;
var status;
var playersOnline = 0;  // Initialize as 0
var wasPlayerOnline = false;  // Track if players were online

function updateVariables() {
    let statusLabel = document.querySelectorAll(".statuslabel-label")[0];
    let playersBox = document.querySelector(".live-status-box-value.js-players");

    if (statusLabel && playersBox) {
        status = statusLabel.innerText;
        playersOnline = parseInt(playersBox.innerText.split('/')[0]);

        if (status == 'Offline') {
            console.log("server offline");
        } else {
            //console.log(`${status} with ${playersOnline} players`);
        }
    } else {
        console.log("Unable to fetch status or players info.");
    }
}

updateVariables();
setInterval(updateVariables, 15000);

var ipElement = document.getElementById("ip");
var versionElement = document.getElementById("version");
var softwareElement = document.getElementById("software");

if (ipElement && versionElement && softwareElement) {
    var ip = ipElement.innerText;
    var version = versionElement.innerText;
    var software = softwareElement.innerText;
    console.log("ip: " + ip + ", version: " + version + ", software: " + software);
}

var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var restartButton = document.getElementById("restart");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

if (url.includes("/server/")) {
    console.log("user is on the right page. (/server/)");
    isServerPage = true;
} else {
    console.log("user isn't on the right page!");
    if (status && status == "Offline") {
        alert("Go to '/server/' for it to work, it's currently: '" + location.pathname + "'");
    }
}

function startServer() {
    startButton.click();
}

function stopServer() {
    stopButton.click();
}

function restartServer() {
    restartButton.click();
}

if (status === 'Offline') {
    console.log("server is offline, turning it on...");
    alert("if prompted watch the ad, click out of it, then dont touch anything!");
    startServer();
    onStart();
} else {
    alert("Go to 'aternos.org/server/' and DON'T click start.");
}

async function onStart() {
    console.log("main function started.");
    await sleep(120000); 

    console.log("120 seconds was waited for waiting until the server was online");

    updateVariables();

    if (status === 'Online') {
        console.log("server is on");
        checkLoops();
    } else {
        console.log("server is still offline.");
        alert("The server is still offline! refresh and try again, sorry :/")
    }
}

let isAddingTime = false;
let checkInterval;

async function countdownhitonemin() {
    if (isAddingTime) return;
    isAddingTime = true;

    var addOneMinuteButton = document.querySelector(".extend")?.children[0];

    if (!addOneMinuteButton) {
        console.log("Button Not Found!");
        isAddingTime = false;
        return;
    } else {
        addOneMinuteButton.click();

        setTimeout(() => {
            const countdownElement = document.querySelector(".server-end-countdown");
            if (countdownElement) {
                const countdownValue = countdownElement.innerText;
                if (countdownValue.startsWith("1")) {
                    console.log("1 More Minute Added.");
                }
            }
            isAddingTime = false;
        }, 1000);
    }
}

async function checkCountdown() {
    const countdownElement = document.querySelector(".server-end-countdown");
    const playerFraction = document.querySelector(".live-status-box-value.js-players");
    playersOnline = parseInt(playerFraction.innerText.split('/')[0]);

    if (countdownElement) {
        const countdownValue = countdownElement.innerText;

        // If countdown is 0:59 and no players are online, add one minute
        if (countdownValue === "0:59" && playersOnline === 0) {
            await countdownhitonemin();
        }
    } else {
        console.log("Countdown not found! Server may shut down.");
    }

    // Handle when players join or leave
    if (playersOnline > 0) {
        if (!wasPlayerOnline) {
            console.log("Player joined. Stopping time extension checks.");
            clearInterval(checkInterval);  // Stop checking when a player is online
        }
        wasPlayerOnline = true;
    } else {
        if (wasPlayerOnline) {
            console.log("Player left. Resuming time extension checks.");
            checkLoops();  // Restart time extension check when all players leave
        }
        wasPlayerOnline = false;
    }
}

function checkLoops() {
    console.log("Starting time extension check loops");
    if (!checkInterval) {
        checkInterval = setInterval(checkCountdown, 750); 
    }
}
