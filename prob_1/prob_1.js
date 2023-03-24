const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');

let time = '';

let timeS = 0;
let timeM = 0;
let timeH = 0;

// Function used to get actual time 
function getTime() {
    time = new Date();

    timeS = (time.getSeconds() * 6) - 90;
    timeM = (time.getMinutes() * 6) - 90;
    timeH = (time.getHours() * 15) + 180;
}

// Function used to rotate lines
function updateTime() {
    seconds.style.transform = `rotate(${timeS}deg)`;
    minutes.style.transform = `rotate(${timeM}deg)`;
    hours.style.transform = `rotate(${timeH}deg)`;
}

// Funciton used to repeat rotate process each second
function clock() {
    getTime();
    updateTime();
}

// Set interval for secondPassed function
setInterval(clock, 1000);

// Initialize clock interval
(()=>{
    clock();
})();