//import default
import resetControls from "./controls.js"
import {Timer} from "./timer.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSound_on = document.querySelector(".sound-on")
const buttonSound_off = document.querySelector(".sound-off")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let timeTimeOut
let minutes = Number(minutesDisplay.textContent)

const timer = Timer()

buttonPlay.addEventListener("click",function (){
    buttonPlay.classList.add("hide") 
    buttonPause.classList.remove("hide")    
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
    
    coutdown()
})
buttonPause.addEventListener("click",function (){
    buttonPause.classList.add("hide")    
    buttonPlay.classList.remove("hide") 
    clearTimeout(timeTimeOut)
    
})
buttonStop.addEventListener("click",function (){
    resetControls()
    resetTimer()
})
buttonSound_on.addEventListener("click",function (){
    buttonSound_on.classList.add("hide")
    buttonSound_off.classList.remove("hide")
})
buttonSound_off.addEventListener("click",function (){
    buttonSound_off.classList.add("hide")
    buttonSound_on.classList.remove("hide")
})
buttonSet.addEventListener("click",function (){
    let newMinutes = prompt("Quantos minutos são?")
    if(!newMinutes) {
        resetTimer()
        return
    }
    minutes = newMinutes
    updateTimerDisplay(minutes,0)
})
