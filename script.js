let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#new_btn");
let winnerContainer = document.querySelector(`.winner`);
let message = document.querySelector("#msg");

let loader = document.getElementById("pageloader");
window.addEventListener('load', () => {
loader.style.display='none';
});


let turnOn = true;
//jis ki turn hogi uske button ke upper X Ya 0 print hoga
const winnigPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const boxesArray = Array.from(boxes);
boxesArray.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnOn) {
      box.innerText = "O";
      turnOn = false;
    } else {
      box.innerText = "X";
      turnOn = true;
    }
    box.disabled = true;
    checkWin();
  });
});

// const showWinner = (winner) => {
//   message.innerText = `Congratulation ${winner} Wins`;
//   winnerContainer.classList.remove("hide");

//   disabledBox();
//   // enabledBox();
// };

// const checkWin = () => {
//   for (let pattern of winnigPattern) {
//     let possitionOne = boxes[pattern[0]].innerText;
//     let possitionTwo = boxes[pattern[1]].innerText;
//     let possitionThree = boxes[pattern[2]].innerText;

//     if (possitionOne != "" && possitionTwo != "" && possitionThree != "") {
//       //winnercondition
//       if (possitionOne === possitionTwo && possitionTwo === possitionThree) {
//         console.log("Winner", possitionOne);
//         // box.disabled();
//         showWinner();
//       }
//     }
//   }
// };

const showWinner = (winner) => {
  message.innerText = `Congratulations ${winner}Wins`;
  
  winnerContainer.classList.remove("hide");
  disabledBox();
};

const checkWin = () => {
  for (let pattern of winnigPattern) {
    let positionOne = boxes[pattern[0]].innerText;
    let positionTwo = boxes[pattern[1]].innerText;
    let positionThree = boxes[pattern[2]].innerText;

    if (positionOne !== "" && positionTwo !== "" && positionThree !== "") {
      if (positionOne === positionTwo && positionTwo === positionThree) {
        showWinner(positionOne); // Pass the winning symbol to showWinner function
        return; // Exit the loop once a winner is found
      }
    }
  }
};

const disabledBox = () => {
  for (let box of boxesArray) {
    box.disabled = true;
  }
};
const enabledBox = () => {
  for (let box of boxesArray) {
    box.disabled = false;
    box.innerText = "";
  }
};

//reset game
const resetGame = () => {
  turnOn = true;
  enabledBox();
  winnerContainer.classList.add("hide");
};
newGamebtn.addEventListener("click", resetGame);
// reset.addEventListener("click", resetGame);
