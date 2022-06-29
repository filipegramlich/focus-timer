import {Controls} from "./controls.js"
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

const controls = Controls(
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
)

const timer = Timer(
    minutesDisplay,
    secondsDisplay,
    timeTimeOut,
    )

buttonPlay.addEventListener("click",function (){
    controls.play()
    timer.coutdown()
})
buttonPause.addEventListener("click",function (){
    controls.pause()
    timer.clearTimeout(timeTimeOut)
    
})
buttonStop.addEventListener("click",function (){
    timer.reset()
    controls.reset()
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
    let newMinutes = controls.getMinutes
    if(!newMinutes) {
        resetTimer()
        return
    }
    minutes = newMinutes
    timer.updateDisplay(minutes,0)
})
