#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supports basic and advanced arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (** or ^)
 * - Square Root (sqrt)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 10 + 5
 * For square root: node calculator.js sqrt <number>
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

function modulo(a, b) {
    if (b === 0) {
        throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function squareRoot(n) {
    if (n < 0) {
        throw new Error('Square root of negative number is not allowed');
    }
    return Math.sqrt(n);
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
        case '%':
            return modulo(num1, num2);
        case '**':
        case '^':
            return power(num1, num2);
        case 'sqrt':
            return squareRoot(num1);
        default:
            throw new Error(`Unknown operator '${operator}'`);
    }
}

// CLI execution (only run if called directly)
if (require.main === module) {
    // Get command line arguments
    const args = process.argv.slice(2);

    // Handle square root special case (unary operation)
    if (args[0] === 'sqrt' && args.length === 2) {
        const num = parseFloat(args[1]);
        if (isNaN(num)) {
            console.error('Error: Operand must be a valid number');
            process.exit(1);
        }
        try {
            const result = squareRoot(num);
            console.log(`sqrt(${num}) = ${result}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        }
        process.exit(0);
    }

    // Display usage if insufficient arguments
    if (args.length !== 3) {
        console.log('Usage: node calculator.js <number1> <operator> <number2>');
        console.log('       node calculator.js sqrt <number>');
        console.log('Example: node calculator.js 10 + 5');
        console.log('Example: node calculator.js sqrt 16');
        console.log('\nSupported operators: +, -, *, /, %, ** (or ^)');
        console.log('Unary operation: sqrt');
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };
