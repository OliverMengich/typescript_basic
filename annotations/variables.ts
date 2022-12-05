let apples = 5; // apples is a number
let speed: string = 'fast';
let hasName = true;
let now: Date = new Date();
//Arrays
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Classes
class Person{
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName(): string{
        return this.firstName + this.lastName;
    }
}
let p1: Person = new Person("John","Doe");
console.log(p1.getName());

interface Car {
    name: string;
    year: number;
    broken: boolean;
    summary(): string;
}
let myCar: Car = {
    name: 'Mazda',
    year: 2020,
    broken: false,
    summary(): string{
        return `Name: ${this.name}
        Year: ${this.year}
        Broken: ${this.broken}`;
    }
}
const logNumber: (i: number)=> void = (i: number) => {
    console.log(i);
}
// When to use annotations
//1.) functions returning the 'any' type
const json = '{"x":10, "y":20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);
//2) when we declare a variable on one line and initialize it later
let words = ['red','green','blue']
let foundWord = false;
for (let i = 0; i < words.length; i++) {
    if (words[i]=='green') {
        foundWord = true;
    }
}
//3) when we want a variable to have a type that can't be inferred
let numbers = [-10,-1, 22,12,5];
//pipes the 'numberAboveZero' variable to either be a boolean or a number
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
//===============Type Annotations on functions=========================
// type-annotation=> typescript is told what values to expect and what to return 
const add = (a: number, b: number): number =>{
    return a+b;
};
// type-inference => typescript tries to figure out what type of value a function will return
const add1 = (a: number, b: number) =>{
    return b+a;
};

function divide(a:number, b: number): number {
    return a / b;
}
function logger(message: string): void{
    // a void function can return undefined
    console.log(message);
    
}
const throwErr = (message: string): never=>{
    // when you throw an error, the function doesn't return anything
    //this indicates that we aren't going to reach the end of function 
    //and we are going to return earlier
    throw new Error(message);
}
const throwErr1 = (message: string): string=>{
    // when you throw an error, the function doesn't return anything
    //this indicates that we aren't going to reach the end of function 
    //and we are going to return earlier
    if (!message) {
        throw new Error(message);
    }
    return message;
}
