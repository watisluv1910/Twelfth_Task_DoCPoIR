const input = document.querySelector('input');
const formCounter = document.querySelector('.form-counter');

input.addEventListener('input', (event) => {

    const inputLength = event.target.value.length;
    const maxLength = event.target.maxLength;
    
    formCounter.textContent = `${inputLength}`;
});
