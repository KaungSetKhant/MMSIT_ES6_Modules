//---------modules--------------
// import * as me from "./me.js";
// import { myName, myAge } from "./me.js";
// import { model, range } from "./car.js";
// import { myName } from "./me.js";

//default and module
import Person from "./Person.js";
import mySelf, { myAge, myName } from "./me.js";
import runner from "./runner.js";

// console.log(myName);
// console.log(myAge);

// * = all
//no default is come into module (eg. module.myAge or {myAge})
//default can only use direct and no module
//default mostly used in class and only one function

//auto import extension
// console.log(myName);
// console.log(`My car model is ${model} and range is ${range}`);

console.log(mySelf);
console.log(myName);
console.log(myAge);
console.log(runner());

const person = new Person("kyaw gyi", 24);
console.log(person);
