const clock = document.querySelector("h2#clock");
const savedUsername_clock = localStorage.getItem("username");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

function startClock(){
    getClock();
    setInterval(getClock, 1000);
    clock.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.add(FADEIN_CLASSNAME);
}