const second = document.querySelector('.second'); //Select the <div class="pointer second"> on the HTML
const minute = document.querySelector('.minute'); //Select the <div class="pointer minute"> on the HTML
const hour = document.querySelector('.hour'); //Select the <div class="pointer hour"> on the HTML
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds/60)*360)+90; // convert seconds to degrees
    const minutesDegrees= ((minutes/60)*360)+90; // convert minutes to degrees
    const hoursDegrees = ((hours/12)*360)+90; // convert hours to degrees
    second.style.transform = `rotate(${secondsDegrees}deg)`; //Select the <div class="hand second"> on the CSS to rotate de pointer
    minute.style.transform = `rotate(${minutesDegrees}deg)`;//Select the <div class="pointer minute"> on the CSS to rotate de pointer
    hour.style.transform = `rotate(${hoursDegrees}deg)`; //Select the <div class="pointer hour"> on the CSS to rotate de pointer
    console.log(seconds);
    console.log(minutes);
    console.log(hours);

}
setInterval(setDate, 1000);

/*Propriedades de js usadas:
Function -propriedade-()
setDate()
console.log
setInterval()
const
querySelector
-nome-da-variavel-.style.transform = `rotate(${-nome-da-variavel-}deg)`;
getMinutes()
getSeconds()*/