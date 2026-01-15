var a; // declaration
a = 1; // assign/init

// creates a global variable!
var a = 1; // declaration and assign

// block scoping
{
  // variable hoisting
  var b = 2;
}

console.log(b);

function myFunc() {
  var c = 3;
  console.log(c);
}

// console.log(c);

{
  let a = 1;
  a = 2;
  console.log(a);
}

{
  const b = 2;
  // b = 3;
  console.log(b);
}

let num = 1;
console.log(typeof num);
let obj = {};
console.log(typeof obj);
let arr = [];
console.log(typeof arr, Array.isArray(arr));
let nil = null;
console.log(typeof nil, nil === null);
let undef = undefined;
console.log(typeof undef);

console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log(null === undefined);

console.log(1 == "1");
console.log(1 === parseInt("1hello"));
console.log(1 === Number("1"));
console.log(1 === +"1");
console.log(1 === "1");

console.log(true === Boolean(1));
console.log(true === Boolean(0));
console.log(true === Boolean("true"));
console.log(true === Boolean("false")); // truthy
console.log(true === Boolean("")); // falsy

console.log(true === Boolean(null)); // falsy
console.log(true === Boolean(undefined));

console.log(true === !!1); // not-not

let notANumber = 1 - "hello";
console.log(typeof notANumber, Number.isNaN(notANumber));
let infinity = Infinity;
console.log(typeof infinity, Number.isFinite(infinity));

let shouldBeNaN = 1 / 0;
console.log(shouldBeNaN);

// camelCase
// PascalCase
// kebab-case
// snake_case
// UPPER_SNAKE_CASE

const PI = 3.14;
const PRIMARY_COLOR = "#b543df";

// magic number
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// prints the days in a week
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const DAYS_IN_A_WEEK = 5;
for (let i = 0; i < DAYS_IN_A_WEEK; i++) {
  console.log(i);
}

const age = 2026 - 1982;
console.log(age);
