// add the ability to grab the certain classes
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
    } else if (button.classList.contains("undo")) {
      undoLast();
    } else if (button.classList.contains("egg")) {
      egg();
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
  } else if (display.innerText.includes(".") && num === ".") {
    return;
  } else {
    display.innerText += num;
  }
}

// create the ability to undo the last input
function undoLast() {
  let currentText = display.innerText;
  if (currentText.length > 1) {
    display.innerText = currentText.slice(0, -1);
  } else {
    display.innerText = "";
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
    const result = operate(firstNumber, secondNumber, currentOperator);
    if (result !== null) {
      display.innerText = roundDecimal(result);
      firstNumber = result;
      currentOperator = null;
      resetDisplay = true;
    }
  }
}

// round any big decimals
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

// execute specific operate functions
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

// all the operation functions
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
  if (y === 0) {
    return NaN;
  } else {
    return x / y;
  }
}

//something fun to end with
function egg() {
  display.innerText = "Egg";
  resetDisplay = true;
}
