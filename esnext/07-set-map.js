const numbers = [1, 2, 2, 3, 4, 3, 5];
const set = new Set(numbers);
console.log(set);
const noDuplicated = [...set];
console.log(noDuplicated);

const person = new Map();
person.set("firstName", "Matteo Antony");
person.set(2, "legs");
console.log(person);
const personObj = Object.fromEntries(person);
console.log(personObj, Object.keys(personObj));
