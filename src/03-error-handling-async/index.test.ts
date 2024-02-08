import {
  throwError,
  resolveValue,
  throwCustomError,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const mockProvidedValue = 2;
    const data = await resolveValue(mockProvidedValue);
    expect(data).toBe(mockProvidedValue);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const mockProvidedMessage = 'Mock Error';
    expect(() => throwError(mockProvidedMessage)).toThrow(mockProvidedMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow();
  });
});
