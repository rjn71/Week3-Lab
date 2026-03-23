#!/usr/bin/env node
/**
 * CLI Calculator
 *
 * Usage: node calculator.js <operation> <number1> <number2>
 *
 * Operations: add, subtract, multiply, divide
 *
 * Examples:
 *   node calculator.js add 2 3       → 5
 *   node calculator.js subtract 10 4 → 6
 *   node calculator.js multiply 3 4  → 12
 *   node calculator.js divide 20 5   → 4
 */

const { calculate } = require('./src/calculator');

const OPERATIONS = {
  add: '+',
  subtract: '-',
  multiply: '*',
  divide: '/',
};

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: node calculator.js <operation> <number1> <number2>');
  console.error('Operations: add, subtract, multiply, divide');
  process.exit(1);
}

const [operation, arg1, arg2] = args;

const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both number1 and number2 must be valid numbers.');
  process.exit(1);
}

const operator = OPERATIONS[operation];
if (operator === undefined) {
  console.error(`Error: Unknown operation '${operation}'. Supported operations: add, subtract, multiply, divide`);
  process.exit(1);
}

try {
  const result = calculate(num1, operator, num2);
  console.log(result);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
