'use strict';

/* 1 */

function addItems(array) {
    for (let i = 0; i < array.length; i++) {
    if (array[i] < Number.MAX_SAFE_INTEGER &&
        array[i] > Number.MIN_SAFE_INTEGER) {
    const sum = array.reduce((a, b) => (a + b));
    return sum;  
    };
    };

    if (array[i] > Number.MAX_SAFE_INTEGER || 
        array[i] < Number.MIN_SAFE_INTEGER) {
    const itemBigInt = BigInt(array[i]);
    const sumBigInt = itemBigInt + BigInt(array.reduce((a, b) => (a + b)));
    return sumBigInt;
    }

    for (let j = 0; j < array[i].length; i++) {
    if ((array[i] + array[j]) > Number.MIN_SAFE_INTEGER ||
    (array[i] + array[j]) > Number.MAX_SAFE_INTEGER) {
    const sumOfTwoItems = BigInt((array[i] + array[j]));
    const sumManyBigInts = sumOfTwoItems + BigInt(array.reduce((a, b) => (a + b)));
    return sumManyBigInts;
    };
    };
};

console.log(addItems([6, 8955, 646, 54.54, 666]));
console.log(addItems([9223372036854775809, 6, 8955, 646, 54.54, 666]));
console.log(addItems([9223372036854775809, -9223372036854775809999, 6, 8955, 646, 54.54, 666]));
console.log(addItems([9223372036854775809, -922337203685477581000000, -9223372036854775809999, 6, 8955, 646, 54.54, 666]));

/*
const addItems = (...numbers) => {
    let sum = 0;
    let big = false;
    for (let i = 0; i < numbers.length; i++) {
        big = !Number.isSafeInteger(numbers[i]) || !Number.isSafeInteger(sum);
        sum = big ? BigInt(sum) : sum;
        sum += big ? BigInt(numbers[i]) : numbers[i];
     }; return sum;
};

console.log(addItems(6, 646456, 89, 234, 9223372036854775809))
console.log(addItems(85, 55, 66, 88));

*/

/* 2 */

const addItems2 = (...numbers) => {
    let sum = 0;
    let big = false;
    for (let i = 0; i < numbers.length; i++) {
        big = typeof numbers[i] === 'bigint' || !Number.isSafeInteger(sum);
        sum = big ? BigInt(sum) : sum;
        sum += big ? BigInt(numbers[i]) : numbers[i];
    } return sum;
}

console.log(addItems2(9223372036854775809, -922337203685477581000000, -9223372036854775809999, 6, 8955, 646, 54, 666));
console.log(addItems2(5, 16, 999, 44, 66, 77, 88));

/* 3 */

const converter = (decimal) => ({
    binary: decimal.toString(2),
    octal: decimal.toString(8),
    hexa: decimal.toString(16),
})

/* ---> array
function converter(decimal) {
    const numbersObject = [];
    const binary = decimal.toString(2);
    const octal = decimal.toString(8);
    const hexa = decimal.toString(16);
    numbersObject.push(binary, octal, hexa);
    return numbersObject;
};
*/

console.log(converter(54));