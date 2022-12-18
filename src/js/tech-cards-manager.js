function init() {

    let cardsContainer = document.getElementById('tech-cards-container');

    for (let i = 1; i <= 3; i++) {
        let card = document.createElement('div');
        card.classList.add('flex-item', 'card');
        card.innerHTML = 
        `<div class="card-header">
            <img class="card-img" src="/resources/images/tech-img-${i}.png" alt="tech-img-${i}">
            <p class="card-title ff-headline-5">Header ${i}</p>
        </div>
        <div class="card-body">
            <p class="card-text ff-body-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
        </div>
        <div class="expand-btn clickable">
            <p class="ff-button">Read more</p>
        </div>`;

        card.querySelector('.expand-btn').addEventListener('click', function() {
            
            card.classList.toggle('active');

            this.querySelector('p').innerHTML = card.classList.contains('active') ? 'Hide' : 'Read more';
        });

        cardsContainer.appendChild(card);
    }
}

init();

