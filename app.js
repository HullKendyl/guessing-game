const colors = ["red", "orange", "yellow", "green", "blue"];
const cards = document.querySelectorAll(".card");
const resetButton = document.querySelector(".reset");

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
    let x = Math.round(Math.random()*(colors.length-1));
    let color = colors[x];
    card.style.backgroundColor = color;
}