// Default game difficulty would be normal this will be implmented later on

let difficulty;

const playArea = document.querySelector(".play-area");
playArea.classList.add("area-ready");

setTimeout(() => {
  for (let i = 1; i <= 12; i++) {
    playArea.appendChild(createCard("150px", "225px"));
  }
  let allCards = document.querySelectorAll(".back-card-normal");
  for (let card of allCards) {
    card.classList.add("back-card-normal-ready");
  }
}, 2000);

function createCard() {
  let backCard = document.createElement("div");
  let backCardImg = document.createElement("img");
  backCardImg.style.objectFit = "cover";
  backCardImg.src = "./../assets/cardBack.svg";
  backCard.appendChild(backCardImg);
  backCard.style.margin = "20px";
  backCard.classList.add("back-card-normal");
  return backCard;
}
