/**
 * Unit Tests for Calculator Functions
 * 
 * Tests all four basic arithmetic operations:
 * - Addition
 * - Subtraction
 * - Multiplication
 * - Division
 * 
 * Includes edge cases and examples from calc-basic-operations.png
 */

const { add, subtract, multiply, divide, calculate } = require('../calculator');

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
        expect(() => calculate(10, '%', 3)).toThrow("Unknown operator '%'");
        expect(() => calculate(10, '^', 2)).toThrow("Unknown operator '^'");
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
