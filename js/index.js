import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"

const sound = Sound()

import { buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSound_off,
    buttonSound_on,
    minutesDisplay,
    secondsDisplay } from "./elements.js"

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
    sound.pressButon()
})
buttonPause.addEventListener("click",function (){
    controls.pause()
    timer.hold()
    sound.pressButon()
})
buttonStop.addEventListener("click",function (){
    controls.reset()
    timer.reset()
    sound.pressButon()
})
buttonSound_on.addEventListener("click",function (){
    buttonSound_on.classList.add("hide")
    buttonSound_off.classList.remove("hide")
    sound.bgAudio.play()
})
buttonSound_off.addEventListener("click",function (){
    buttonSound_off.classList.add("hide")
    buttonSound_on.classList.remove("hide")
    sound.bgAudio.pause()
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
