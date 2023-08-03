// traditional
function traditional(){
    console.log("Hello World!");
}

// arrow function
const arrow = () => {
    console.log("Hello World!");
}

const return5 = () => {
    return 5
}

let number = return5();
// let number = 5

//console.log(number);

const returnString = () => {
    return "Hello";
}

let str = returnString();
//console.log(str);

const returnString2 = () => "Hello";
str = returnString2();
//console.log(str);

const return10 = () => 10;
number = return10();
//console.log(number);

const addNumber = (a,b) => {
    console.log ('a: ' + a + 'b: ' + b);
    let sum = a + b;
    return sum
}

//number = addNumber(10, 20);

//number = addNumber(10)

//console.log(number)

const addNumber2 = (a,b) => a + b;
//console.log(addNumber2(10, 20));


// grading function
let numberGrade = 41;

function letterGrade(grade) {
    if (grade >= 90){
        console.log("Grade = A")
    } 

    else if (grade > 79 && grade < 90){
        console.log("Grade = B")
    }

    else if (grade > 69 && grade < 80){
        console.log("Grade = C")
    }

    else if (grade > 49 && grade < 70){
        console.log("Grade = D")
    }

    else{
        console.log("Grade = F")
    } 
}

letterGrade(numberGrade);

// objects

const car = {
    name: "Fiat",
    model: "500",
    weight: "850kg",
    color: "white"
}

//console.log(car)

const student = {
    name: "Gary",
    grade: 9,
    id: 1
}

// console.log(student)

// console.log(student.name);
// console.log(student["name"]);

student.name = "Sam";

//console.log(student)

console.log(car)

const jsonString = JSON.stringify(car)
//console.log(jsonString[0]);


// mini challenge

// person 1

const person = {
    name: "Player 1",
    age: 26,
    location: "Toronto"
}

console.log(person.name + " is " + person.age + " and lives in " + person.location);

// add object to new array
let newArray = [];

// const jsonString2 = JSON.stringify(person);
newArray.push(person);

//console.log(newArray);

// person 2 and 3
const person2 = {
    name: "Player 2",
    age: "15",
    location: "London"
}

const person3 = {
    name: "Player 3",
    age: "7",
    location: "Hamilton"
}

// add objects to new array
const jsonString3 = JSON.stringify(person2);
newArray.push(jsonString3);

const jsonString4 = JSON.stringify(person3);
newArray.push(jsonString4);

console.log(newArray);

// loop to print text

for (let i in newArray){
    const jsonParse = JSON.parse(newArray[i])
    console.log(jsonParse.name + " is " + jsonParse.age + " and lives in " + jsonParse.location);

}

// change to commit

