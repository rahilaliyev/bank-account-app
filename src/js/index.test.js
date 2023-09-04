const { BankAccount } = require("./BankAccount");

describe("BankAccount", () => {
  let account;

  beforeEach(() => {
    account = new BankAccount("Rahil Aliyev", 1000);
  });

  test("should return correct owner name and balance", () => {
    expect(account.ownerName).toBe("Rahil Aliyev");
    expect(account.balance).toBe(1000);
  });

  test("deposit() should add the specified amount to the balance", () => {
    account.deposit(500);
    expect(account.balance).toBe(1500);
  });

  test("deposit() should throw an error if the balance is not a number", () => {
    expect(() => account.deposit("hello")).toThrow("Enter a valid number");
  });

  test("withdraw() should throw an error if the balance is not a number", () => {
    expect(() => account.withdraw("world")).toThrow("Enter a valid number");
  });

  test("withdraw() should throw an error if the balance is more than amount", () => {
    expect(() => account.withdraw(1500)).toThrow("You don't have enough money in your balance");
  });

  test("withdraw() should throw an error if the amount is negative", () => {
    expect(() => account.withdraw(-100)).toThrow("Amount must be positive number");
  });

  test("getBalance() should return the owner name and balance as a string", () => {
    const balanceStr = account.getBalance();
    expect(balanceStr).toBe("Rahil Aliyev - 1000");
  });
});
