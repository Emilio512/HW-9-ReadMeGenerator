// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?',
      },


    {
        type: 'input',
        message: 'Can you descibe this project',
        name: 'description',
        
      },

      {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'purpose',
        
      },
      {
        type: 'input',
        message: 'What problem did it solve?',
        name: 'resolution',
        
      },
      {
        type: 'input',
        name: 'outcome',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        message: 'What are the steps to install your project?',
        name: 'install',
        
      },
      {
        type: 'input',
        message: 'What is your preferred method of communication?',
        name: 'usage',
        
      },
      {
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'license',
        choices: ["MIT","APACHE","PDDL","MPL"]
        
      },
      {
        type: 'input',
        name: 'test',
        message: 'What kind of testing did you do?',
      },

    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What email can you be reached at?',
      }
      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
        const readmePageContent = generateMarkdown.generateMarkdown(data)
    writeToFile("README.md", readmePageContent)
    })
   

}

// Function call to initialize app
init();




// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?