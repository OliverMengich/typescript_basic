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
//====================Destructuring with annotations====================
const forecast = {
    date: new Date(),
    weather: 'sunny'
}
function logWeather({date,weather}: {date: Date,weather: string}): void {
    console.log(date);
    console.log(weather);
}
logWeather(forecast)
//============Objects (annotation)==================
const profile = {
    name: 'alex',
    age: 20,
    coords:{
        lat: 0,
        lng: 15
    },
    setAge(age: number): void{
        this.age = age
    }
}
// const {age,name}: {age: number, name: string} = profile;
const {
    coords: {lat,lng}}: 
    {coords: {lat: number, lng: number}
} = profile;

//=================Arrays in Typescript==============
//arrays in typescript should be of a specific consistent type e.g array of strings only or
//array of integers only
const carMakers: string[] = ['ford', 'toyota', 'chevy','lamborgini'];
// const carMakers = ['ford', 'toyota', 'chevy','lamborgini'];
const carEngines: string[] = [];
carEngines.push('V8')
carEngines.push('V10')
carEngines.push('V6')
const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
];
carsByMake.push(['Premio'])
console.log(carsByMake);
//flexible types
const importantDates:( Date | string)[]= [new Date(), '2030-10-10'];
importantDates.push('whoami');
//==================tuples in typescript==========
//-> tuples are array-like structure where each element represents some property of a record
// tuples give like a fixed order of elements. when you specify string-bool-num you 
// assign in this order
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pepsi: [string,boolean,number] = ['brown', true, 40];
// when we swap the flow we tend to loose information
pepsi[2] = 54;
pepsi[0] = 'Leon Goretzka'
// we can simplify this with types
type Drink = [string,boolean, number]
const coke: Drink = ['brown', true, 40];
const krest: Drink = ['clear', true, 0];
//============================interfaces==================
//interface -> creates a new type, describing property name and value types of an object
interface CarH{
    name: string,
    year: number,
    broken: boolean
}
const printVehicle = (vehicle: CarH): void=>{
    console.log('Vehicle is: '+vehicle.name + ' Year: '+vehicle.year + ' and it is: '+ (vehicle.broken? 'Broken': 'Not broken'))
}
printVehicle({name:'Civic',broken: true,year: 1993})