const colors = ["red", "orange", "yellow", "green", "blue"];
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        getCardColor(card);
    });
});

function getCardColor(card) {
    let x = Math.round(Math.random()*(colors.length-1));
    let color = colors[x];
    card.style.backgroundColor = color;
}