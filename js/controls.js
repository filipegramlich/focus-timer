export function Controls (
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
) {

    function reset(){
    buttonStop.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
    }
    function play (){
        buttonPlay.classList.add("hide") 
        buttonPause.classList.remove("hide")    
        buttonSet.classList.add("hide")
        buttonStop.classList.remove("hide")
        
    }
    function pause(){
        buttonPause.classList.add("hide")    
        buttonPlay.classList.remove("hide") 
    }

    return{
        reset,
        play,
        pause

    }
}
