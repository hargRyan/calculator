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

  


module.exports = operations;
