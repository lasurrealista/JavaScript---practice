'use strict'

/* 1 - smallest value */

const intArr = [564644, 65454, 322, 5896, 2, 23, 88795];
let min = intArr[0];
for (let i = 1; i < intArr.length; i += 1) {
    if (intArr[i] < min) {
        min = intArr[i]
    }
}
console.log(min);

/* 2 - largest value */

let max = intArr[0];
for (let i = 1; i < intArr.length; i += 1) {
    if (intArr[i] > max) {
        max = intArr[i]
    }
}
console.log(max);

/* 3 - average */

let sum = 0;
for (let i = 0; i < intArr.length; i ++) {
    sum += intArr[i];
}
let average = sum / intArr.length;

console.log(average);

/* 4 - sum */

for (let i = 0; i < intArr.length; i ++) {
    sum += intArr[i];
}

console.log(sum);

/* 5 - count of even numbers */

let numberEvens = 0;
for (let i = 0; i < intArr.length; i ++) {
    if (i % 2 == 0) 
    numberEvens++;
}

console.log(numberEvens);

/* 6 - second smallest number */

let smallest = intArr[0];
let secondSmallest = intArr[0];
for (let i = 0; i < intArr.length; i++) {
    if (intArr[i] < smallest) {
        secondSmallest = smallest;
        smallest = intArr[i];
    } else if (intArr[i] < secondSmallest) {
        secondSmallest = intArr[i];
    }
}
console.log(secondSmallest);

/* 6b *
for (let i = 0; i < intArr.length; i++) { 
    for (let j = i; j < intArr.length; j++) { 
        if (intArr[i] > intArr[j]) {
          let x = intArr[i];
          intArr[i] = intArr[j];
          intArr[j] = x;
        };
    };
};
console.log(intArr[1]);

* sort an array *

for (let i = 0; i < intArr.length; i++) { 
    for (let j = i; j < intArr.length; j++) { 
        if (intArr[i] > intArr[j]) {
          let x = intArr[i];
          intArr[i] = intArr[j];
          intArr[j] = x;
        };
    };
};
console.log(intArr);
/


/* 7 - third largest number */

for (let i = 0; i < intArr.length; i++) { 
    for (let j = i; j < intArr.length; j++) { 
        if (intArr[i] < intArr[j]) {
          let x = intArr[i];
          intArr[i] = intArr[j];
          intArr[j] = x;
        };
    };
};
console.log(intArr[2]);

/* 7b - reverse an array *
for (let i = 0; i < intArr.length; i++) { 
    for (let j = i; j < intArr.length; j++) { 
        if (intArr[i] < intArr[j]) {
          let x = intArr[i];
          intArr[i] = intArr[j];
          intArr[j] = x;
        };
    };
};
console.log(intArr);
/

/* 8 - find an item */

let find = 23;
let found = false;
for (let i = 0; i < intArr.length && !found; i++) {
  if (intArr[i] == find) {
    found = true;
  }
}
console.log(found);

/* 9 - find an item - binary search */

for (let i = 0; i < intArr.length; i++) { 
    for (let j = i; j < intArr.length; j++) { 
        if (intArr[i] > intArr[j]) {
          let x = intArr[i];
          intArr[i] = intArr[j];
          intArr[j] = x;
        };
    };
};

function binarySearch(intArr, find) {
	let start = 0;
    let end = intArr.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (intArr[middle] === find) {
			return true;
		} else if (intArr[middle] < find) {
			start = middle + 1;
		} else {
            end = middle - 1;
        }
        } return false;
    }
let result = binarySearch(intArr, 322);
console.log(result);

/* 10 */

let count = 0;
for (let i = 0; i < intArr.length; ++i) {
    if (intArr[i] === 23)
    count++;
}
console.log(count);

/* 11 - advanced bubble sort - 
sort an array with floating point numbers */

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const arr2 = [48.53, 987.112, 12, 998, 1123]
console.log(bubbleSort(arr2));

/* 12 - sort an array with not only numbers */

const arr3 = [23.45, 'a', 'Hammurapi', NaN, true, 98.58, 'hal123', 99999.45, 1.5, 6,55];

function filterByNumbers(arr) {
    let numbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
            numbers.push(arr[i]);
        }
    }
    return numbers;
}

function filterByNotNumbers(arr) {
    let notNumbers = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {
            notNumbers.push(arr[i]);
        }
    }
    return notNumbers;
}

function bubbleSortReverse(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] < arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function sortNotOnlyNumbers(arr) {
    const numbers = filterByNumbers(arr);
    const notNumbers = filterByNotNumbers(arr);
    const reversedArr = bubbleSortReverse(numbers);
    return reversedArr.concat(notNumbers); 
}

console.log(sortNotOnlyNumbers(arr3));

 /* 13 - sort an array with an extra number given */

let arr4 = [13, 48, 9996, 568, 74, 56, 1];

function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function pushNumber(arr) {
    /* if the user provides the number *const inputNumber = parseInt(prompt('Adj meg egy számot!'));*/
    const inputNumber = 500;
    arr.push(inputNumber);
    const sortedArray = bubbleSort(arr);
    return sortedArray;
}

console.log(pushNumber(arr4));

/* 14 - alternating values: numbers and strings */

let arr5 = ['hello', 56, 83, 'welcome', 568, 12, 'Hungary', 'today'];

function selectNumbers(arr) {
    let numbersSelected = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
            numbersSelected.push(arr[i]);
        }
    }
    return numbersSelected;
}

function selectNotNumbers(arr) {
    let notNumbersSelected = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (typeof arr[i] !== 'number' || Number.isNaN(arr[i])) {
            notNumbersSelected.push(arr[i]);
        }
    }
    return notNumbersSelected;
}

let numbersSelected = selectNumbers(arr5);
let notNumbersSelected = selectNotNumbers(arr5);

let braidedArray = [];
let run = 0;
let first = 0;
let second = 0;

while (run < numbersSelected.length + notNumbersSelected.length) {
    if (first > second) {
        braidedArray[run] = notNumbersSelected[second];
        second++;
    } else {
        braidedArray[run] = numbersSelected[first];
        first++;
    }
    run++;
}

console.log(braidedArray);

/* 14b

const sample = [232, 234546, 'hello', 67, 'szia', 98, 'csá', 'cső'];

function customSort(arr) {
  const numbers = [];
  const strings = [];
  const sortedArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'number') {
      numbers.push(arr[i]);
    } else {
      strings.push(arr[i]);
    }
  }
  for (let i = 0; i < numbers.length; i += 1) {
    sortedArray.push(numbers[i]);
    sortedArray.push(strings[i]);
  }
  return sortedArray;
}

const result = customSort(sample);
console.log(result);

*/

/* 15 - even and odd numbers of an array */

const arr6 = [65654, 56, 98789, 23, 2, 99999, 5681];

let evenNumbers = [];
let oddNumbers = [];

function getEvenOddNumbers(arr) {
    for (let i = 0; i < arr.length; i ++) {
        if ((arr[i]) % 2 != 1) {
        evenNumbers.push(arr[i]);
    } else {
        oddNumbers.push(arr[i]);
        } 
    } 
}

getEvenOddNumbers(arr6);

console.log(evenNumbers);
console.log(oddNumbers);

/* 16 */

const arr7 = [23, 998, 56, 1, 8, 2];
const arr8 = [23, 998, 56, 3, 7, 4];

let intersection = arr7.filter(value => arr8.includes(value));
console.log(intersection);

let union = [...new Set([...arr7, ...arr8])];
console.log(union);

let difference1 = arr7.filter(value => !arr8.includes(value));
console.log(difference1);

let difference2 = arr8.filter(value => !arr7.includes(value));
console.log(difference2);

let symmetricalDifference = arr7.filter(value => !arr8.includes(value)).concat(arr8.filter(value => !arr7.includes(value)));
console.log(symmetricalDifference);

let cartesian = arr7.map(a => { 
    return arr8.map(b => {
    return [a,b];
    })
  }).flat();

console.log(cartesian);
