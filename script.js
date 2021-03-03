const secondsPointer = document.getElementById('seconds');
const minutesPointer = document.getElementById('minutes');
const hoursPointer = document.getElementById('hours');
setInterval(()=>{
    const time = new Date();
    const seconds = time.getSeconds() * 6;
    const minutes = time.getMinutes() * 6 + (seconds/60);
    const hours = time.getHours() * 30 + (minutes / 12);
    
    const attStyle = (element, time) => element.style.transform = `rotate(${time}deg)`;
    attStyle(secondsPointer, seconds);
    attStyle(minutesPointer, minutes);
    attStyle(hoursPointer, hours);
}, 1000);