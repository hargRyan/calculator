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



function clearAll() {
  display.innerText = "0";
  num1 = "";
  num2 = ""
  operation = undefined;
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

function appendNumber (e) {
  if (display.textContent === '0') {
    display.innerText = e.target.innerText;
  }
  else {
    display.innerText += e.target.innerText;
  }
}

function evaluate(a, b, oper) {
  if (operation !== undefined) display.textContent = operations.operator(num1, num2, oper);
  num2 = display.textContent;
  let result = operations.operator(num1, num2, oper);
  console.log(result);
}

function setButtons() {

  numKeys.forEach((key) => {
    key.addEventListener('click', (e) => {
      let myEvent = e;
      console.log(myEvent);
      appendNumber(myEvent);
    }
    );
  });
  
  clearButton.addEventListener('click', () => {
    clearAll();
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
