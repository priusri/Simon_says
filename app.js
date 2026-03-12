// // let gameSeq=[];
// // let userSeq=[];
// // let started=false;
// // let btns=["yellow","red" ,"purple","green"];
// // let level=0;

// // let h2=document.querySelector("h2");
// // document.addEventListener("keydown",function(){
// //     if(!started){
// //     console.log("game started");
// //     started=true;
// //     levelUp();
// // }

// // });
// // function levelUp(){
// //     userSeq=[];
// //     level++;
// //     h2.innerText=`Level ${level}`;
// //     //random button choose
// //     let randIdx=Math.floor(Math.random() * 4);
// //     let randColor = btns[randIdx];
// //     let randBtn= document.querySelector(`.${randColor}`);
// //     gameSeq.push(randColor);
// //      console.log(gameSeq);
// //     btnFlash(randBtn);
// // }

// // function btnFlash(btn){
// //    btn.classList.add("flash");
// //    setTimeout(function(){
// //     btn.classList.remove("flash")
// //    },100);
// // }

// // function btnPress(){
    
// //     let btn=this;
// //     btnFlash(btn);
// //      let  userColor=btn.getAttribute("id");
// //     userSeq.push(userColor);
// //     checkAns(userSeq.length-1);

// // }

// // let allBtns= document.querySelectorAll(".btn");
// // for( let btn of allBtns){
// //     btn.addEventListener("click" , btnPress);
// // }


// // function checkAns(idx){
// //     // let idx= level-1;
// //     if(userSeq[idx] == gameSeq[idx]){
// //         if(userSeq.length == gameSeq.length){
// //             setTimeout(levelUp,1000);
// //         }
// //     }
// //         else{
// //             h2.innerHTML=`Game Over.Your score was <b>${level}</b>!<br> Press Any Key to start`;
// //             document.querySelector("body").style.backgroundColor="red";
// //             setTimeout(function() {
// //                 document.querySelector("body").style.backgroundColor="white";
// //             },150);
// //             reset(); 
// //         }
// // }


// // function reset(){
// //     started=false;
// //     gameSeq=[];
// //     userSeq=[];
// //     level=0;}

// let gameSeq = [];
// let userSeq = [];
// let started = false;
// let btns = ["yellow", "red", "purple", "green"];
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keydown", function() {
//     if (!started) {
//         console.log("game started");
//         started = true;
//         levelUp();
//     }
// });

// function levelUp() {
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;
    
//     // Random button choose
//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
    
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     btnFlash(randBtn);
// }

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function() {
//         btn.classList.remove("flash");
//     }, 250); // FIX: Increased to 250ms so the flash is clearly visible
// }

// function btnPress() {
//     // FIX: Prevents clicking and breaking the array if the game hasn't started
//     if (!started) return; 

//     let btn = this;
//     btnFlash(btn);
    
//     let userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length - 1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for (let btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// function checkAns(idx) {
//     if (userSeq[idx] == gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         // FIX: Calculates the actual score (completed levels) instead of the failed level
//         let score = level === 0 ? 0 : level - 1;
//         h2.innerHTML = `Game Over. Your score was <b>${score}</b>!<br> Press Any Key to restart`;
        
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
        
//         reset();
//     }
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

let gameSeq = [];
let userSeq = [];
let started = false;
let btns = ["yellow", "red", "purple", "green"];
let level = 0;
let isPlayingSequence = false;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        level = 0;
        gameSeq = [];
        userSeq = [];
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);

    playSequence();
}

function playSequence() {
    isPlayingSequence = true;

    for (let i = 0; i < gameSeq.length; i++) {
        let color = gameSeq[i];
        let btn = document.querySelector(`#${color}`);

        setTimeout(function () {
            btnFlash(btn);
        }, 600 * i);
    }

    setTimeout(function () {
        isPlayingSequence = false;
    }, 600 * gameSeq.length);
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function btnPress() {
    if (!started || isPlayingSequence) {
        return;
    }

    let btn = this;
    let userColor = btn.getAttribute("id");

    userFlash(btn);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over. Your score was <b>${level - 1}</b>.<br>Press any key to restart`;
        document.body.style.backgroundColor = "red";

        setTimeout(function () {
            document.body.style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    isPlayingSequence = false;
}