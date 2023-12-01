function multiply(a: number, b: number): number {
    return a * b;
}

let n: null = null;
let u: undefined = undefined;

const number: number = 10;
const string: string = "Paras";
enum Color {
    Red,
    Green,
    Blue
}

interface A {
    someProp: number;
}

interface Profile {
    name: string;
    age: number;
    isMale: boolean;
}

const c: A = { someProp: 1 };

const person: Record<string, string | number | boolean | Profile> = { name: "Paras", age: 19, isMale: true, isActive: true, profile: { name: "Paras", age: 20, isMale: true } };

console.log(c);

console.log(Color.Red);
console.log(Color[0]);

const array: Array<string | null> = ["paras", "aditya", "roop", "prince"];

const record: Object = {
    name: "Paras"
};

console.log(record);

console.log(array);




let someNumber: number = 9;

function capitalize(str: string): string {
    return str[0].toUpperCase() + str.substring(1);
}

console.log(capitalize("hello"));
console.log(capitalize("hi"));


const a = 2;
const b = 5;

console.log(`${a} * ${b} = ${multiply(a, b)}`);