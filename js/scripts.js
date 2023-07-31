function add(number1, number2) {
  console.log("add function number1: ",number1);
  console.log("add function number2: ",number2);
  return number1 + number2;
}

const userNumber1 = parseInt(prompt("Enter a number"));
const userNumber2 = parseInt(prompt("Enter another number"));

const sum = add(userNumber1, userNumber2);

window.alert("Your sum is: " + sum + "!!");

function subtract(number1, number2) {
  console.log("subtract function number1: ",number1);
  console.log("subtract function number2: ",number2);
  return number1 - number2;
}

const userNumber3 = parseInt(prompt("Enter a number"));
const userNumber4 = parseInt(prompt("Enter another number"));

const difference = subtract(userNumber3, userNumber4);

window.alert("The difference is: " + difference + "!!");

function multiply(number1, number2) {
  console.log("multiply function number1: ",number1);
  console.log("multiply function number2: ",number2);
  return number1 * number2;
}

const userNumber5 = parseInt(prompt("Enter a number"));
const userNumber6 = parseInt(prompt("Enter another number"));

const product = multiply(userNumber5, userNumber6);

window.alert("The product is: " + product + "!!");

function divide(number1, number2) {
  console.log("divide function number1: ",number1);
  console.log("divide function number2: ",number2);
  return number1 / number2;
}

const userNumber7 = parseInt(prompt("Enter a number"));
const userNumber8 = parseInt(prompt("Enter another number"));

const quotient = divide(userNumber7, userNumber8);

window.alert("The quotient is: " + quotient + "!!");