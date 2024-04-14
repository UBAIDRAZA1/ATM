#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dolor
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
// 1234 == 12345 false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
