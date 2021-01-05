'use strict';

const array1 = [1, 'Anna', 'Béla', 2, 'Cecil'];
const array2 = ['Dénes', 'Fanny', 'Elemér'];

async function converterPromise(array) { 
    try {
        const newArray = array.map(item => item.toUpperCase());
        console.log(newArray);
    } catch {
        console.error('Error: Not all items in the array are strings.');
    }
};

converterPromise(array1);
converterPromise(array2);

/*
async function sortStrings(array) { 
    try {
        const newArray = array.sort( (a, b) => a.localeCompare(b, 'hu'));
        console.log(newArray);
    } catch  {
        console.error('Error: Not all items in the array are strings.');
    }
};

sortStrings(array2);
*/

const sortStringArray = (arr) => {
    return new Promise((resolve, reject) => {
        const everyElementIsAString = arr.every((item) => typeof item === 'string');
        let sortedArray = null;
        if (everyElementIsAString) {
            try {
                sortedArray = [...arr].sort();
            }
            catch (err) {
                reject('Error: Something went wrong with sorting words.');
            }
        }
        sortedArray === null
            ? reject('Error: Not all items in the array are strings.')
            : resolve(sortedArray)
    })
};

const stringArray = ['baba', 'alma', 'cucu', 'mama'];
// resolve
sortStringArray(stringArray)
    .then(console.log)
    .catch(console.error)

const mixedArray = ['baba', 'alma', 'cucu', 1];
// reject
sortStringArray(mixedArray)
    .then(console.log)
    .catch(console.error)