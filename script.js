import {deckOfCards} from "./cards.js";
const deck = document.querySelector('#deck');


console.log(deckOfCards)

function renderCards() {
    deck.innerHTML = "";
    deckOfCards.map((item) => {
        const card = document.createElement('div');
        card.classList = "card";
                // Обробник події кліку
                card.addEventListener('click', () => {
                    item.isOpen = !item.isOpen;
                    renderCards();  // Перерендерити всі карти після зміни стану
                });
        

        card.innerHTML = `
                <div class="card-inner ${item.isOpen?"active":null}">
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
        deck.appendChild(card)
    })
}

renderCards()