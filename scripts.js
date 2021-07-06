const operations = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if(b === 0) {
      return null;
    } else
      return  a / b;
  }
  const operate = (a, b, operation) => operation(Number(a), Number(b));

  return {
    add, subtract, multiply, divide, operate,
  };
})();

const clearButton = document.getElementById('clear');
const numKeys = document.querySelectorAll('.number');
const display = document.getElementById('display');
const upperDisplay = document.getElementById('upper-display');
let num1 = "";
let num2 = "";
let operation = undefined;



function clearAll() {
  display.innerText = "0";
  upperDisplay.textContent = "0";
  num1 = "";
  num2 = ""
  operation = undefined;
}

function setAdd() {

  if (operation) {
    evaluate (num1, num2, operation);
    operation = operations.add;

  } else {
    operation = operations.add;
  }

  upperDisplay.textContent = display.textContent;
  display.textContent = "0";
}

function setSubtract () {
  if (operation) {
    evaluate (num1, num2, operation);
    operation = operations.subtract;

  } else {
    operation = operations.subtract;
  }

  upperDisplay.textContent = display.textContent;
  display.textContent = "0";
}

function setMultiply () {
  if (operation) {
    evaluate (num1, num2, operation);
    operation = operations.multiply;
  } else {
    operation = operations.multiply;
  }

  upperDisplay.textContent = display.textContent;
  display.textContent = "0";
}

function setDivide() {
  if (operation) {
    evaluate (num1, num2, operation);
    operation = operations.divide;

  } else {
    operation = operations.divide;
  }
  upperDisplay.textContent = display.textContent;
  display.textContent = "0";
  
}

function appendNumber (e) {
  if (display.textContent === '0') {
    display.innerText = e.target.innerText;
  }
  else {
    display.innerText += e.target.innerText;
  }
}

function evaluate(a, b, oper) {
  num1 = Number(upperDisplay.textContent);
  num2 = Number(display.textContent);
  
  display.textContent = operations.operate(num1, num2, oper).toFixed(3);
  operation = undefined;

  if (display.textContent === "") {
    alert("Cannot divide by 0!");
    clearAll();
    }
  }

function setButtons() {

  numKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
      let myEvent = e;
      appendNumber(myEvent);
    }
    );
  });
  
  clearButton.addEventListener('click', clearAll);

  let addButton = document.getElementById('add');
  addButton.addEventListener('click', setAdd);

  let subtractButton = document.getElementById('subtract');
  subtractButton.addEventListener('click', setSubtract);

  let multiplyButton = document.getElementById('multiply');
  multiplyButton.addEventListener('click', setMultiply);

  let divideButton = document.getElementById('divide');
  divideButton.addEventListener('click', setDivide);

  let equalButton = document.getElementById('equal');
  equalButton.addEventListener('click', () => {
    evaluate(num1, num2, operation);
  })
}
  
setButtons();
//module.exports = operations;
