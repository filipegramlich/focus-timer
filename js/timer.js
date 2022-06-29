export function Timer (
    minutesDisplay,
    secondsDisplay,
    timeTimeOut,
    ){

    function updateDisplay (minutes,seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2,"0")
    }
    function reset(){
        updateDisplay(minutes,0)
        clearTimeout(timeTimeOut)
    }

    function coutdown(){
        timeTimeOut = setTimeout(function(){

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)

            updateDisplay(minutes, 0)
            
            if(minutes <= 0){
                resetControls()
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
    return {
        coutdown,
        reset,
        updateDisplay
    }
}