const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSound_on = document.querySelector(".sound-on")
const buttonSound_off = document.querySelector(".sound-off")
let minutes
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

function resetControls(){
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
}

function updateTimerDisplay (minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function coutdown(){
    setTimeout(function(){

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
    
})
buttonStop.addEventListener("click",function (){
    resetControls()
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
    minutes = prompt("Quantos minutos são?")
    updateTimerDisplay(minutes,0)
})
