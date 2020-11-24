'use strict'

/* 1 - multiply each item with 1.27 and find their sum */

const numbersArray = [88, 2, 9, 951345, 678, 22];

const newNumbersArray= numbersArray.map(item => item * 1.27).reduce((previousNumber, currentNumber) => previousNumber + currentNumber);
console.log(newNumbersArray);

/* 2 */

const value = 23;
const mixedArray = [5646, 21, 10, 23, 98, 67, 56, 'ajjaj'];

const exists = mixedArray.some(item => item === value);
console.log(exists);

/* 

const exists = mixedArray.find(item => item === value);
console.log(exists); 
--> 23 

*/

const index = mixedArray.findIndex(item => item === value);
console.log(index);

const allElementIsANumber = mixedArray.every(item => typeof item === 'number');
console.log(allElementIsANumber);

const someElementIsANumber = mixedArray.some(item => typeof item === 'number');
console.log(someElementIsANumber);

/* 3 */

const content = ['első', 'második', 'harmadik'];

const listContent = content.map(item => '<li>' + item + '</li>').join(' ');
console.log(listContent);
 
/*
---> 

<ul>
    <li>első</li>
    <li>második</li>
    <li>harmadik</li>
</ul>
*/
