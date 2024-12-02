// Declarations
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const time = prompt("Enter the time you want to wait for? (in minutes)");
const req = time * 60;

let timeleft = req;
let interval;
const minu = Math.floor(timeleft / 60);
const sec = timeleft % 60;
timer.textContent  = req;  
timer.innerHTML = `${minu.toString().padStart(2,"0")}:
     ${sec.toString().padStart(2,"0")}`;

// Function to update the timer display
const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:
     ${seconds.toString().padStart(2,"0")}`;

}
start.addEventListener("click", () => {
  interval = setInterval(() => {
    timeleft--;
    updateTimer();

    if(timeleft === 0){
        clearInterval(interval);
        alert("Time's up!");
        timeleft = req;
        updateTimer();
    }
  }, 1000);  
})

stop.addEventListener("click", () => {
  clearInterval(interval);
})

reset.addEventListener("click", () => {
    clearInterval(interval);
    timeleft = req;
    updateTimer();
});