const operations = require('./scripts');

test('adds 1 + 2 to equal 3', () => {
  expect(operations.add(1, 2)).toBe(3);
  expect(operations.operator(1, 2, operations.add)).toBe(3);
});

test('subtracts 2 from 1 to equal 1', () => {
  expect(operations.subtract(2,1)).toBe(1);
  expect(operations.operator(2, 1, operations.subtract)).toBe(1);
});

test("multiply 3 times 4 to get 12", () => {
  expect(operations.multiply(3,4)).toBe(12);
  expect(operations.operator(3,4, operations.multiply)).toBe(12);
});

test("divide 10 by 5 to get 2", () => {
  expect(operations.divide(10,5)).toBe(2);
  expect(operations.operator(10, 5, operations.divide)).toBe(2);
});