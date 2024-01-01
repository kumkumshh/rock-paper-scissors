let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

// Generate computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

// draw Game
const drawGame = () => {
    msg.innerText = "game was draw. Play Again";
    msg.style.backgroundColor = "#11235A";
}

// userWin
const showWinner = (userWin , userChoice , compChoice) => {
  if (userWin) {
    user++;
    userScore.innerText = user;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor = "green";
  } else {
    comp++;
    compScore.innerText = comp;
      msg.innerText =  `You Lost.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
  }
};

// play game function
const playGame = (userChoice) => {

  const compChoice = genCompChoice();


  if (userChoice === compChoice) {
    // draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, Paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin , userChoice , compChoice);
  }
};

// getting user choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
