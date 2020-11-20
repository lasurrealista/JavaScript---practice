const buttons = document.querySelectorAll('.button');

function changeColor(color) {
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
}

buttons.forEach (button => {
    
    button.addEventListener('click', () => {
        if (button.id === 'grey') {
            changeColor('grey');
        }

        if (button.id === 'white') {
            changeColor('white');
            }
        if (button.id === 'blue') {
            changeColor('blue');
            }
        if (button.id === 'yellow') {
        changeColor('yellow');
            }
        }
    )
});

/*const buttons = document.querySelectorAll('.button');
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
*/