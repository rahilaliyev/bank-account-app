import "../main.scss";
import { BankAccount } from "./BankAccount";

function initialize() {
  const rahil = new BankAccount("Rahil", 500);
  rahil.deposit(50);
  rahil.withdraw(320);
  console.log(rahil.getBalance());
}

window.addEventListener("DOMContentLoaded", initialize);
