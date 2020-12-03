'use strict';

/* 1 */

const mix = ['hello', 'hello', 53, 56, true, true, 961, 1, NaN, NaN];

//const newMix = [...new Set(mix)];
//console.log(newMix);

const removeDuplicates = (array) => {
    const newArray = [...new Set(array)];
    return newArray;
};

console.log(removeDuplicates(mix)); 

/* 2 */

const HU = {

    date (myDate) { 
        return new Intl.DateTimeFormat('hu-HU').format(myDate) },
    currency(myValue) { 
        return (new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' })).format(myValue) },
    list(array) { return `${array[0]}, ${array[1]} és ${array[2]}` }
}

console.log(HU.date(new Date()));
console.log(HU.currency(5000689.46));
console.log(HU.list(['első', 'második', 'harmadik']));

/* 3 */

//arrayToMap
const shoppingList = [
    { product: 'shoe', size: 36 },
    { product: 'skirt', size: '38' }
];

let mapShoppingList = new Map(shoppingList.map(i => [i.product, i.size]));
console.log(mapShoppingList);

//arrayToSet
const ancientRome = ['Cleo', 'Cleo', 56, NaN, 698, true, true, 'Brutus', 'March 15']
console.log(new Set(ancientRome));

//setToArray
const setAnimals =  new Set([13, 'dog', 'cat', 'fish', {dragon: 1, unicorn: 2}]); 
console.log(Array.from(setAnimals));
console.log([...setAnimals])

//mapToArray
const mapIngredients = new Map([
    ['flour', '520g'],
    ['egg', 2],
    [true, 'delicious'],
  ]);

const ingredientsArray = Array.from(mapIngredients).map(([key, value]) => ({ key, value }));
console.log(ingredientsArray);

//mapToSet
const mapIngredients2 = new Map([
    ['flour', '520g'],
    ['egg', 2],
    [true, 'delicious'],
    [true, 'delicious'],
  ]);

const setIngredients = new Set(mapIngredients2);
console.log(setIngredients);
//setToMap
console.log(new Map(mapIngredients2));

//convert an object into map
const washingMachine = { 
    code: 254952384,
    name: 'Super Washing Machine', 
    price: 1165000 
}; 
console.log(new Map(Object.entries(washingMachine)));


const objectConverter = {
    arrayToMap(array) {
        return new Map(array.map(i => [i.key, i.value]));
    },
    arrayToSet(array) {
        return new Set(array)
    },
    setToMap(set) {
        return new Map(set)
    },
    setToArray(set) {
        return Array.from(set)
        //[...set]
    },
    mapToArray(map) {
        return Array.from(map).map(([key, value]) => ({ key, value }));
    },
    mapToSet(map) {
        return new Set(map);
    }
};



