import Sound from "./sounds.js"

export default function Timer ({
    minutesDisplay,
    secondsDisplay,
    resetControls
    
    } ){

    let timeTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay (newMinutes, seconds){
        newMinutes = newMinutes === undefined? minutes: newMinutes 
        seconds = seconds === undefined? 0:seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
        
    }

    function reset(){
        updateDisplay(minutes, 0)
        clearTimeout(timeTimeOut)
    }
    function coutdown(){
        timeTimeOut = setTimeout(function() {

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)
            
            if(isFinished){
                resetControls()
                Sound().timeEnd()
                return  
            }

            if (seconds <= 0 ){
                seconds = 60
                --minutes
            }

            updateDisplay(minutes,String(seconds-1))
            
            coutdown()
        }, 1000)
    }
    function updateMinutes(newMinutes){
        minutes = newMinutes
    }
    
    function hold(){
        clearTimeout(timeTimeOut)
    }
    return {
        coutdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}