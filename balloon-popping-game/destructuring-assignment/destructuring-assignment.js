'use strict';

/* 1 */

const user = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName, lastName, job = 'unknown'} = user;

console.log(firstName, lastName, job);

/* 2 */

const user2 = {
    firstName: 'John',
    lastName: 'Doe'
};

const {firstName: f, lastName: l, job: j = 'unknown'} = user2;

console.log(f, l, j);

/* 3 */

const names = ['John', 'Jane', 'Judith', 'Jennifer', 'Jeremiah', 'Johnny'];

const [,namesIndex1,,namesIndex3,,namesIndex5] = names;
console.log(namesIndex1, namesIndex3, namesIndex5);

//let {1: namesIndex1, 3: namesIndex3, 5: namesIndex5} = names;
//console.log(namesIndex1, namesIndex3, namesIndex5);


