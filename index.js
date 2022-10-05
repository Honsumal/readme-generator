// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?: ',
        name: 'pTitle'
    },
    {
        type: 'input',
        message: 'Enter your description: ',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Enter your installation instructions: ',
        name: 'instInst'
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usInf'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contGuid'
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'testInst'
    },
    {
        type: 'input',
        message: 'Select which license you wish to use: ',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your github username: ',
        name: 'gHUser'
    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email'
    },
];

inq
    .prompt(questions)
    .then((answers) => {
        fs.appendFile('answers.txt', JSON.stringify(answers), (err)=>
    err ? console.error(err) : console.log('Answers logged!'))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }

    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
