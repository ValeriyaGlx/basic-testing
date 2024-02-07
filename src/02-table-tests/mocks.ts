import { Action } from '02-table-tests';

type testCasesType = {
  a: number | string | number[];
  b: number | string | number[];
  action: Action | string;
  expected: number | null;
};

export const testCasesAdd: testCasesType[] = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
];

export const testCasesSubtract: testCasesType[] = [
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 4, b: 1, action: Action.Subtract, expected: 3 },
  { a: 5, b: 5, action: Action.Subtract, expected: 0 },
];

export const testCasesMultiply: testCasesType[] = [
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 4, b: 1, action: Action.Multiply, expected: 4 },
  { a: 5, b: 5, action: Action.Multiply, expected: 25 },
];

export const testCasesDivide: testCasesType[] = [
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 4, b: 1, action: Action.Divide, expected: 4 },
  { a: 10, b: 5, action: Action.Divide, expected: 2 },
];

export const testCasesExponentiate: testCasesType[] = [
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 4, b: 1, action: Action.Exponentiate, expected: 4 },
  { a: 5, b: 3, action: Action.Exponentiate, expected: 125 },
];

export const testCasesInvalidAction: testCasesType[] = [
  { a: 3, b: 2, action: '%', expected: null },
  { a: 4, b: 1, action: '**', expected: null },
  { a: 5, b: 3, action: '=', expected: null },
];

export const testCasesInvalidArgs: testCasesType[] = [
  { a: '3', b: '2', action: Action.Exponentiate, expected: null },
  { a: 'one', b: 'two', action: Action.Add, expected: null },
  { a: [1], b: [2], action: Action.Exponentiate, expected: null },
];
