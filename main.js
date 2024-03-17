import inquirer from "inquirer";
import chalk from "chalk";
let answers = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age:"
});
console.log(chalk.red("Inshallah , after " + chalk.green(60 - answers.age) + " years you will be 60 years old. "));
console.log(chalk.yellow("My name is MAIRA KANWAL"));
console.log(chalk.blue("My name is " + chalk.blue.bold("Maira Kanwal")));
console.log(chalk.green("I  have done " + chalk.green.bold("bechelors of commerce.")));
