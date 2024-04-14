#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; //Dolor
const myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);

if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");

    let operationAns = await inquirer.prompt([
        {
            name: "account",
            message: "Please select your account type",
            type: "list",
            choices: ["Current Account", "Saving Account"],
        },
        {
          name: "transMethode",
          message: "Select your transaction method",
          type: "list", // Should be "list", not an array ["cash withdraw", "fast cash"]
          choices: ["cash withdraw", "fast cash"],
        },
    ]);

    if (operationAns.transMethode === "cash withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdraw",
                message: "enter your amount",
                type: "number",
            },
        ]);

        if (myBalance >= amountAns.withdraw) {
            myBalance -= amountAns.withdraw;
            console.log("Your remaining balance is: " + myBalance);
        } else {
            console.log("Insufficient Balance");
        }
    } else if (operationAns.transMethode === "fast cash") {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: ["1000", "3000", "5000"],
            },
        ]);

        if (myBalance >= fastCashAmount.fastCash) {
            myBalance -= fastCashAmount.fastCash;
            console.log("your total balance is: $" + myBalance);
        } else {
            console.log("Insufficient Balance");
        }
    } 
      
} else {
    console.log("Incorrect pin number");
}
