const images = [
  "./images/baleia.png",
  "./images/baleia.png",
  "./images/book.png",
  "./images/book.png",
  "./images/carro.png",
  "./images/carro.png",
  "./images/cat.png",
  "./images/cat.png",
  "./images/espada.png",
  "./images/espada.png",
  "./images/hamburguer.png",
  "./images/hamburguer.png",
  "./images/maca.png",
  "./images/maca.png",
  "./images/robo.png",
  "./images/robo.png",
];

let openCards = [];

let shuffleImages = images.sort(() => (Math.random() > 0.5 ? 2 : -1));

const gameContainer = document.querySelector(".game");

for (let i = 0; i < images.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  const image = document.createElement("img");
  image.src = images[i];
  box.appendChild(image);
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const image1Src = openCards[0].querySelector("img").src;
  const image2Src = openCards[1].querySelector("img").src;

  if (image1Src === image2Src) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === images.length) {
    alert("Você venceu!");
  }
}
