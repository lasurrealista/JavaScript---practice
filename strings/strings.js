'use strict';

/* 1 */

const johnDoe = { 
    firstName: 'John',
    lastName: 'Doe'
};

const janeDoe = { 
    firstName: 'Jane',
    lastName: 'Doe'
};

const merge = ( ...objects ) => ( { ...objects } );
console.log(merge(johnDoe, janeDoe));

/* 

function transform(...objects) {
    return {
      ...[...objects]
        .map((item, index) => index = item)
    };
  }
console.log(transform(johnDoe, janeDoe));

--->
    {
        0: { 
            firstName: 'John',
            lastName: 'Doe'
        },
        1:  { 
            firstName: 'Jane',
            lastName: 'Doe'
        }
    };

*/

/* 2 */

const user = { 
    firstName: 'James',
    lastName: 'Bond',
    age: '30',
    nationality: 'American'
};

const tag = (texts, ...values) => 
    texts.map((text, index) => 
        `${text ? `<em>${text}</em>` : ''}${values[index] ? `<strong>${values[index]}</strong>` : ''}`).join('');

const template = tag`My name is ${user.firstName} ${user.lastName}, and I'm ${user.age} years old. I'm ${user.nationality}.`;
document.body.innerHTML = template;

/* 3 */

const sampleArray1 = ['   Drakula   ', 'Superman', 'Wonder Woman', 'Pisti'];
const sampleArray2 = ['Józsi   ', '  Feri', 'Anna'];
const sampleArray3 = ['Elza   ', 'Anna'];
const character = 'a';

/*

const merge = [...sampleArray1, ...sampleArray2, ...sampleArray3];
console.log(merge);

//const removeDuplicate = merge.filter((item, index) => merge.indexOf(item) == index);
//console.log(removeDuplicate);

const removeDuplicate = [...new Set(merge)];
console.log(removeDuplicate);

const removeStringContainingA = removeDuplicate.filter(item => !item.includes(character));
console.log(removeStringContainingA);

const removeWhiteSpace = removeStringContainingA.map(item => item.trimEnd());
console.log(removeWhiteSpace);

----

const newArray = (sampleArray1.concat(sampleArray2, sampleArray3)).filter((item, index) => (sampleArray1.concat(sampleArray2, sampleArray3)).indexOf(item) == index).filter(item => !item.includes(character)).map(item => item.trimEnd());
console.log(newArray);

*/

function makeNewArray(char, ...arrays) {
    const newArray = arrays.flat()
    return newArray
    .filter((item, index) => newArray.indexOf(item) == index)
    .filter(item => !item.includes(char))
    .map(item => item.trimEnd());
};
console.log(makeNewArray(character, sampleArray1, sampleArray2, sampleArray3));

/* 4 */

function mergeArrays(char, ...arrays) {
    const onlyArraysMerged = arrays.flat();
    const charArray = Array.from(char);
    const mergedArray = charArray.concat(onlyArraysMerged);
    return mergedArray;
};
console.log(mergeArrays('a', ['egyszer', 'kétszer'], ['ötször, hatszor']));

function removeDuplicatesFromArray(array) {
    const duplicatesRemovedFromArray = array.filter((item, index) => array.indexOf(item) == index);
    return duplicatesRemovedFromArray;
};
console.log(removeDuplicatesFromArray(['helló', 'szia', 'viszlát, helló', 'szia', 'hogy vagy']));

function trimStartEnd(array) {
    const trimmedStartEnd = array.map(item => item.trim());
    return trimmedStartEnd;
};
console.log(trimStartEnd(['    jaj, tervezőm', 'R2-D2    ', '   3-CPO   ']));