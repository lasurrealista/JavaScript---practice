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

function transform(...objects) {
    return {
      ...[...objects]
        .map((item, index) => index = item)
    };
  }
  console.log(transform(johnDoe, janeDoe));

/* 
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

*/

const newArray = (sampleArray1.concat(sampleArray2, sampleArray3)).filter((item, index) => (sampleArray1.concat(sampleArray2, sampleArray3)).indexOf(item) == index).filter(item => !item.includes(character)).map(item => item.trimEnd());
console.log(newArray);

/* 4 */

