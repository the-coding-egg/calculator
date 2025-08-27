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
  return y === 0 ? display.innerText = "Error" : x / y;
}

const display = document.querySelector(".display");
const pressedButton = document.querySelectorAll("button");

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let resetDisplay = false;

//listen for the button presses and execute what function 
//based off the button press
pressedButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("number")) {
      handleNumber(button.innerText);
    } else if (button.classList.contains("operator")) {
      handleOperator(button.innerText);
    } else if (button.classList.contains("equals")) {
      calculate();
    } else if (button.classList.contains("clearButton")) {
      clearAll();
    }
  });
});

//get the first number
//need to handle the ability of it being zero or multiple decimals
function handleNumber(num) {
  if (resetDisplay) {
    display.innerText = num;
    resetDisplay = false;
  } else if (display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

// if operator is chosen, save first number and then save operator
function handleOperator(op) {
  if (currentOperator !== null && !resetDisplay) {
    calculate();
  }

  firstNumber = Number(display.innerText);
  currentOperator = op;
  resetDisplay = true;
}

// when equals is pressed, do the calculation
function calculate() {
  if (display.innerText !== "") {
    secondNumber = Number(display.innerText);

    console.log(firstNumber, secondNumber, currentOperator);

    const result = operate(firstNumber, secondNumber, currentOperator);
    if (result !== null) {
      display.innerText = roundDecimal(result);
      firstNumber = result;
      currentOperator = null;
      resetDisplay = true;
    }
  }
}

function roundDecimal(num) {
  return Math.round(num * 100000) / 100000
}

// clear the calculator
function clearAll() {
  display.innerText = "";
  firstNumber = "";
  secondNumber = "";
  currentOperator = null;
}


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
    default:
      return null;
  }
}
