class Friend {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    toString() {
        return `${this.name} celebrates ` + ((this.gender == 'male') ? 'his' : 'her') + ` ${this.age} birthday`;
    }
}

function init() {
    let friends = [
        new Friend('John', 25, 'male'),
        new Friend('Jane Doe', 30, 'female'),
        new Friend('Viktor', 11, 'male'),
        new Friend('Vlad', 20, 'male'),
        new Friend('Beth', 41, 'female'),
        new Friend('Rick', 71, 'male'),
    ];

    let cardsContainer = document.getElementById('friend-cards-container');

    for (let friend of friends) {
        let card = document.createElement('div');
        card.classList.add('grid-item', 'card');
        card.innerHTML = 
        `<div class="card-header">
            <p class="card-title ff-subtitle-1">${friend.name}</p>
            <p class="card-subtitle ff-subtitle-2">${friend.age} years old</p>
        </div>
        <div class="card-body">
            <p class="card-text ff-body-2">${friend.toString()}</p>
        </div>`;

        cardsContainer.appendChild(card);
    }
}

init();