function BankAccount(ownerName, initialBalance) {
  this.ownerName = ownerName;
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

BankAccount.prototype.getBalance = function () {
  return `${this.ownerName} - ${this.balance}`;
};

module.exports = { BankAccount };
