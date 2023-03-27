// Primitives: number, string, boolean
//More complex types: array, object
//Function types and parameters


//Primitive

let age: number;
age = 4;
let candles: number = 25;

let userName: string = "Asha";
// let password: string = 55;

let isSafe: boolean;
isSafe = true;

//Arrays and Objects

let hobbies: string[];
hobbies = ["Drawing", "Music"];

// let person: {
//     name: string,
//     age:number
// }

// person = {
//     name: "Asha",
//     age:36,
// }

//THis is not allowed cox the structure of the object is wrong

// let person = {
//     isFemale: true;
// }

//Array of objects
// let people: {
//     name: string,
//     age: number,
// }[];


// people = [
//     { name: "asha", age: 36 },
//     { name: "pihi", age: 22 }
// ]

//Type inference & union
let course :string|number = "React: for beginners";
//this is allowed coz course can be string or number
course = 2525;


//Understanding type aliases

//give a type alias which wont be there in the compiled js file
type Person={
    name: string,
    age:number
}

let person: Person;
person = { name: "asha", age: 36 };


let people: Person[];

people = [
    { name: "asha", age: 36 },
    {name:'phi', age:22},
]


//Functions

//here the resturn type is infered as number
function add(a: number, b: number) {
    return (a + b);
}
//this is same as above
function add1(a: number, b: number): number{
    return (a + b);
}


//this has a return type of void
function printValue(value: any) {
    console.log(value);
}


//Generics

function insertAtTheBeginning(array:any[], value:any) {
    const updatedArray = [value, ...array];
    return updatedArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtTheBeginning(demoArray, -1) //should return [-1,1,2,3]
//but the return type is also any, there is no type safety updatedArray[0].split("") gives only run time error here


//this is the same function in a generic form, if both array and value are number , return type would be number
//T can be anything
function insertAtTheBeginning1<T>(array: T[], value: T) {
    const updatedArray = [value, ...array];
    return updatedArray;
}

const updatedArray1 = insertAtTheBeginning1(demoArray, 1);

//here the return type is number
//we are getting flexibility as well as type safety

