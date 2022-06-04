setTimeout(() => {
  confirm("Rule : Pick The Card In Which You Think Number may Be");
}, 1500);

let random = document.querySelector(".random-num");
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let h1 = document.querySelector("h1");
let reload = document.querySelector("button");
let crds = document.querySelectorAll(".card-conatiner");
let endCards = document.querySelector(".cards");
let cardall = document.querySelectorAll(".card-num");
let chances = document.querySelector(".chance");
let chanceSpan = document.querySelector(".chances");

let card = [card1, card2, card3];

let ran = Math.floor(100 * Math.random() + 1);
random.innerHTML = ran;

let leftChance = 2;
chances.innerHTML = leftChance;

cardall.forEach((ele, idx) => {
  cardall[idx].innerHTML = Math.floor(100 * Math.random() + 1);
});

let select = Math.floor(3 * Math.random());
cardall[select].innerHTML = ran;

//event listner

card1.addEventListener("click", abs1);
function abs1(e) {
  initial = 180;
  setTimeout(() => {
    card1.style.transform = "rotateY(0deg)";
  }, 2000);
  card1.style.transform = "rotateY(180deg)";
  check(0);
  leftChance--;
  chances.innerHTML = leftChance;
  if (leftChance < 1) {
    endIt();
  }
  check(0);
}

card2.addEventListener("click", abs2);
function abs2() {
  initial = 180;
  setTimeout(() => {
    card2.style.transform = "rotateY(0deg)";
  }, 2000);
  card2.style.transform = "rotateY(180deg)";
  {
    check(1);
  }
  leftChance--;
  chances.innerHTML = leftChance;
  if (leftChance < 1) {
    endIt();
  }
  check(1);
}

card3.addEventListener("click", abs3);
function abs3() {
  initial = 180;
  setTimeout(() => {
    card3.style.transform = "rotateY(0deg)";
  }, 2000);
  card3.style.transform = "rotateY(180deg)";
  {
    check(2);
  }
  leftChance--;
  chances.innerHTML = leftChance;
  if (leftChance < 1) {
    endIt();
  }
  check(2);
}

reload.addEventListener("click", function abs(e) {
  location.reload();
});

//functions

function check(ele) {
  if (cardall[ele].innerHTML == ran) {
    h1.innerHTML = "Congralutions.  You Won";
    chanceSpan.classList.add("cardsHide");
    display();
    revomeEvent();
  }
}
function endIt() {
  h1.innerHTML = "You Loose";
  chanceSpan.classList.add("cardsHide");
  cardall[select].style.transform = "rotateY(0deg)";
  display();
  revomeEvent();
}

function display() {
  reload.classList.add("classShow");
}

function revomeEvent() {
  card1.removeEventListener("click", abs1);
  card2.removeEventListener("click", abs2);
  card3.removeEventListener("click", abs3);
}

console.log(select, ran);
