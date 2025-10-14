function updateClock (){
    let now = new Date();
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now .getSeconds();
    let day = String (now.getDay())

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

   
    let ampm = hours >= 12 ? "PM" : "AM";
    if(!is24Hours){
        hours = hours % 12;
        hours = hours ? hours : 12;
    }

    let timeString = `${hours}:${minutes}:${seconds}`;
    let days = document.querySelector(".days");

    days.textContent = dayName[day];

    // document.getElementById("clock").textContent = hours + ":" + minutes + " " + ampm;
    document.getElementById("clock").textContent = timeString;
};

let is24Hours = true;
    let control = document.getElementById("control-button");
    control.addEventListener("click",()=>{
        is24Hours = !is24Hours;
    });



setInterval(() => {
    // let clock = document.getElementById("clock");
    // let r = Math.floor(Math.random()*256);
    // let g = Math.floor(Math.random()*256);
    // let b = Math.floor(Math.random()*256);
    // clock.style.color = `rgb(${r}, ${g}, ${b})`;
    updateClock()
}, 1000);
updateClock();