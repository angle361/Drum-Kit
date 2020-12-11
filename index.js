
//Detecting button press
var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var x=this.innerHTML;
        Music(x);
});
}

//Detecting key press

document.addEventListener("keypress",function (event){
        Music(event.key);
});

function Music(key) {  //key is a property of keypress
  

  switch (key) {
    case "w": 
            var audio=new Audio("sounds/0.mp3");
            audio.play();
            break;
    case "s": var audio=new Audio("sounds/1.mp3");
            audio.play();     
            break;   
    case "a": var audio=new Audio("sounds/2.mp3");
            audio.play();
            break;
    case "d": var audio=new Audio("sounds/3.mp3");
            audio.play(); 
            break;
    case "j": var audio=new Audio("sounds/4.mp3");
            audio.play();     
            break;   
    case "l": var audio=new Audio("sounds/5.mp3");
            audio.play();
            break;
    case "k": var audio=new Audio("sounds/6.mp3");
            audio.play(); 
            break;        
  }
}     
//Button animation
function buttonAnimation(currentKey) {
        var activeBtn = document.querySelector("."+ currentKey);
        activeBtn.classList.add("pressed");
        setTimeout(function(){ 
                activeBtn.classList.remove("pressed");
         }, 500); //500ms

}

