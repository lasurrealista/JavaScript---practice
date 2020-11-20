/* 1. Showing the text written on each button */

(function handleClick () {
    const buttons = document.getElementsByClassName('button');
    
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener('click', (() => {
            return function() {
                console.log(buttons[i].textContent)
            }
        })(i));
    }   
})();

/* 1b.

(function handleClick () {
    const buttons = document.getElementsByClassName('button');
    
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].onclick = (function() {
            return function() {
                console.log(buttons[i].textContent) 
            }
        })(i);
    }   
})();

1c.

(function handleClick () {
    const buttons = document.getElementsByClassName('button');
    
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].addEventListener('click', (function() {
            return function() {
                console.log(buttons[i].innerHTML) 
            }
        })(i));
    }   
})();

*/


/* 2. Arrow functions with default values - numbers */

const a = 10;
const b = 35;

let summation = ({a = 0, b = 0} = {}) => a + b;

let subtraction = ({a = 0, b = 0} = {}) => a - b;

console.log(summation({b}));
console.log(subtraction({a}));

/* 2b.
let summation = ({a = 0, b = 0} = {}) => a + b;

let subtraction = ({a = 0, b = 0} = {}) => a - b;

console.log(summation({ b : 35}));
console.log(subtraction({ a : 10 })); 
*/

/* 3. Arrow function with default values - personal data */

let personDataLog = ({firstName = 'John', lastName = 'Doe', age = 33} = {}) => 
    console.log('My name is ' + firstName + ' ' + lastName + '. I\'m ' + age + ' years old.');

console.log(personDataLog({age : 45}));
console.log(personDataLog({firstName : 'James'}));
console.log(personDataLog({firstName : 'James', lastName : 'Bond'}));

