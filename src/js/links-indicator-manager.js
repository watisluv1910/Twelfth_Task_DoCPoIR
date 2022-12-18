const indicator = document.querySelector('.indicator');
const links = document.querySelector('.task-4').querySelectorAll('.menu-item');

function init() {

    for (let link of links) {

        link.addEventListener('mouseenter', function() {
            indicator.style.width = `${this.offsetWidth}px`;
            indicator.style.transform = `translateX(${this.offsetLeft}px)`;

            link.classList.add('active');

            this.addEventListener('mouseleave', function() {

                indicator.style.width = `0px`;
                link.classList.remove('active');
            });
        });
    }
}

init();