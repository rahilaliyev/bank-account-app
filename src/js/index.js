import "../main.scss";
import { BankAccount } from "./BankAccount";

function initialize() {
  const rahil = new BankAccount("Rahil", 500);
  console.log(rahil.getBalance());
}

window.addEventListener("DOMContentLoaded", initialize);
