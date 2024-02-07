import { simpleCalculator } from './index';
import {
  mockAddInput,
  mockDivideInput,
  mockExponentiateInput,
  mockInvalidActionInput,
  mockInvalidArgsInput,
  mockMultiplyInput,
  mockSubtractInput,
} from './mocks';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    expect(simpleCalculator(mockAddInput)).toBe(10);
  });

  test('should subtract two numbers', () => {
    expect(simpleCalculator(mockSubtractInput)).toBe(6);
  });

  test('should multiply two numbers', () => {
    expect(simpleCalculator(mockMultiplyInput)).toBe(16);
  });

  test('should divide two numbers', () => {
    expect(simpleCalculator(mockDivideInput)).toBe(4);
  });

  test('should exponentiate two numbers', () => {
    expect(simpleCalculator(mockExponentiateInput)).toBe(64);
  });

  test('should return null for invalid action', () => {
    expect(simpleCalculator(mockInvalidActionInput)).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator(mockInvalidArgsInput)).toBe(null);
  });
});
