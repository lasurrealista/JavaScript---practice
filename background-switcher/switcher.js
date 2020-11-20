const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach (button => {

    button.addEventListener('click', () => {

        if (button.id === 'grey'){
            body.style.backgroundColor = 'grey';
        }
        if (button.id === 'white'){
            body.style.backgroundColor = 'white';
        }
        if (button.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
        if (button.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
    })
});