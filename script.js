// Convertions ou Casting

let age = "35.2";
console.log(age, typeof age);

//ParseInt - é uma função que analisa uma String e retorna um número inteiro.

// age = parseInt(age);
// console.log(age, typeof age);

//ParseFloat - deixa com que eu converta um número que contenha uma fração (FRACIONÁRIO)
// age = parseFloat(age);
// console.log(age, typeof age);

// Unário (+) faz o papel do int e do float ao mesmo tempo
// age = +age;
// console.log(age, typeof age);

//Number - converte para número (tanto inteiro, quanto float)
age = Number(age);
console.log(age, typeof age);

// Quais os mais recomendados? Tanto o number, quanto o unário
