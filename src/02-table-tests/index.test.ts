import { simpleCalculator } from './index';
import {
  testCasesAdd,
  testCasesDivide,
  testCasesExponentiate,
  testCasesInvalidAction,
  testCasesInvalidArgs,
  testCasesMultiply,
  testCasesSubtract,
} from './mocks';

describe('simpleCalculator', () => {
  it.each(testCasesAdd)(
    'should add two numbers ($a, $b) and return $expected',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesSubtract)(
    'should subtract two numbers ($a, $b) and return $expected',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesMultiply)(
    'should multiply two numbers ($a, $b) and return $expected',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesDivide)(
    'should divide two numbers ($a, $b) and return $expected',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesExponentiate)(
    'should exponentiate two numbers ($a, $b) and return $expected',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesInvalidAction)(
    'should return null for invalid action ($action)',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );

  it.each(testCasesInvalidArgs)(
    'should return null for invalid arguments ($a, $b)',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );
});
