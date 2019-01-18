//Spread
const [a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a); // 1
console.log(b); // 2
console.log(rest); // 3, 4, 5



//Destruturing
const person1 = { name: 'Jean', age: 43 };

const { name, age } = person1;

console.log(name);
console.log(age);


//Class
class Person {
    constructor(name) {
        this._name = name
    }

    getName() {
        return this._name
    }

    setName(name) {
        this._name = name
    }
}

class Dev extends Person {
    speak() {
        console.log(`${this._name} faz pbi.`)
    }
}

class PO extends Person {
    speak() {
        console.log(`${this._name} pede pbi.`)
    }
}

const person2 = new Person('Moacir');
person2.getName();
person2.setName('Teobaldo');
person2.getName();



//Modulos
import { soma } from 'js/maths.js'

soma(1, 2)