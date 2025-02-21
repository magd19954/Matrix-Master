// Object to store the calculator's state
const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

// Update the display with the current value
const updateDisplay = () => {
  const display = document.querySelector(".screen");
  display.value = calculator.displayValue;
};

updateDisplay();

// Listen for button clicks
const keys = document.querySelector(".keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  if (!target.matches("button")) {
    return;
  }
  if (target.classList.contains("operator")) {
    handleOperator(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("decimal")) {
    inputDecimal(target.value);
    updateDisplay();
    return;
  }
  if (target.classList.contains("all-clear")) {
    resetCalculator();
    updateDisplay();
    return;
  }
  inputDigit(target.value);
  updateDisplay();
});

// Handle digit input
const inputDigit = (digit) => {
  const { displayValue, waitingForSecondOperand } = calculator;
  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
};

// Handle decimal input
const inputDecimal = (dot) => {
  if (calculator.waitingForSecondOperand === true) {
    calculator.displayValue = "0.";
    calculator.waitingForSecondOperand = false;
    return;
  }
  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
};

// Handle operator input
const handleOperator = (operator) => {
  const { firstOperand, displayValue, operator: currentOperator } = calculator;
  const inputValue = parseFloat(displayValue);

  // If there's an operator and we're waiting for the second operand, update the operator
  if (currentOperator && calculator.waitingForSecondOperand) {
    calculator.operator = operator;
    return;
  }

  // If there's no first operand and the current input is a valid number, set the first operand
  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  }
  // If there's an operator, perform the calculation
  else if (currentOperator) {
    const result = calculate(firstOperand, inputValue, currentOperator);
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  // Set to wait for the second operand after the operator
  calculator.waitingForSecondOperand = true;
  calculator.operator = operator;
};

//calculate logic

const calculate = (firstOperand, secondOperand, operator) => {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }
  return secondOperand;
};

//reset

const resetCalculator = () => {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
};
