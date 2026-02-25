#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supports four basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 */

// Export functions for testing
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            throw new Error(`Unknown operator '${operator}'`);
    }
}

// CLI execution (only run if called directly)
if (require.main === module) {
    // Get command line arguments
    const args = process.argv.slice(2);

    // Display usage if insufficient arguments
    if (args.length !== 3) {
        console.log('Usage: node calculator.js <number1> <operator> <number2>');
        console.log('Example: node calculator.js 10 + 5');
        console.log('\nSupported operators: +, -, *, /');
        process.exit(1);
    }

    const num1 = parseFloat(args[0]);
    const operator = args[1];
    const num2 = parseFloat(args[2]);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        console.error('Error: Both operands must be valid numbers');
        process.exit(1);
    }

    try {
        const result = calculate(num1, operator, num2);
        console.log(`${num1} ${operator} ${num2} = ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = { add, subtract, multiply, divide, calculate };
