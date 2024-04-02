#! /user/bin/env node

import inquirer from "inquirer";

//initialize user balnce and pin code:
let myBalance = 25000; //Dollars:
let myPin = 3131;

//Welcome message:
console.log("Welcome to code with Aneela atm");

// Ask for the user's pin code
let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "enter you pincode:",
  },
]);
// Check if the entered pin is correct
if (pinAnswer.pin === myPin) {
  console.log("your Pincode is correct, you logged in successfully!");

  // Ask the user to select an operation
  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Sellect an option",
      choices: ["withdraw amount", "check balance", "fast cash"],
    },
  ]);
  // Handle the selected operation
  if (operationAnswer.operation === "withdraw amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter amount you want to withdraw:",
      },
    ]);
    // Check if the withdrawal amount exceeds the balance
    if (amountAns.amount > myBalance) {
      console.log("You are having insufficient balance.");
    } else {
      // Deduct the withdrawal amount from the balance
      myBalance -= amountAns.amount;
      console.log(`${amountAns.amount} withdraw successfully.`);
      console.log(`Your remainng balance is: ${myBalance}`);
    }
  } else if (operationAnswer.operation === "check balance") {
    // Display the user's balance
    console.log(` Your amount balance is: ${myBalance}`);
  } else if (operationAnswer.operation === "fast cash") {
    // Ask the user to select an amount for fast cash withdrawal
    let fastCashAmount = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "Select an amount from fast cash",
        choices: ["20", "500", "1000", "1500"],
      },
    ]);
    // Convert the selected amount to a number
    let amount = parseInt(fastCashAmount.fastCash);
    // Check if the selected amount exceeds the balance
    if (amount > myBalance) {
      console.log("You have insufficient balance!");
    } else {
      // Deduct the selected amount from the balance
      myBalance -= amount;
      console.log(`${amount} is withdrawn successfully.`);
      console.log(`Your remaining balanbe is ${myBalance}`);
    }
  }
} else {
  // Display message for incorrect pin code
  console.log("Pincode is incorrect, try Again!");
}
