const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

const questions = [
    {
        name: 'fileName',
        type: 'input',
        message: 'Enter a file name for your markdown document.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected. Please enter a file name.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'title',
        type: 'input',
        message: 'What is the title of your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter a title.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'descriptionMotivation',
        type: 'input',
        message: 'What was your motivation behind your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter your motivation behind the project.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'descriptionBuild',
        type: 'input',
        message: 'Why did you build this project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter your reason for building this project.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'descriptionProblem',
        type: 'input',
        message: 'What problem does your project solve?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter the problem your projects solves.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'descriptionLearn',
        type: 'input',
        message: 'What did you learn from your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter what you learned.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter installation steps.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'usage',
        type: 'input',
        message: 'Please provide instructions and examples on how to use your project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter how to use your project.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'licenseList',
        type: 'list',
        message: 'Which license would you like your project to be covered under?',
        choices: [
            'Apache 2.0',
            'GNU GPLv2',
            'GNU GPLv3',
            'MIT',
            'ISC',
            'No License'            
        ],
        default: 'MIT'
    },

    {
        name: 'licenseName',
        type: 'input',
        message: 'What is the name of the copyright holder (will appear on the license)?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter the copyright holder\'s name.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'licenseYear',
        type: 'input',
        message: 'What is the current year (will appear on the license)?',
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected.  Please enter a year.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else {
                return true;
            }
        }
    },

    {
        name: 'contribution',
        type: 'input',
        message: 'Please provice guidelines on how others can contribute to your project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter contribution guidelines.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'test',
        type: 'input',
        message: 'Please provide instructions on how to run tests for your project.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter test instructions.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'questionsUsername',
        type: 'input',
        message: 'What is your GitHub username?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter your GitHub username.\x1b[0m');
                return false;
            }
        }
    },

    {
        name: 'questionsEmail',
        type: 'input',
        message: 'What is your email address?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter your email address.\x1b[0m');
                return false;
            }
        }
    },

];