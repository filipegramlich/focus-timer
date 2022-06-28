export function Timer (
    minutesDisplay,
    secondsDisplay,
    timeTimeOut,
    ){

    function updateTimerDisplay (minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    function reset(){
        updateTimerDisplay(minutes,0)
        clearTimeout(timeTimeOut)
    }

    function coutdown(){
        timeTimeOut = setTimeout(function(){

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateTimerDisplay(minutes, 0)
            
            if(minutes <= 0){
                resetControls()
                return  
            }

            if (seconds <= 0 ){
                seconds = 60
                --minutes
            }

            updateTimerDisplay(minutes,String(seconds-1))
            
            coutdown()
        }, 1000)
    }
    return {
        coutdown,
        reset,
        updateTimerDisplay
    }
}