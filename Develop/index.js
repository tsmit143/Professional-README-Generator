// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  {
    message: "Please provide the project title: ",
    name: "title",
    type: "input",
  },
  {
    message: "Please provide the project description:",
    name: "description",
    type: "input",
  },
  {
    message: "Provide Table of Contents if Applicable:",
    name: "table",
    type: "input",
  },
  {
    message: "What are the steps required to install your project?",
    name: "installation",
    type: "input",
  },
  {
    message: "Provide instructions and examples for use:",
    name: "usage",
    type: "input",
  },
  {
    message: "Who are your collaborators, if any?",
    name: "credits",
    type: "input",
  },
  {
    message: "What is the project's License?",
    name: "license",
    type: "input",
  },
  {
    message: "Provide examples on how to run the project:",
    name: "tests",
    type: "input",
  },
  {
    message: "Provide project questions:",
    name: "questions",
    type: "input",
  },
  // {question: 'Please provide a short description of yoru project:'},
  // {question: 'What is the license?'}
];

// TODO: Create a function to write README file

const fs = require("fs");
//const { default: inquirer } = require("inquirer");
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

function askQuestions(){
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        const markdown = generateMarkdown(answers);
        writeToFile('readMe.md',markdown);
        console.log(markdown);
    })
}
// TODO: Create a function to initialize app
function init() {
    console.log("welcome to the readMe generator!");
    askQuestions ();
}

// Function call to initialize app
init();
