// dependency. index.js works almost exclusively with inquirer logic (and some console logs).
const inquirer = require('inquirer');

// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// helper code
const generateHTML = require('./src/generateHTML');
const writeToFile = require('./src/writeToFile');
const { 
    introQuestion, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions, 
    menuQuestion
} = require('./src/questions');

// variables to hold created objects and document name
let teamArray = [];
let documentName = '';

// first prompt. Asks user for document name, stores it in documentName variable, then calls 
//managerQuery
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

// second prompt. asks user for manager information using array of questions from questions.js
// Stores response as a Manager object and pushed to teamArray. Then calls menu
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

// conditional prompt. Is called if user decides to add engineer during menu option selection.
// stores response as an Engineer object and pushed to teamArray. then calls menu
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

// conditional prompt. Is called if user decides to add intern during menu option selection.
// stores response as an Intern object and pushed to teamArray. then calls menu
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

// third prompt. Gives the user a choice between adding an engineer (calls engineerQuery), adding
// an intern (calls internQuery) or finish building team. If finished, calls generateHTML
// imported from generateHTML.js and stores the returned HTML code in the documentBody
// variable. Then calls writeToFile imported from writeToFile.js which handles writing the
// HTML document given the documentName input from user, and the generated HTML code from
// generateHTML, using fs library
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

// init function called when app starts. basically logs an introduction message, then calls intro
// which starts user prompts
const init = () => {
    
    console.log("\x1b[32mHello. Welcome to this team profile generator application. You will be presented with a series of questions about your team members' information. Once you've finished adding the information of all team members, a styled HTML document will be generated in the 'dist' folder. Note that the styles are based on Foundation's CSS framework and some custom CSS styles found in the style.css document also in the 'dist' folder.\x1b[0m");
    intro();

};

// init function called when app starts using 'node index.js'
init();