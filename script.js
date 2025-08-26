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
  if (num === "0" && display.innerText === "") {
    display.innerText = "0";
  } else if (num === "0" && display.innerText === "0") {
    display.innerText = "0";
  } else if (num !== "0" && display.innerText === "0") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

// if operator is chosen, save first number and then save operator
function handleOperator(op) {
  if (display.innerText !== "" && currentOperator === null) {
    firstNumber = Number(display.innerText);
    currentOperator = op;
    display.innerText = "";

    if (firstNumber !== "" && currentOperator !== null) {
      calculate();
    }

  }
}

// when equals is pressed, do the calculation
function calculate() {
  if (display.innerText !== "") {
    secondNumber = Number(display.innerText);

    console.log(firstNumber, secondNumber, currentOperator);

    operate(firstNumber, secondNumber, currentOperator);
  }
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
      display.innerText = add(firstNumber, secondNumber);
      break;
    case "-":
      display.innerText = subtract(firstNumber, secondNumber);
      break;
    case "*":
      display.innerText = multiply(firstNumber, secondNumber);
      break;
    case "/":
      display.innerText = divide(firstNumber, secondNumber);
      break;
    default:
      return null;
  }
}
