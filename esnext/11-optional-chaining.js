let person = {
  name: "Matteo Antony Mistretta",
  legs: ["left", "right"],
  speak() {
    return "Hello world!";
  },
};

// person = undefined;

console.log(person != null ? person.name : undefined);
console.log(person?.name);

// person = {};

console.log(person.legs != null ? person.legs.length : undefined);
console.log(person.legs?.length);
console.log(person.legs != null ? person.legs[0] : undefined);
console.log(person.legs?.[0]);

console.log(person.speak != null ? person.speak() : undefined);
console.log(person.speak?.());
