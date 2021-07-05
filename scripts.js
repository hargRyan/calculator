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

const numKeys = document.querySelectorAll('.number');
const display = document.getElementById('display');
let num1 = undefined;
let num2 = undefined;
let operation = undefined;



function clearDisplay() {
  display.innerText = "0";
}

function setAdd() {
  operation = operations.add;
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
  let result = operations.operator(num1, num2, operation);
  console.log(result);
}

function setButtons() {
  numKeys.forEach((key) => {
    key.addEventListener('click', () => {
      
    });
  });
}
  

module.exports = operations;
