'use strict';

/* 1 */

function* idGenerator() {
    let id = 0;
    while (true) {
        yield id += 1;
    }
}

const id = idGenerator();
console.log(id.next());
console.log(id.next());

/* 2 */

function* powerGenerator(next) {
    while (true) {
        next = next * next;
        // next = next * 2;
        yield next;
    }
}

const power = powerGenerator(2);
console.log(power.next());
console.log(power.next());

/* 3 */

function* fibonacci(current, next) {
    while (true) {
        next = next + current;
        current = next - current;
        yield next;
    }
};

const fiboResult = fibonacci(8, 13);
const usedNumber = fiboResult.next();
console.log(usedNumber);

function* secondPower(number) {
    while (true) {
        yield number * number;
    }
};

const resultNumber = secondPower(usedNumber.value);
console.log(resultNumber.next());
