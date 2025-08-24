function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");

let firstNumber = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    firstNumber = parseInt(number.innerText);
    display.innerText = firstNumber;
  });
});

let secondNumber = "";
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    secondNumber = parseInt(number.innerText);
    console.log(secondNumber);
  });
});

let operator = "";

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
}
