

function makebubble(){

var clutter="";

for (let i = 1; i <=112; i++) {

    var rn = Math.floor(Math.random()*10)

    clutter += `<div class="bubble">${rn}</div>`;


}

document.querySelector("#pbottom").innerHTML = clutter


}

makebubble()



var timer = 60;
function runtime()
{
    var timer1 = setInterval(function(){
        if (timer > 0) {
            
            timer--;
            document.querySelector('#timerval').textContent=timer;
        }
        else{
            clearInterval(timer1) /// will stop the setinterval 
            document.querySelector("#pbottom").innerHTML = `<h1> Game Over </h1>  <h2> your score is:${score}</h2> `;
        }

    },1000); /// after every second the functoin  will work

}

runtime()


var hitrn = 0;
function getnewhit(){
     hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

getnewhit()


var score = 0;

function increasescore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;

}




document.querySelector("#pbottom").addEventListener("click",function(details){


    var clickednum = Number(details.target.textContent);

    if (hitrn === clickednum) {

        increasescore();
        makebubble();
        getnewhit();

        
    } 




})


