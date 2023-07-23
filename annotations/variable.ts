let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
// let numbers: number[] = [1, 2, 3];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// functiona

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use type annotation
// 1) Function that return the any type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2) when we declare a variable on one line 
// and assign it later 

let words = ['red', 'green', 'blue'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if(element === 'green'){
        foundWord = true;
    }
}


// 3)  variable whose type cannot be inferred.
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number =  false; 

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element > 0){
        numberAboveZero = element;
    }
}