var numOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numOfDrums; i++){
    document.querySelectorAll("button")[i ].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(button){
    switch (button) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3");
            w.play(); 
            break;
        
        case "a":
            var a = new Audio("sounds/tom-2.mp3");
            a.play(); 
            break;
        
        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play(); 
            break;

        case "d":
            var d = new Audio("sounds/tom-4.mp3");
            d.play(); 
            break;

        case "j":
            var j = new Audio("sounds/crash.mp3");
            j.play(); 
            break;

        case "k":
            var k = new Audio("sounds/kick-bass.mp3");
            k.play(); 
            break;

        case "l":
            var l = new Audio("sounds/snare.mp3");
            l.play(); 
            break;

            
    
        default:
            console.log("default section of switch!!!")
            break;
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");
    setTimeout(function(key){
    

        activeButton.classList.remove("pressed");
    },300);
}


