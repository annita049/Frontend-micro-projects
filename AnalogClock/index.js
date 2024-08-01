const hourHand = document.querySelector('#hour-hand');
const minuteHand = document.querySelector('#minute-hand');
const secondHand = document.querySelector('#second-hand');

setInterval(()=>{
    const now = new Date();
    const hh = now.getHours() + now.getMinutes()/60;
    const mm = now.getMinutes() + now.getSeconds()/60;
    const sec = now.getSeconds();

    secondHand.style.transform = `rotate(${(6*sec)}deg)`;
    minuteHand.style.transform = `rotate(${(6*mm)}deg)`;
    hourHand.style.transform = `rotate(${(30*hh)}deg)`;
},1000);


// ---------------------------
// ---------------------------

// hourHand -> 
// 12hr = 360 deg
// 1 hr = 30 deg

// // minHand
// 60 min = 360 deg
// 1 min = 360 deg

// // secHand
// 60 sec = 360 deg
// 1 sec = 6 deg