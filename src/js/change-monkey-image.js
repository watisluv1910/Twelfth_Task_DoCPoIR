const monkeyImage = document.querySelector('.monkey-img');

function changeMonkeyImage() {   
    let src = monkeyImage.getAttribute('src');

    monkeyImage.setAttribute('src', src.replace(/closed|opened/, function(match) {
        return match === 'closed' ? 'opened' : 'closed';
    }));
}

monkeyImage.addEventListener('click', changeMonkeyImage);