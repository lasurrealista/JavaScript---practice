let matrix = [];
let stepCount = 0;
const cols = 3;
const rows = 3;
let mark = 'X'

/*
const initState = () => {
    for (let i = 0; i < rows; i += 1) {
        matrix[i] = [];
        for (let j = 0; j < cols; j += 1) {
            matrix[i][j] = null;
        }
    }
*/

const initState = () => {
    matrix = Array(cols).fill(null).map(() => Array(rows).fill(null))
}

const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

const deleteSigns = () => {
    document
        .querySelectorAll('.cell')
        .forEach(element => {
            element.textContent = '';
        });
}


const increaseCounter = () => {
    stepCount += 1;
}

const modifyCell = (element) => {
    element.textContent = mark;
    element.removeEventListener('click', handleClick);
}

const setMark = () => {
    mark = mark === 'X' ? 'O' : 'X';
}

const handleClick = (event) => {
    increaseCounter();
    modifyCell(event.target);
    setMark();
    changeMatrixValue(event.target);
    checkWinner();
}

const addClickListener = () => {
    document
        .querySelectorAll('.cell')
        .forEach(element => {
            element.addEventListener('click', handleClick)
        });
}

const removeAllClickListener = () => {
    document.querySelectorAll('.cell')
        .forEach(element => {
            element.removeEventListener('click', handleClick)
        });
}

const checkValues = (array) => array.map(row =>
    row.every((value) => value === 'X') ||
    row.every((value) => value === 'O'))
    .indexOf(true) !== -1;

    const checkColumnValues = () => 
        checkValues(matrix.map((array, i) => 
        array.map((item, j) => matrix[j][i])));

    const checkDiagonalValues = () =>
        checkValues([
        matrix.map((array, i) => matrix[i][i]),
        matrix.map((array, i) => matrix[i][matrix[i].length - i - 1])
]);


const checkWinner = () => {
    console.log(checkColumnValues(), checkDiagonalValues());
    if (checkValues(matrix) || checkColumnValues() || checkDiagonalValues()) {
            endGame();
    }
}

const setMessage = (message) => {
    document
        .querySelector('.message')
        .textContent = message
}

const startGame = () => {
    initState();
    addClickListener();
    newGame();
}

const endGame = () => {
    setMessage('The winner is Player ' + (mark === 'X' ? 'O' : 'X') + '.');
    removeAllClickListener();
}

const newGame = () => {
    document
        .querySelector('.button')
        .addEventListener('click', () => {
            initState();
            addClickListener();
            deleteSigns();
            setMessage('Playing...');
            setMark()
        })
}

startGame();