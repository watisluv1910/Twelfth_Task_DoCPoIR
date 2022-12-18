const animatedBtn = document.querySelector('.animated-btn');

animatedBtn.addEventListener('click', function() {
    this.classList.add('active');
    this.addEventListener('animationend', function() {
        this.classList.remove('active');
    });
});