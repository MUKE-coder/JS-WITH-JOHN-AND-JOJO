const birthYear = 2006;
const currentYear = 2024;
const age = currentYear - birthYear;
const isMarried = false;
const x = 10;
const y = 20;
// console.log(x % y);
// console.log(x + y);
// console.log(x ** 3);

// Comparison Operators
//gt >
//lt <
// == Equivalent
//gte >=
//lte <=
//ne !=
//not !
// console.log(x == y);
console.log(!isMarried);
// LOGICAL OPERATORS
//AND => &&
//OR => ||

//AND SITUATIONS
// true + true => true
// true + false => false
//false +false => false

//OR SITUATIONS
//true + true => true
//true + false => true
//false + false =>false
const hasChildren = false;

console.log(hasChildren && age >= 18);
console.log(hasChildren || age >= 18);

const firstName = prompt("Enter your Name? ");
alert(firstName);
console.log(firstName);
