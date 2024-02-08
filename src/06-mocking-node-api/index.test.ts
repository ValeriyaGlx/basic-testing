import path from 'path';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';
import fs from 'fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const spyTimeout = jest.spyOn(global, 'setTimeout');
    const mockCallback = jest.fn();
    doStuffByTimeout(mockCallback, 1000);
    expect(spyTimeout).toBeCalledWith(mockCallback, 1000);
  });

  test('should call callback only after timeout', () => {
    const mockCallback = jest.fn();
    doStuffByTimeout(mockCallback, 1000);
    expect(mockCallback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(mockCallback).toHaveBeenCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const spyTimeout = jest.spyOn(global, 'setInterval');
    const mockCallback = jest.fn();
    doStuffByInterval(mockCallback, 1000);
    expect(spyTimeout).toBeCalledWith(mockCallback, 1000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const mockCallback = jest.fn();
    doStuffByInterval(mockCallback, 1000);
    expect(mockCallback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000 * 5);
    expect(mockCallback).toHaveBeenCalledTimes(5);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const spyJoin = jest.spyOn(path, 'join');
    const pathToFile = '/root/mock/path';
    await readFileAsynchronously(pathToFile);
    expect(spyJoin).toHaveBeenCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);
    const pathToFile = '/root/mock/path';
    const data = await readFileAsynchronously(pathToFile);
    expect(data).toBe(null);
  });

  test('should return file content if file exists', async () => {
    const mockContent = 'Mock Read Content';
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValueOnce(mockContent);

    const pathToFile = '/root/mock/path';
    const data = await readFileAsynchronously(pathToFile);
    expect(data).toBe(mockContent);
  });
});
