const cells=document.querySelectorAll(".cells");
const Gtext=document.querySelector("#Gtext");
const restG=document.querySelector("#restG");
const winnerText=document.getElementById("winnerText");

let scoreX = document.getElementById("scoreA");
let scoreY = document.getElementById("scoreB");
let X=0;
let y=0;
let startTime = 0;
let elapsed = 0;
let min = 0;
let sec = 0;
let winner=false;
let chackWin=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];
menu.addEventListener("click",()=>{
  location.assign("starter.html");
});
let run=false;
let player;
let option=["","","","","","","","",""];

startG();
function startG(){
      cells.forEach(cell=>cell.addEventListener("click",Gclick));
      cells.forEach(cell=>cell.style.color="rgb(177, 150, 171)");
      run=true;
      let ran= Math.round(Math.random());
      if(ran==0){
      player="o";
      Gtext.style.backgroundColor="rgb(71, 48, 33)";
      }
      else{
          player="x";
          Gtext.style.backgroundColor="rgba(15, 46, 139, 0.849)";
      }
      Gtext.textContent=`${player}'s Turn`;
      
      restG.addEventListener("click",restGame);
}
function Gclick(){
    const cellIndex=this.getAttribute("cellIndex");
    if(option[cellIndex]!=""||!run){
        return;

    }
    else{
        updateG(this,cellIndex);
        
        chackWG();
    }
    if(player=="x"){
        Gtext.style.backgroundColor="rgba(15, 46, 139, 0.849)";
      }
      else{
        Gtext.style.backgroundColor="rgb(71, 48, 33)";
       

      }
}
function updateG(cell,index){
    
        option[index]=player;
        if(player=="x"){
            cell.style.color="rgba(15, 46, 139, 0.849)";
        }
        else if(player=="y"){
            cell.style.color="rgb(71, 48, 33)";
        }
        else{
            cell.style.color="purple";
        }
        cell.textContent=player;

         
  
}
function chengePL(){
    player = (player=="x") ? "o" :  "x";
    Gtext.textContent=`${player}'s Turn`;

}
function chackWG(){
      winner=false;
     for(let i=0; i < chackWin.length;i++){
        let condition=chackWin[i];
        let A=option[condition[0]];
        let B=option[condition[1]];
        let C=option[condition[2]];
        if(A==""||B==""||C==""){
            continue;
        }
        if(A==B&&B==C){
            winner=true;
            run=false;
        }
       
     }
    if(winner==true){
        winnerText.style.height = "100px";
        winnerText.style.display="block";
        winnerText.textContent=`${player} win the game!`;
        
              if(player=="x"){
                     X+=1;
                  scoreX.textContent = X;
              }
              if(player=="o"){
                y+=1;
             scoreY.textContent = y;
         }
    }
    else if(!option.includes("")) {
        winnerText.style.display="block";
        winnerText.textContent=`DRAW`;
        run=false;
    }
    else{
        chengePL();
    }
}
function restGame(){
    option=["","","","","","","","",""];
let ran= Math.round(Math.random());
    if(ran==0){
    player="o";
    Gtext.style.backgroundColor="rgb(71, 48, 33)";
    }
    else{
        player="x";
        Gtext.style.backgroundColor="rgba(15, 46, 139, 0.849)";
    }
    Gtext.textContent=`${player}'s Turn`;
    cells.forEach(cell=>{
        cell.textContent="";;
    });
    cells.forEach(cell=>cell.style.color="rgb(177, 150, 171)");
     run=true;
     winnerText.style.display="none";
}

function winDisplay(){
    let interval=setTimeout(display ,5);

}

window.addEventListener("keydown" ,start);
function start(event){
let key=event.keyCode;

if(key==32){
if(run==true){
run=false;
    winnerText.style.height = "170px";
    winnerText.textContent=`GAME PAUSED`;
    winnerText.style.display="block";
       
}
if(winner==true){
    restGame();
   }
else{
    run=true;
    winnerText.style.display="none";
}
}
}
function UNDO(){
    history.back();
}




