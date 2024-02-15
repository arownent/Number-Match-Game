let time = 120;
let score = 0;
let checknum;
let newnum;
function createnum(){
    let clutter = "";
for (let index = 1; index < 127; index++) {
    let num = Math.floor(Math.random() * 10);
    clutter += `<div class="numbercircle">${num}</div>`;
}
document.querySelector(".numberbody").innerHTML = clutter;
}
function timer(){
    let cleartime = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#time").innerHTML = time;
        }
        // <h1>Game Over. Your Score is ${score}</h1>
        else{
            clearInterval(cleartime);
            document.querySelector(".numberbody").innerHTML = `<h1>Game Over. Your Score is ${score}</h1> <button class="newbutton">New Game</button>`
            document.getElementsByClassName("newbutton").style.opacity = 1;
        }
    }, 1000);
    
}
function numbermatch(){
    newnum = Math.floor(Math.random()*10);
    document.querySelector("#matchnumber").textContent = newnum;
}
function scoreincrease(){
    score += 10;
    document.querySelector("#initialscore").textContent = score;
}

document.querySelector(".numberbody").addEventListener("click", function(dets){
    checknum = Number(dets.target.textContent);
    if (checknum === newnum) {
        scoreincrease();
        createnum();
        numbermatch();
    }
    
})
numbermatch();
createnum();
timer();
