#! /usr/bin/env node
// Calculator Project

import inquirer from "inquirer"
let a = await inquirer.prompt([{
    name : "num1",
    type : "number",
    message : "what is your first number"
}])
let b = await inquirer.prompt([{
    name : "num2",
    type : "number",
    message : "what is your second number"
}])
let c = await inquirer.prompt([{
    name : "operator",
    type : "list",
    message : "what is your operator",
    choices : ["addition", "subtration", "multipication", "division"],

}])
if (c.operator == "addition" )
{
    console.log(a.num1+b.num2);
}
else {
if (c.operator == "subtration" )
{
    console.log(a.num1-b.num2);
}
else {
    
if (c.operator == "multipication" )
{
    console.log(a.num1*b.num2);
}
else {
    
if (c.operator == "division" )
{
    console.log(a.num1/b.num2);
}
else
{
    console.log("invalid Operator");
}

}
}
}