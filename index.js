// TODO: Include packages needed for this application
const inq = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?: ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter your description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter your installation instructions: ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter usage information: ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines: ',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Enter test instructions: ',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Select which license you wish to use: ',
        name: 'license',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'The Organization for Ethical Source',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Open Data Commons',
            'Perl',
            'SIL',
            'Unlicense',
            'WTFPL',
            'Zlib',
        ]
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

    
function getInput (){
    return inq
            .prompt(questions)
        }


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err, result){
        if (err) console.log(err)
    })
}
    
// TODO: Create a function to initialize app
async function init() {
   
    const input = await getInput()
    const data = generateMarkdown(input)
    writeToFile('newREADME.md', data)
    
}

// Function call to initialize app
init();
