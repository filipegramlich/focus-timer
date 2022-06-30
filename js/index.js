import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"

const {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSound_off,
    buttonSound_on,
    minutesDisplay,
    secondsDisplay
} = elements

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls:controls.reset
    
})

buttonPlay.addEventListener("click",function (){
    controls.play()
    timer.coutdown()
})
buttonPause.addEventListener("click",function (){
    controls.pause()
    timer.hold()
    
})
buttonStop.addEventListener("click",function (){
    controls.reset()
    timer.reset()
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
    let newMinutes = controls.getMinutes()

    if(!newMinutes) {
        timer.reset()
        return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})
