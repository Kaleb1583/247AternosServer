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
    //console.log("server has 0 players, running add min function")
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
    console.log("starting check loop funtions");
    checkInterval = setInterval(checkCountdown, 750); 
}
