let popped = 0;
const balloonsContainer = document.querySelector('#balloon-gallery');
const balloons = document.querySelectorAll('.balloon');
const finalMessage = document.querySelector('#yay-no-balloons');

for (i =0; i < balloons.length; i++) {
    let balloon = balloons[i];
    balloon.addEventListener('mouseover', () => {
        balloon.style.backgroundColor = '#ededed';
        balloon.textContent = 'POP!';
        popped++;

        if (popped === balloons.length) {
            balloonsContainer.textContent = '';
            finalMessage.style.display = 'block';
        }
    })
};
