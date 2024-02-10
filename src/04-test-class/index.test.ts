import {
  getBankAccount,
  BankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  let account: BankAccount;
  beforeEach(() => {
    account = getBankAccount(100);
  });
  test('should create account with initial balance', () => {
    expect(account).toBeInstanceOf(BankAccount);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const otherAccount = new BankAccount(200);
    expect(() => account.transfer(200, otherAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(20, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    account.deposit(150);
    expect(account.getBalance()).toBe(250);
  });

  test('should withdraw money', () => {
    account.withdraw(10);
    expect(account.getBalance()).toBe(90);
  });

  test('should transfer money', () => {
    const otherAccount = new BankAccount(0);
    account.transfer(10, otherAccount);
    expect(account.getBalance()).toBe(90);
    expect(otherAccount.getBalance()).toBe(10);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const randomMock = jest.fn().mockReturnValueOnce(1000);
    account.fetchBalance = jest.fn().mockImplementation(() => randomMock());
    const balance = await account.fetchBalance();
    expect(typeof balance).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const fetchBalanceMock = jest.fn().mockReturnValueOnce(1000);
    account.fetchBalance = jest
      .fn()
      .mockImplementation(() => fetchBalanceMock());
    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(1000);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const fetchBalanceMock = jest.fn().mockReturnValueOnce(null);
    account.fetchBalance = jest
      .fn()
      .mockImplementation(() => fetchBalanceMock());

    try {
      await account.synchronizeBalance();
    } catch (error) {
      expect(error).toBeInstanceOf(SynchronizationFailedError);
    }
  });
});
