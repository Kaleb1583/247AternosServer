// if you want to do code something yourself you can use these to help
console.clear();

var username = document.querySelector(".username").children[0].innerText.replaceAll("\n                        ", "").replaceAll("                                            ", "");

// Getting server status and player count from the page
var status = document.querySelectorAll(".statuslabel-label")[0].innerText;
var playersOnline = parseInt(document.querySelector(".live-status-box-value.js-players").innerText.split('/')[0]);

// Server status from Hermes and legacy systems
var status = Hermes.pageStatus.statusData;
var legacyStatus = Hermes.getInstance().getCurrentStatus().getLegacyStatus();
var ls = lastStatus; // allows you to get things like the server ip without reading html

// IP, version, software info from the page
var ip = document.getElementById("ip").innerText;
var version = document.getElementById("version").innerText;
var software = document.getElementById("software").innerText;

// Countdown timer info
var countdownElement = document.querySelector(".server-end-countdown");
var lastestCountdownValue = countdownElement ? countdownElement.innerText : "No countdown";

// Button control functions
var startButton = document.getElementById("start");
function startServer() { startButton.click(); }

var stopButton = document.getElementById("stop");
function stopServer() { stopButton.click(); }

var cancelButton = document.getElementById("cancel");
function cancel() { cancelButton.click(); }

var restartButton = document.getElementById("restart");
function restartServer() { restartButton.click(); }

var confirmButton = document.getElementById("confirm");
function confirm() { confirmButton.click(); }

console.log(playersOnline);

// Countdown-related variables (not entirely clear what they control but included for potential functionality)
var COUNTDOWN = false;
var COUNTDOWN_END = COUNTDOWN ? COUNTDOWN + Math.round(Date.now() / 1000) : false;
// COUNTDOWN only seems cosmetic. Changing it doesn't affect actual shutdown time, but it changes how it looks.

var CONSOLE_PERMISSION = true;
const ADMIN = false;
const HASJMX = true;
const HAS_CPU_LIMIT = false;
const HASJMXPTS = true;
const REWARDED = true;
const EXTEND_DEFAULT = 1;
const EXTEND_ONLY_BELOW_DEFAULT = true;

// Aternos custom alert using something like swal alert
alert({ title: "Alert Title", text: "This is the alert body text." });
// You can use HTML custom text like <strong>, <b>, <i> & even elements like <h1>.

hideAlert(); /* or */ lastAlert.hide(); // when an alert is made, it's stored as lastAlert

// Language settings
LANGUAGE; // Accesses the current language
LANGUAGE_VARIABLES; 
var LANG = "en"; // for English

// Ad removal on Aternos
document.querySelector(".header-center").children[0].remove(); // Remove top center ad
document.querySelector(".sidebar").remove(); // Remove right sidebar ad
document.querySelector(".ad-replacement").remove(); // Remove ad above server IP

// Function to update server status, possibly showing buttons like Start, Stop, Cancel, etc.
updateServerStatus("");

// Additional unknown variables that may be useful for further customization
pendingCancelTimeout;
queueUpdateInterval;
lastStatusQueuePercentage;
pendingCancelTimeout;
