console.clear();
var isServerPage = false;
var url = location.href;
var status;
var playersOnline;

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
    console.log("user is on the server page (good thing)");
    isServerPage = true;
} else {
    console.log("user isn't on the server page (bad thing!)");
    if (status && status == "Offline") {
        alert("Go to '/server/' for it to work, it's currently: '" + location.pathname + "'");
    }
}

function startServer() {
    if (startButton) {
        startButton.click();
    } else {
        console.log("Start button not found.");
    }
}

function stopServer() {
    if (stopButton) {
        stopButton.click();
    } else {
        console.log("Stop button not found.");
    }
}

if (status === 'Offline') {
    console.log("server is offline, turning it on...");
    alert("If an ad shows, watch it! you have 120s until i check if its online");
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
    const playerFraction = document.querySelector(".live-status-box-value.js-players"); // ex: 1/5 Players
    playersOnline = parseInt(playerFraction.innerText.split('/')[0]); // Update playersOnline

    if (countdownElement) {
        const countdownValue = countdownElement.innerText;

        if (countdownValue === "0:59" && playersOnline === 0) {
            await countdownhitonemin();
        }
    } else {
        console.log("countdown not found!");
        console.log("server will probably shut down!")
    }

    if (playersOnline > 0) {
        console.log("Player is online, stopping time extension check.");
        clearInterval(checkInterval);
    } else {
        //console.log("No players online, continuing to add time...");
    }
}

function checkLoops() {
    console.log("starting main functions");
    checkInterval = setInterval(checkCountdown, 750); 
}

// Kaleb1583
