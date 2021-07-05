const operations = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  const operator = (a, b, operation) => operation(a, b);

  return {
    add, subtract, multiply, divide, operator,
  };
})();

const display = document.getElementById('display');
let num1 = undefined;
let num2 = undefined;

function displayTest(e) {
  let td = e.closest('td');
  display.innerText += td.innerText;

  
}

function clearDisplay() {
  display.innerText = "0";
}

  


module.exports = operations;
