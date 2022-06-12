const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');
const writeToFile = require('./src/writeToFile');
const { 
    introQuestion, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions, 
    menuQuestion
} = require('./src/questions');

let teamArray = [];
let documentName = '';

const intro = () => {

    console.log();

    inquirer
    .prompt(introQuestion)
    .then(({ name }) => {
        
        documentName = name;
        managerQuery();
    
    });

};

const managerQuery = () => {

    console.log();

    inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {

        const managerObject = new Manager(name, id, email, officeNumber);
        teamArray.push(managerObject);
        menu();

    });

};

const engineerQuery = () => {

    console.log();

    inquirer
    .prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {

        const engineerObject = new Engineer(name, id, email, github);
        teamArray.push(engineerObject);
        menu();

    });

};

const internQuery = () => {

    console.log();

    inquirer
    .prompt(internQuestions)
    .then(({ name, id, email, school }) => {

        const internObject = new Intern(name, id, email, school);
        teamArray.push(internObject);
        menu();

    });

};

const menu = () => {

    console.log();

    inquirer
    .prompt(menuQuestion)
    .then(({ menuOption }) => {

        switch (menuOption) {

            case 'Add an engineer':
                engineerQuery();
                break;

            case 'Add an intern':
                internQuery();
                break;

            case 'Finish building team':
                const documentBody = generateHTML(teamArray);
                writeToFile(documentName, documentBody);
                break;    
        
            default:
                console.error('Something went wrong with the menu');
                break;

        };

    });

};

const init = () => {

    intro();

};

init();