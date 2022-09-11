function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let entiera, entierb, res;
let button = document.querySelector("button");
let input = document.querySelector("input");
let random1 = document.getElementById("random1");
let random2 = document.getElementById("random2");
let outputGood = document.getElementById("outputgood");
let outputBad = document.getElementById("outputbad");
let gameArea = document.getElementById("addition");
let restartBtn = document.getElementById("btn");
let audios = document.querySelectorAll("audio");
let icon = document.querySelector("i");

function mainSettings() {
  entiera = randomNumber(1, 100);
  console.log(entiera);
  random1.textContent = `${entiera}`;
  entierb = randomNumber(1, 100);
  random2.textContent = `${entierb}`;
  console.log(entierb);
  res = entiera + entierb;
  console.log(res);
  outputBad.style.display = "none";
  outputGood.style.display = "none";
}

function gameOver() {
  gameArea.style.display = "none";
  restartBtn.style.display = "block";
}

function restartGame(params) {
  mainSettings();
  gameArea.style.display = "block";
  gameArea.style.margin = "auto";
  gameArea.style.textAlign = "center";
  restartBtn.style.display = "none";
}

/* let entiera = randomNumber(1, 50);
let entierb = randomNumber(1, 50);
let res = entiera + entierb;

console.log(entiera);
console.log(entierb);
console.log(res); */

/* let button = document.querySelector("button");
let input = document.querySelector("input");
let random1 = document.getElementById("random1");
random1.textContent = `${entiera}`;
let random2 = document.getElementById("random2");
random2.textContent = `${entierb}`;
let output = document.getElementById("output"); */

mainSettings();
function additionRandom() {
  let resUser = Number(input.value);
  if (input.value.length <= 0) {
    alert("Enter the addition");
  } else {
    if (resUser == res) {
      outputGood.style.display = "block";
      audios[0].play();
      gameOver();
    } else {
      outputBad.style.display = "block";
      audios[1].play();
      gameOver();
    }
  }
  input.value = "";
}

button.addEventListener("click", additionRandom);
restartBtn.addEventListener("click", restartGame);
