const calculator = require('../calculator');

describe('Calculator - Basic Operations', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(calculator.add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });

    test('should add decimal numbers', () => {
      expect(calculator.add(1.5, 2.3)).toBeCloseTo(3.8);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    test('should subtract negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should handle negative result', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('should subtract decimal numbers', () => {
      expect(calculator.subtract(10.5, 3.2)).toBeCloseTo(7.3);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(calculator.multiply(45, 2)).toBe(90);
    });

    test('should multiply by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers', () => {
      expect(calculator.multiply(-4, 3)).toBe(-12);
    });

    test('should multiply two negative numbers', () => {
      expect(calculator.multiply(-4, -3)).toBe(12);
    });

    test('should multiply decimal numbers', () => {
      expect(calculator.multiply(2.5, 4)).toBeCloseTo(10);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(calculator.divide(20, 5)).toBe(4);
    });

    test('should divide with decimal result', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should divide negative numbers', () => {
      expect(calculator.divide(-20, 5)).toBe(-4);
    });

    test('should divide two negative numbers', () => {
      expect(calculator.divide(-20, -5)).toBe(4);
    });
  });
});

describe('Calculator - Extended Operations', () => {
  describe('modulo', () => {
    test('should calculate modulo of positive numbers', () => {
      expect(calculator.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with no remainder', () => {
      expect(calculator.modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(calculator.modulo(-7, 3)).toBe(-1);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should calculate modulo with larger numbers', () => {
      expect(calculator.modulo(100, 7)).toBe(2);
    });
  });

  describe('power', () => {
    test('should calculate power of positive numbers', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate power with zero exponent', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    test('should calculate power with negative exponent', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should calculate power with decimal base', () => {
      expect(calculator.power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with negative base', () => {
      expect(calculator.power(-2, 3)).toBe(-8);
    });

    test('should handle large exponents', () => {
      expect(calculator.power(10, 5)).toBe(100000);
    });
  });

  describe('squareRoot', () => {
    test('should calculate square root of perfect square', () => {
      expect(calculator.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    test('should calculate square root with decimal result', () => {
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should calculate square root of large numbers', () => {
      expect(calculator.squareRoot(144)).toBe(12);
    });

    test('should calculate square root of decimal numbers', () => {
      expect(calculator.squareRoot(6.25)).toBe(2.5);
    });
  });
});
