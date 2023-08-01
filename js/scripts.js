function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

const userNumber1 = parseInt(prompt("Enter a number"));
const userNumber2 = parseInt(prompt("Enter another number"));

const sum = add(userNumber1, userNumber2);
const difference = subtract(userNumber1, userNumber2);
const product = multiply(userNumber1, userNumber2);
const quotient = divide(userNumber1, userNumber2);


window.alert(userNumber1 + "+" + userNumber2 + "=" + sum + ", "+ userNumber1 + "-" + userNumber2 + "=" + difference + ", " + userNumber1 + "*" + userNumber2 + "=" + product + ", and "+ userNumber1 + "/" + userNumber2 + "=" + quotient);