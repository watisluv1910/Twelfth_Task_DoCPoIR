const modal = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');

modalBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        modal.classList.toggle('active');
    });
});