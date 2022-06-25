const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSound_on = document.querySelector(".sound-on")
const buttonSound_off = document.querySelector(".sound-off")

buttonPlay.addEventListener("click",function (){
    buttonPlay.classList.add("hide") 
    buttonPause.classList.remove("hide")    
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
})
buttonPause.addEventListener("click",function (){
    buttonPause.classList.add("hide")    
    buttonPlay.classList.remove("hide") 
    
})
buttonStop.addEventListener("click",function (){
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
})
buttonSound_on.addEventListener("click",function (){
    buttonSound_on.classList.add("hide")
    buttonSound_off.classList.remove("hide")
})
buttonSound_off.addEventListener("click",function (){
    buttonSound_off.classList.add("hide")
    buttonSound_on.classList.remove("hide")
})
