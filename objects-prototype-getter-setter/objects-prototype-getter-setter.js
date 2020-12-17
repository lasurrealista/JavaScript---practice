'use strict';

Walker.prototype = {
    walk(speedInMph = 10) {
        console.log(`${this.name} the ${this.state} walks with ${speedInMph} mph!`)
    },
    eat(foodName = 'meat') {
        console.log(`${this.name} the ${this.state} eats ${foodName}!`)
    },
    speak(sound = 'grrrrrr') {
        console.log(`${this.name} the ${this.state} says ${sound}!`)
    },
    get firstName() {
        return this.name.split(' ')[0];
    },
    set firstName(value) {
        this.name = `${value} ${this.name.split(' ')[1]}`
    },
    get lastName() {
        return this.name.split(' ')[1];
    },
    set lastName(value) {
        this.name = `${this.name.split(' ')[0]} ${value}`
    },
};

function Walker(name, state) {
    this.name = name;
    this.state = state;
};

Walker.prototype.constructor = Walker;

const walker1 = new Walker('John Doe', 'dead');

console.log(walker1.firstName);
console.log(walker1.lastName);
walker1.walk();
walker1.eat();
walker1.speak();

const walker2 = new Walker('Friendly R', 'zombie');
walker2.walk(5);
walker2.eat('nothing');
walker2.speak('oh, right');

