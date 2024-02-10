import { Action } from '01-simple-tests';

const mockRawCalculationInput = {
  a: 8,
  b: 2,
};

export const mockAddInput = {
  ...mockRawCalculationInput,
  action: Action.Add,
};

export const mockSubtractInput = {
  ...mockRawCalculationInput,
  action: Action.Subtract,
};

export const mockMultiplyInput = {
  ...mockRawCalculationInput,
  action: Action.Multiply,
};

export const mockDivideInput = {
  ...mockRawCalculationInput,
  action: Action.Divide,
};

export const mockExponentiateInput = {
  ...mockRawCalculationInput,
  action: Action.Exponentiate,
};

export const mockInvalidActionInput = {
  ...mockRawCalculationInput,
  action: '%',
};

export const mockInvalidArgsInput = {
  a: '8',
  b: '2',
  action: Action.Add,
};
