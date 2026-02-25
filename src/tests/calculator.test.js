/**
 * Unit Tests for Calculator Functions
 * 
 * Tests all basic and advanced arithmetic operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * - Modulo
 * - Exponentiation (Power)
 * - Square Root
 * 
 * Includes edge cases and examples from calc-basic-operations.png and calc-extended-operations.png
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator - Addition', () => {
    test('should add 2 + 3 to equal 5 (from image example)', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('should add positive numbers correctly', () => {
        expect(add(10, 20)).toBe(30);
        expect(add(100, 50)).toBe(150);
    });

    test('should add negative numbers correctly', () => {
        expect(add(-5, -3)).toBe(-8);
        expect(add(-10, 5)).toBe(-5);
    });

    test('should add decimal numbers correctly', () => {
        expect(add(1.5, 2.5)).toBe(4);
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should add zero correctly', () => {
        expect(add(0, 0)).toBe(0);
        expect(add(5, 0)).toBe(5);
        expect(add(0, 5)).toBe(5);
    });
});

describe('Calculator - Subtraction', () => {
    test('should subtract 10 - 4 to equal 6 (from image example)', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract positive numbers correctly', () => {
        expect(subtract(20, 10)).toBe(10);
        expect(subtract(100, 25)).toBe(75);
    });

    test('should subtract negative numbers correctly', () => {
        expect(subtract(-5, -3)).toBe(-2);
        expect(subtract(-10, 5)).toBe(-15);
        expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract decimal numbers correctly', () => {
        expect(subtract(5.5, 2.5)).toBe(3);
        expect(subtract(10.75, 0.25)).toBe(10.5);
    });

    test('should subtract zero correctly', () => {
        expect(subtract(0, 0)).toBe(0);
        expect(subtract(5, 0)).toBe(5);
        expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle result being zero', () => {
        expect(subtract(10, 10)).toBe(0);
    });
});

describe('Calculator - Multiplication', () => {
    test('should multiply 45 * 2 to equal 90 (from image example)', () => {
        expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive numbers correctly', () => {
        expect(multiply(5, 6)).toBe(30);
        expect(multiply(10, 10)).toBe(100);
    });

    test('should multiply negative numbers correctly', () => {
        expect(multiply(-5, 3)).toBe(-15);
        expect(multiply(-4, -2)).toBe(8);
        expect(multiply(6, -3)).toBe(-18);
    });

    test('should multiply decimal numbers correctly', () => {
        expect(multiply(2.5, 4)).toBe(10);
        expect(multiply(1.5, 2.5)).toBe(3.75);
    });

    test('should multiply by zero correctly', () => {
        expect(multiply(0, 0)).toBe(0);
        expect(multiply(5, 0)).toBe(0);
        expect(multiply(0, 5)).toBe(0);
    });

    test('should multiply by one correctly', () => {
        expect(multiply(1, 1)).toBe(1);
        expect(multiply(5, 1)).toBe(5);
        expect(multiply(1, 5)).toBe(5);
    });
});

describe('Calculator - Division', () => {
    test('should divide 20 / 5 to equal 4 (from image example)', () => {
        expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
        expect(divide(100, 4)).toBe(25);
        expect(divide(15, 3)).toBe(5);
    });

    test('should divide negative numbers correctly', () => {
        expect(divide(-10, 2)).toBe(-5);
        expect(divide(-20, -4)).toBe(5);
        expect(divide(15, -3)).toBe(-5);
    });

    test('should divide decimal numbers correctly', () => {
        expect(divide(7.5, 2.5)).toBe(3);
        expect(divide(10.5, 3)).toBe(3.5);
    });

    test('should divide by one correctly', () => {
        expect(divide(5, 1)).toBe(5);
        expect(divide(100, 1)).toBe(100);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
        expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
        expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle zero divided by number', () => {
        expect(divide(0, 5)).toBe(0);
        expect(divide(0, 10)).toBe(0);
    });
});

describe('Calculator - calculate() function', () => {
    test('should perform addition via calculate', () => {
        expect(calculate(2, '+', 3)).toBe(5);
        expect(calculate(10, '+', 5)).toBe(15);
    });

    test('should perform subtraction via calculate', () => {
        expect(calculate(10, '-', 4)).toBe(6);
        expect(calculate(20, '-', 8)).toBe(12);
    });

    test('should perform multiplication via calculate', () => {
        expect(calculate(45, '*', 2)).toBe(90);
        expect(calculate(6, '*', 7)).toBe(42);
    });

    test('should perform division via calculate', () => {
        expect(calculate(20, '/', 5)).toBe(4);
        expect(calculate(15, '/', 3)).toBe(5);
    });

    test('should throw error for invalid operator', () => {
        expect(() => calculate(10, '&', 3)).toThrow("Unknown operator '&'");
        expect(() => calculate(10, '@', 2)).toThrow("Unknown operator '@'");
    });

    test('should throw error for division by zero via calculate', () => {
        expect(() => calculate(10, '/', 0)).toThrow('Division by zero is not allowed');
    });
});

describe('Calculator - Edge Cases and Boundaries', () => {
    test('should handle very large numbers', () => {
        expect(add(1e10, 1e10)).toBe(2e10);
        expect(multiply(1e5, 1e5)).toBe(1e10);
    });

    test('should handle very small numbers', () => {
        expect(add(0.000001, 0.000002)).toBeCloseTo(0.000003);
        expect(multiply(0.1, 0.1)).toBeCloseTo(0.01);
    });

    test('should handle mixed positive and negative operations', () => {
        expect(add(10, -5)).toBe(5);
        expect(subtract(-10, -5)).toBe(-5);
        expect(multiply(-5, -5)).toBe(25);
        expect(divide(-10, -2)).toBe(5);
    });
});

describe('Calculator - Modulo', () => {
    test('should calculate 5 % 2 to equal 1 (from image example)', () => {
        expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo for positive numbers correctly', () => {
        expect(modulo(10, 3)).toBe(1);
        expect(modulo(20, 6)).toBe(2);
        expect(modulo(15, 4)).toBe(3);
    });

    test('should calculate modulo when result is zero', () => {
        expect(modulo(10, 5)).toBe(0);
        expect(modulo(20, 10)).toBe(0);
        expect(modulo(100, 25)).toBe(0);
    });

    test('should calculate modulo with negative numbers', () => {
        expect(modulo(-10, 3)).toBe(-1);
        expect(modulo(10, -3)).toBe(1);
        expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
        expect(modulo(5.5, 2)).toBeCloseTo(1.5);
        expect(modulo(10.7, 3)).toBeCloseTo(1.7);
    });

    test('should throw error when modulo by zero', () => {
        expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
        expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
        expect(() => modulo(-5, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should calculate modulo with one', () => {
        expect(modulo(10, 1)).toBe(0);
        expect(modulo(7, 1)).toBe(0);
    });
});

describe('Calculator - Power (Exponentiation)', () => {
    test('should calculate 2 ^ 3 to equal 8 (from image example)', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('should calculate power for positive numbers correctly', () => {
        expect(power(2, 2)).toBe(4);
        expect(power(3, 3)).toBe(27);
        expect(power(5, 2)).toBe(25);
        expect(power(10, 3)).toBe(1000);
    });

    test('should calculate power with zero exponent', () => {
        expect(power(5, 0)).toBe(1);
        expect(power(10, 0)).toBe(1);
        expect(power(0, 0)).toBe(1);
    });

    test('should calculate power with one', () => {
        expect(power(5, 1)).toBe(5);
        expect(power(10, 1)).toBe(10);
        expect(power(1, 5)).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
        expect(power(2, -1)).toBe(0.5);
        expect(power(10, -2)).toBe(0.01);
        expect(power(5, -1)).toBe(0.2);
    });

    test('should calculate power with negative base', () => {
        expect(power(-2, 2)).toBe(4);
        expect(power(-2, 3)).toBe(-8);
        expect(power(-3, 4)).toBe(81);
    });

    test('should calculate power with decimal numbers', () => {
        expect(power(2.5, 2)).toBe(6.25);
        expect(power(1.5, 3)).toBe(3.375);
    });

    test('should calculate fractional exponents (roots)', () => {
        expect(power(4, 0.5)).toBe(2);
        expect(power(8, 1/3)).toBeCloseTo(2);
        expect(power(16, 0.25)).toBe(2);
    });
});

describe('Calculator - Square Root', () => {
    test('should calculate sqrt(16) to equal 4 (from image example)', () => {
        expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root for positive numbers correctly', () => {
        expect(squareRoot(0)).toBe(0);
        expect(squareRoot(1)).toBe(1);
        expect(squareRoot(4)).toBe(2);
        expect(squareRoot(9)).toBe(3);
        expect(squareRoot(25)).toBe(5);
        expect(squareRoot(100)).toBe(10);
    });

    test('should calculate square root for decimal numbers', () => {
        expect(squareRoot(2.25)).toBe(1.5);
        expect(squareRoot(6.25)).toBe(2.5);
        expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root for non-perfect squares', () => {
        expect(squareRoot(2)).toBeCloseTo(1.414213562);
        expect(squareRoot(3)).toBeCloseTo(1.732050808);
        expect(squareRoot(5)).toBeCloseTo(2.236067977);
    });

    test('should throw error for negative numbers', () => {
        expect(() => squareRoot(-1)).toThrow('Square root of negative number is not allowed');
        expect(() => squareRoot(-4)).toThrow('Square root of negative number is not allowed');
        expect(() => squareRoot(-100)).toThrow('Square root of negative number is not allowed');
    });

    test('should handle very large numbers', () => {
        expect(squareRoot(1000000)).toBe(1000);
        expect(squareRoot(10000)).toBe(100);
    });
});

describe('Calculator - calculate() function with new operations', () => {
    test('should perform modulo via calculate', () => {
        expect(calculate(5, '%', 2)).toBe(1);
        expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should perform power via calculate with ** operator', () => {
        expect(calculate(2, '**', 3)).toBe(8);
        expect(calculate(5, '**', 2)).toBe(25);
    });

    test('should perform power via calculate with ^ operator', () => {
        expect(calculate(2, '^', 3)).toBe(8);
        expect(calculate(3, '^', 3)).toBe(27);
    });

    test('should perform square root via calculate', () => {
        expect(calculate(16, 'sqrt', 0)).toBe(4);
        expect(calculate(25, 'sqrt', 0)).toBe(5);
    });

    test('should throw error for modulo by zero via calculate', () => {
        expect(() => calculate(10, '%', 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for square root of negative via calculate', () => {
        expect(() => calculate(-4, 'sqrt', 0)).toThrow('Square root of negative number is not allowed');
    });
});

describe('Calculator - Extended Edge Cases', () => {
    test('should handle all new operations with zero', () => {
        expect(modulo(0, 5)).toBe(0);
        expect(power(0, 5)).toBe(0);
        expect(squareRoot(0)).toBe(0);
    });

    test('should handle large exponents', () => {
        expect(power(2, 10)).toBe(1024);
        expect(power(10, 6)).toBe(1000000);
    });

    test('should handle very small decimal results', () => {
        expect(power(10, -3)).toBe(0.001);
        expect(power(2, -5)).toBe(0.03125);
    });
});
