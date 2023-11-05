const game = () => {
  let pScore = 0;
  let cScore = 0;
  //the function to start the game fadeout the intro and fade in the match
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // so for each option we have the option go call a function to give a number from 0.3 and from that we gonna select the game option
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);

        setTimeout(() => {
          //here is we call compare fun compare hand
          compareHand(this.textContent, computerChoice);

          //UPDATE THE IMAGES
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHand = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");
    //checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "it is a tie";
      return;
    }
    //checking for a rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();

        return;
      }
    }
    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "player Wins";
        pScore++;
        updateScore();

        return;
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "computer Wins";
        cScore++;
        updateScore();

        return;
      } else {
        winner.textContent = "player Wins";
        pScore++;
        updateScore();

        return;
      }
    }
  };

  //we call the function here
  startGame();
  playMatch();
};
//we call the game here to start all the function
game();
