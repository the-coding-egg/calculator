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

let display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const pressedButton = document.querySelectorAll("button");
let currentDisplay = "";

function buttonPress() {
  displayLastPress(currentDisplay);
  pressedButton.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("number")) {
        currentDisplay += button.innerText;
        displayLastPress(currentDisplay);
      } else if (button.classList.contains("operator")) {
        getFirstNumber();

        currentDisplay = "";
        currentDisplay += button.innerText;
        displayLastPress(currentDisplay);
      }
    });
  });
}

buttonPress();

function getFirstNumber() {
  let firstNumber = parseInt(currentDisplay);
  if (isNaN(firstNumber)) {
    console.log("Please enter a valid number");
  } else {
    console.log(firstNumber);
    return firstNumber;
  }
}

function getSecondNumber() {
  let secondNumber = "";
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      secondNumber = parseInt(number.innerText);
      return secondNumber;
    });
  });
}

// function getOperator() {
//   currentDisplay += operators.innerText;
//   displayLastPress(currentDisplay);
// }

function displayLastPress(content) {
  display.innerText = content;
}

function operate(firstNumber, secondNumber, operator) {
  firstNumber = getFirstNumber();
  secondNumber = getSecondNumber();
  // operator = getOperator();

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
