const introQuestion = [

    {
        name: 'fileName',
        type: 'input',
        message: 'Enter a name for your HTML document.',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected. Please enter a file name.\x1b[0m');
                return false;
            }
        } 
    }

]

const managerQuestions = [

    {
        name: 'name',
        type: 'input',
        message: "What is the team manager's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the team manager's ID number?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the team manager's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter an email.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'officeNumber',
        type: 'input',
        message: "What is the team manager's office number?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    }

];

const engineerQuestions = [

    {
        name: 'name',
        type: 'input',
        message: "What is the engineer's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's ID number?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter an email.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's github username?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter a username.\x1b[0m');
                return false;
            }
        } 
    },

];

const internQuestions = [

    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the intern's ID number?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the intern's email?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter an email.\x1b[0m');
                return false;
            }
        } 
    },

    {
        name: 'school',
        type: 'input',
        message: "What is the intern's school?",
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('\x1b[31mNo Input detected.  Please enter a school.\x1b[0m');
                return false;
            }
        } 
    },

];

const menu = [

    {
        name: 'menuChoice',
        type: 'list',
        message: 'Please select one of the following options:',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish building team',         
        ],
        default: 'Add an engineer'
    },

];

module.exports = {
    introQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions,
    menu
}