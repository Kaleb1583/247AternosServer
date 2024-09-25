// if you want to do code something your self you can use these to help

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


var COUNTDOWN = false; // idk what this does exactly
var COUNTDOWN_END = COUNTDOWN ? COUNTDOWN + Math.round(Date.now() / 1000) : false;
// ^ equals unix time, ive tried setting it to a higher ammount of time so the server wouldnt turn on 
// but its only cosmetic you can make it say 30 mins until the server turns off but if you go into another tab youll
// see the actual ammount of time left which would be 0:00 - 10:00 mins (<- normally it starts with around 5-10 mins)


// these are unknow like COUNTDOWN, dont know what they do but you can make a educated guess by the name
// and you can try to figure out what is is through console
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

hideAlert(); /* (or/equals ->) */ lastAlert.hide(); // (when an alert is made its stored as lastAlert)


LANGUAGE
LANGUAGE_VARIABLES
LANG // for english it would be var LANG = "en"


// ads on aternos
remove top center ad: document.querySelector(".header-center").children[0].remove();
remove right sidebar ad: document.querySelector(".sidebar").remove();
remove ad above server ip: document.querySelector(".ad-replacement").remove();

// all together in one line, note they can detect adblockers so when its runned it will pop up the red screen telling you to disable your ad blocker
document.querySelector(".header-center").children[0].remove(); document.querySelector(".sidebar").remove(); document.querySelector(".ad-replacement").remove(); 
