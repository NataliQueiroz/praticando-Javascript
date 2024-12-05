// Data Types
// Primitive - Reference

//String
let firstName = "Luisa";
console.log(firstName, typeof firstName);

//Number
let age = 35;
console.log(age, typeof age);

//Boolean
let isAdult = false;

//Null -  valor zero
let address = null;
console.log(address, typeof address);

//Undefined - não é um valor
let color;
console.log(color, typeof color);

//Symbol - representa um valor primitivo único e é imutável
let id = Symbol("id");
let meuObjeto = {
  [id]: 123456,
};
console.log(meuObjeto[id]);

// Data Types
// Reference Data Types

// Arrays - lista de itens dentro de uma variável

let numbers = [10, 20, 30, 35, 50];
console.log(numbers, typeof numbers);

// Function
function myName() {
  console.log("Naruto");
}
console.log(myName, typeof myName);

// Date - data
let now = new Date();
console.log(now);
