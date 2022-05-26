// function expression
// function anonymous

let total = 0

// parâmetros (paramenters)
const sum = function (number1, number2) {
  let total = number1 + number2
  return total
};

sum(7, 8); // arguments

let number1 = 34;
let number2 = 25;

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`O número 2 é ${sum(number1, number2)}`)
console.log(total)