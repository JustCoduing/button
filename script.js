

const imageFrog = document.querySelector(".pepe")
const Frog = document.querySelector(".frog")

let imageArray = [Frog,imageFrog]
let rdmArrayChoice = imageArray[Math.floor(Math.random()*imageArray.length)]

let button = document.querySelector("button")
button.addEventListener("click",function click(){
    rdmArrayChoice.style.cssText ="visibility:visible;"
    if(rdmArrayChoice===Frog){
        setTimeout(() => {
            location.reload()
        }, 2500);
    }
    else{
        setTimeout(() => {
            location.reload()
        }, 1300);
    }
    
   
    
})


