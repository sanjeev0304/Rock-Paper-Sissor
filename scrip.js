let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userS = document.querySelector("#player");
let CompS = document.querySelector("#comp");
const msg = document.querySelector("#msg");

const cmpchoice = ()=>{
 let option = ["rock","paper","sissor"];
 let index = Math.floor(Math.random()*3);
 console.log(option[index]);
 return option[index];
}

const draw =(userChoice,compChoice)=>{
    msg.innerText = `Draw Your Choice is ${userChoice} and computer choice is ${compChoice}`
}

const winner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText = `You win Your Choice is ${userChoice} and computer choice is ${compChoice}`
        msg.style.backgroundColor = "green";
        userS.innerText = userScore;
    }
    else{
        compScore++;
        msg.innerText = `You loose Your Choice is ${userChoice} and computer choice is ${compChoice}`
        msg.style.backgroundColor = "red";
        CompS.innerText = compScore;
        
    }

}

const playGame = (userChoice)=>{
    const compChoice = cmpchoice();
    if(compChoice === userChoice){
        draw(userChoice,compChoice);
    }
    else{
        let userWin =true;
        if(userChoice==="rock"){
          userWin =  compChoice === "scissor" ? true : false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{
            userWin = compChoice === "paper" ? true : false;
        }
        winner(userWin,userChoice,compChoice);
    }
   
} 


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})