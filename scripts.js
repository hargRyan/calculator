const operations = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operator = (a, b, operation) => operation(Number(a), Number(b));

  return {
    add, subtract, multiply, divide, operator,
  };
})();

const clearButton = document.getElementById('clear');
const numKeys = document.querySelectorAll('.number');
const display = document.getElementById('display');
let num1 = "";
let num2 = "";
let operation = undefined;



function clearDisplay() {
  display.innerText = "0";
}

function setAdd() {
  operation = operations.add;
  num1 += display.textContent;

}

function setSubtract () {
  operation = operations.subtract;
}

function setMultiply () {
  operation = operations.multiply;
}

function setDivide() {
  operation = operations.divide;
}

function evaluate(a, b, operation) {
  if (!num2) return;

  let result = operations.operator(num1, num2, operation);
  console.log(result);
}

function setButtons() {
  numKeys.forEach((key) => {
    key.addEventListener('click', () => {
      display.innerText += key.innerText;
    });
  });
  
  clearButton.addEventListener('click', () => {
    clearDisplay();
  })

  let addButton = document.getElementById('add');
  addButton.addEventListener('click', () => {
    setAdd();
  })

  let equalButton = document.getElementById('equal');
  equalButton.addEventListener('click', () => {
    evaluate(num1, num2, operation);
  })
}
  
setButtons();
//module.exports = operations;
