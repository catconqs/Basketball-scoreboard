
let countElHome = document.getElementById("count-home")
let count = 0


//functions for home number counts
function plusOneHome() {
    count += 1
    countElHome.textContent = count
}


function plusTwoHome() {
    count += 2
    countElHome.textContent = count
}


function plusThreeHome() {
    count += 3
    countElHome.textContent = count
}


//functions for guest number counts
let countElGuest = document.getElementById("count-guest")
let countGuest = 0

function plusOneGuest() {
    countGuest += 1
    countElGuest.textContent = countGuest
}

function plusTwoGuest() {
    countGuest += 2
    countElGuest.textContent = countGuest
}


function plusThreeGuest() {
    countGuest += 3
    countElGuest.textContent = countGuest
}


//reset button to reset BOTH scores: both counts and surfaced numbers

function resetScores(){
    countElGuest.textContent = 0
    countElHome.textContent = 0
    count = 0
    countGuest = 0
}


//button to click to show who the winner is, allowing for ties:

function highlightWinner(){
    
    if (Math.max(countGuest,count) == countGuest && count!=countGuest)
    {alert("Away is the winner with "+ countGuest +" point(s)!")}
    
       if (Math.max(countGuest,count) == count && count!=countGuest)
    {alert("Home is the winner with "+ count +" point(s)!")}
    
    if (count == countGuest)
    {alert("There is a tie for "+ countGuest +" point(s)!")}
    
}




//count-up timer using javascript

let startTime;
let elapsedTime =0;
let timerInterval;

function timeToString(time){
    let diffInHrs = time/3600000;
    let hh = Math.floor(diffInHrs);
    
    let diffInMin = (diffInHrs-hh)*60;
    let mm = Math.floor(diffInMin);
    
    let diffinSec = (diffInMin-mm)*60;
    let ss = Math.floor(diffinSec);
    
    let formattedHH = hh.toString().padStart(2,"0");
    let formattedMM = mm.toString().padStart(2,"0");
    let formattedSS = ss.toString().padStart(2,"0");
    
    return `${formattedHH}:${formattedMM}:${formattedSS}`;
    
}

//update timer display
function printTime(){
    elapsedTime= Date.now()-startTime;
    document.getElementById("timer").innerText = timeToString(elapsedTime);
}

//start timer function
function startTimer(){
    clearInterval(timerInterval);
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(printTime,1000);
}


//reset function
function reset(){
    clearInterval(timerInterval);
    elapsedTime = 0;
     document.getElementById("timer").innerText = "00:00:00";
}


//stop timer function
function stopTimer(){
    clearInterval(timerInterval);
}