
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // can not overide because of its hardcore properties {ex : writable are false}


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable : false,
    enumerable : false,
    configurable : false})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
console.log(chai.name);
chai.name = "samchai"
console.log(chai.name);
