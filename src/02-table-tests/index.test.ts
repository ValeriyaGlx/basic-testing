import { simpleCalculator } from './index';
import { testCases } from './mocks';

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when $a $action $b',
    ({ a, b, action, expected }) => {
      const mockInput = { a, b, action };
      expect(simpleCalculator(mockInput)).toBe(expected);
    },
  );
});
