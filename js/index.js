for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // var audio=new Audio("sounds/tom-1.mp3");
        // audio.play();
        var butttonInnerHTML=this.innerHTML;
        makeSound(butttonInnerHTML);
        buttonAnimation(butttonInnerHTML);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var sound1=new Audio("sounds/crash.mp3");
            sound1.play();
            break;
        case "a":
            var sound2=new Audio("sounds/kick-bass.mp3");
            sound2.play();
            break;
        case "s":
            var sound3=new Audio("sounds/snare.mp3");
            sound3.play();
            break;
        case "d":
            var sound4=new Audio("sounds/tom-1.mp3");
            sound4.play();
            break;
        
        case "j":
            var sound5=new Audio("sounds/tom-2.mp3");
            sound5.play();
            break;
            
        case "k":
            var sound6=new Audio("sounds/tom-3.mp3");
            sound6.play();
            break;
        
        case "l":
            var sound7=new Audio("sounds/tom-4.mp3");
            sound7.play();
            break;
        default:console.log(key);

    }
    
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");  
    },100);
}