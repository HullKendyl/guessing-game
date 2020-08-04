const colors = ["red", "orange", "yellow", "green", "blue"];
const cards = document.querySelectorAll(".card");
const resetButton = document.querySelector(".reset");
const pointsSpan = document.querySelector(".points");

resetButton.addEventListener("click", () => {
  location.reload();
});

cards.forEach((card) => {
  card.addEventListener("click", () => {
    getCardColor(card);
  });
});

function getCardColor(card) {
  let currentColor = card.style.backgroundColor;
  if (currentColor != "") {
    return false;
  }
  let x = Math.round(Math.random() * (colors.length - 1));
  let color = colors[x];
  card.style.backgroundColor = color;
}

setInterval(() => {
  let color1 = cards[0].style.backgroundColor;
  let color2 = cards[1].style.backgroundColor;
  let color3 = cards[2].style.backgroundColor;
  if (color1 !== "" && color2 !== "" && color3 !== "") {
    if (color1 !== "" && color1 === color2 && color1 === color3) {
      pointsSpan.innerText = "300";
    } else if (color1 !== "" && (color1 === color2 || color1 === color3)) {
      pointsSpan.innerText = "200";
    } else if (color2 !== "" && color2 === color3) {
      pointsSpan.innerText = "200";
    }
  }
}, 100);
