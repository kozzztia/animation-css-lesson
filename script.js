import { deckOfCards } from "./cards.js";
const deck = document.querySelector('#deck');


function renderCards() {
    deckOfCards.forEach((item, index) => {
        const card = document.querySelectorAll('.card')[index];
        const cardInner = card.querySelector('.card-inner');
        if (item.isOpen) {
            cardInner.classList.add('active');
        } else {
            cardInner.classList.remove('active');
        }
    });
}

function initCards() {
    deck.innerHTML = "";
    deckOfCards.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <svg>
                        <use xlink:href="./assets/cards.svg#${item.name}"></use>
                    </svg>
                </div>
                <div class="card-back">
                    <img src="./assets/card-back-green.png" alt="back">
                </div>
            </div>
        `;
        deck.appendChild(card);

        card.addEventListener('click', () => {
            item.isOpen = !item.isOpen;
            renderCards(); 
        });
    });
}

initCards();


setInterval(() => {
    const randomIndex = Math.floor(Math.random() * deckOfCards.length);
    console.log(randomIndex);
    deckOfCards.forEach(item => item.isOpen = false);
    deckOfCards[randomIndex].isOpen = true;
    renderCards();
}, 2000);