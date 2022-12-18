function init() {

    for (let task of document.querySelectorAll(".task-4, .task-5")) {

        const links = task.querySelectorAll('.menu-item');
        const indicator = task.querySelector('.indicator');

        console.log(indicator);

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
}

init();