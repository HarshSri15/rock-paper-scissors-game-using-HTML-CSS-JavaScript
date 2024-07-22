 let userScore=0;
 let compScore=0;
 const choices = document.querySelectorAll(".choice");
 const msg= document.querySelector("#msg");
 const userScorePara=document.querySelector("#user_score");
 const compScorePara=document.querySelector("#com_score");

 const genCompChoice = ()=>{
//   it will radomply genrate any of them (rock ,paper,seasor)
 const options=["rock","paper","scissors"];
//  Math.random genrates a random number between 0 and 1 but we want the number to make indexes of the elements
//  and to do that we multiply the random number by no of indexes we want 
// for example for 3 element we multipy maths.random()*3 it will give response between 0-2 
// and to remove the decimal values after decimal we use Math.floor(Math.random()*3)

 const randIdx=Math.floor(Math.random()*3)
//  now it will retun the value at random index genrated my Math.random
return options[randIdx];
  
 }
 const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="#081b31";
 }
 const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        console.log("you win")
        msg.innerText=`You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose ")
        msg.innerText=`You Lose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }


 }

const playGame =(userChoice)=>{
    console.log("user choice is equal to" ,userChoice);
// genrate computer choice 
const compChoice=genCompChoice();
console.log("computers choice is equal to" ,compChoice);
if(userChoice === compChoice){
// draw game condition
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        // computer choice cant be rock because rock will autometicly go into draw condition
        //computer can either genrate paper, scissors
       userWin=compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        // rock , scissors 
       userWin = compChoice==="scissors"?false:true;
    }else{
        //rock,paper
        //user k pass scissors
        userWin=compChoice==="rock"? false:true;
    }
        
    showWinner(userWin ,userChoice,compChoice);
}
}
 
 choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
       
        playGame(userChoice);
    });
 });