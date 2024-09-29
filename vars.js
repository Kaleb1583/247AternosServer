console.clear();

var username = document.querySelector(".username").children[0].innerText.replaceAll("\n                        ", "").replaceAll("                                            ", "")

var status = document.querySelectorAll(".statuslabel-label")[0].innerText;
var playersOnline = parseInt(document.querySelector(".live-status-box-value.js-players").innerText.split('/')[0]);

var status = Hermes.pageStatus.statusData;
var legacyStatus = Hermes.getInstance().getCurrentStatus().getLegacyStatus();
var ls = lastStatus;
// status/lastStatus has stuff like: bedrock? t/f, countdown, displayAddress, motd, player count, player list, port, software 
// i dont know the difference between status(Data) vs legacyStatus vs lastStatus

var ip = document.getElementById("ip").innerText;
var version = document.getElementById("version").innerText;
var software = document.getElementById("software").innerText;
var countdownElement = document.querySelector(".server-end-countdown");
// and to get the lastest countdown value document
var lastestCountdownValue = countdownElement.innerText;

var startButton = document.getElementById("start");
function startServer() { startButton.click(); }

var stopButton = document.getElementById("stop");
function stopServer() { stopButton.click(); } 

var cancelButton = document.getElementById("cancel")
function cancel() { cancelButton.click(); }

var restartButton = document.getElementById("restart");
function restartServer() { restartButton.click(); }

var confirmButton = document.getElementById("confirm");
function confirm() { confirmButton.click(); }

console.log(playersOnline)

//----------------------

var COUNTDOWN = false;
var COUNTDOWN_END = COUNTDOWN ? COUNTDOWN + Math.round(Date.now() / 1000) : false;
var CONSOLE_PERMISSION = true;
const ADMIN = false;
const HASJMX = true;
const HAS_CPU_LIMIT = false;
const HASJMXPTS = true;
const REWARDED = true;
const EXTEND_DEFAULT = 1;
const EXTEND_ONLY_BELOW_DEFAULT = true;

//----------------------

// aternos has custom alert using something like swal alert
alert({
    color: "green",
    title: "<i><b>title</b></i>",
    text: "text",
    buttons: ["okay"],
    classes: [""]
});

// you can use html custom text like strong, bold, italic & even elements like <h1>.

hideAlert(); /* (or/equals ->) */ lastAlert.hide(); // (when an alert is made its stored as lastAlert)

//----------------------

LANGUAGE
LANGUAGE_VARIABLES
LANG // (= "en")

//----------------------

remove top center ad: document.querySelector(".header-center").children[0].remove();
remove right sidebar ad: document.querySelector(".sidebar").remove();
remove ad above server ip: document.querySelector(".ad-replacement").remove();

// all together + "Continue with ad blocker" button click since theres an ad blocker detection that shows a screen if you have an ad blocker (or if you remove tbem with js like this)
document.querySelector(".header-center").children[0].remove(); document.querySelector(".sidebar").remove(); document.querySelector(".ad-replacement").remove(); document.querySelector(".btn.btn-white.YTRwQakOtprn").click();
//----------------------

updateServerStatus("") // this shows the: Start, Stop, Cancel, Restart & Confirm now! buttons.


pendingCancelTimeout
queueUpdateInterval
lastStatusQueuePercentage
pendingCancelTimeout


showIP(); // shows: IP, Port, Dynamic IP

