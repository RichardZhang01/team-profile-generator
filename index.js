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

    console.log("\x1b[32m-----------------------------");
    console.log("      Application Start      ");
    console.log("-----------------------------\x1b[0m");

    inquirer
    .prompt(introQuestion)
    .then(({ name }) => {
        
        documentName = name;
        managerQuery();
    
    });

};

const managerQuery = () => {

    console.log("\x1b[32m-----------------------------");
    console.log("     Manager Information      ");
    console.log("-----------------------------\x1b[0m");

    inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        
        officeNumber = parseInt(officeNumber);
        id = parseInt(id);

        const managerObject = new Manager(name, id, email, officeNumber);
        teamArray.push(managerObject);
        menu();

    });

};

const engineerQuery = () => {

    console.log("\x1b[32m-----------------------------");
    console.log("     Engineer Information      ");
    console.log("-----------------------------\x1b[0m");

    inquirer
    .prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {

        id = parseInt(id);

        const engineerObject = new Engineer(name, id, email, github);
        teamArray.push(engineerObject);
        menu();

    });

};

const internQuery = () => {

    console.log("\x1b[32m-----------------------------");
    console.log("      Intern Information      ");
    console.log("-----------------------------\x1b[0m");

    inquirer
    .prompt(internQuestions)
    .then(({ name, id, email, school }) => {

        id = parseInt(id);

        const internObject = new Intern(name, id, email, school);
        teamArray.push(internObject);
        menu();

    });

};

const menu = () => {

    console.log("\x1b[32m-----------------------------");
    console.log("       Application Menu      ");
    console.log("-----------------------------\x1b[0m");

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
    
    console.log("\x1b[32mHello. Welcome to this team profile generator application. You will be presented with a series of questions about your team members' information. Once you've finished adding the information of all team members, a styled HTML document will be generated in the 'dist' folder. Note that the styles are based on Foundation's CSS framework and some custom CSS styles found in the style.css document also in the 'dist' folder.\x1b[0m");
    intro();

};

init();