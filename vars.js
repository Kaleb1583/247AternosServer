
console.clear();

var username = document.querySelector(".username").children[0].innerText.replaceAll("\n                        ", "").replaceAll("                                            ", "")

var status = document.querySelectorAll(".statuslabel-label")[0].innerText;
var playersOnline = parseInt(document.querySelector(".live-status-box-value.js-players").innerText.split('/')[0]);

var ls = lastStatus; // allows you to get things like the server ip without reading html (like the next var below) (var is named lastStatus but instead of just "lastStatus" i put "var ls = 'lastStatus' ")

var ip = document.getElementById("ip").innerText;
var version = document.getElementById("version").innerText;
var software = document.getElementById("software").innerText;

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


// aternos has custom alert using something like swal alert
alert({ title: "Alert Title", text: "This is the alert body text." })

// you can use html custom text like strong, bold, italic & even elements like <h1>.

