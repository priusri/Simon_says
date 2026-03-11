let gameSeq=[];
let userSeq=[];
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
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    //random button choose
    let randIdx=Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randIdx);
     console.log(randColor);
   
   
    gameFlash(randbtn);
}

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },100);
}

function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);
    

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function checkAns(idx){
    let idx= level-1;
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        else{
            h2.innerText='Game Over! Press Any Key to start';
            reset(); 
        }
}
}
function reset(){
    started==false;
    gameSeq=[];
    userSeq=[];
    level=0;