let gameseq=[];
let playerseq=[];
let started=false;
let btns=["yellow","red" ,"purple","green"];
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keydown",function(){
    if(!started){
    console.log("game started");
    started=true;
    levelUp();
}

});
function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    console.log(randIdx);
     console.log(randColor);
    console.log(randbtn);
   
    btnFlash(randbtn);
}

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },100);
}