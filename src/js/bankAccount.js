function BankAccount(ownerName, initialBalance) {
  this.ownerName = ownerName;
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (amount) {
  if (typeof amount !== "number") {
    throw new Error("Enter a valid number");
  }
  if (amount < 0) {
    throw new Error("Amount must be positive number");
  }
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (typeof amount !== "number") {
    throw new Error("Enter a valid number");
  }
  if (amount < 0) {
    throw new Error("Amount must be positive number");
  }
  if (this.balance < amount) {
    throw new Error("You don't have enough money in your balance");
  } else {
    this.balance -= amount;
  }
};

BankAccount.prototype.getBalance = function () {
  return `${this.ownerName} - ${this.balance}`;
};

module.exports = { BankAccount };
