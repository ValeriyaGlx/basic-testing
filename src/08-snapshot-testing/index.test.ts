import { generateLinkedList } from './index';

const mockElements = [1, 2, 3];
const expectedData = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: null,
        next: null,
      },
    },
  },
};

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(mockElements)).toStrictEqual(expectedData);
  });

  test('should generate linked list from values 2', () => {
    const result = generateLinkedList(mockElements);
    expect(result).toMatchSnapshot();
  });
});
