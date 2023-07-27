function add(number1, number2) {
  console.log("add function number1: ",number1);
  console.log("add function number2: ",number2);
  return number1 + number2;
}

const userNumber1 = parseInt(prompt("Enter a number"));
const userNumber2 = parseInt(prompt("Enter another number"));

window.alert(add(userNumber1, userNumber2));

function subtract(number1, number2) {
  console.log("subtract function number1: ",number1);
  console.log("subtract function number2: ",number2);
  return number1 - number2;
}

const userNumber3 = parseInt(prompt("Enter a number"));
const userNumber4 = parseInt(prompt("Enter another number"));

window.alert(subtract(userNumber3, userNumber4));