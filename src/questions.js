let takenIDs = [];

const introQuestion = [

    {
        name: 'name',
        type: 'input',
        message: 'Enter a name for your document.',
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a file name.\x1b[0m');
                return false;
            } else {
                return true;
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
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the team manager's ID number?",
        validate: input => {

            let dupeID = false;

            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })

            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else if (dupeID) {
                console.log('\x1b[31m\tAnother team member already has that ID. Please enter a different ID.\x1b[0m');
                return false;
            }else {
                takenIDs.push(input);
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the team manager's email address?",
        validate: email => {

            const validEmail = String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

            if (!validEmail) {
                console.log('\x1b[31m\tPlease enter a valid email address in the proper format.\x1b[0m');
                return false;
            } else {
                return true;
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
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's ID number?",
        validate: input => {

            let dupeID = false;

            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })

            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else if (dupeID) {
                console.log('\x1b[31m\tAnother team member already has that ID. Please enter a different ID.\x1b[0m');
                return false;
            }else {
                takenIDs.push(input);
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?",
        validate: email => {

            const validEmail = String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

            if (!validEmail) {
                console.log('\x1b[31m\tPlease enter a valid email address in the proper format.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'github',
        type: 'input',
        message: "What is the engineer's github username?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a username.\x1b[0m');
                return false;
            } else {
                return true;
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
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a name.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'id',
        type: 'input',
        message: "What is the intern's ID number?",
        validate: input => {

            let dupeID = false;

            takenIDs.forEach(id => {

                if (input === id) {
                    dupeID = true;
                }
            })

            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a number.\x1b[0m');
                return false;
            } else if (isNaN(input)) {
                console.log('\x1b[31m\tPlease enter a number.\x1b[0m');
                return false;
            } else if (input < 0) {
                console.log('\x1b[31m\tPlease enter a non-negative number.\x1b[0m');
                return false;
            } else if (dupeID) {
                console.log('\x1b[31m\tAnother team member already has that ID. Please enter a different ID.\x1b[0m');
                return false;
            }else {
                takenIDs.push(input);
                return true;
            }
        } 
    },

    {
        name: 'email',
        type: 'input',
        message: "What is the intern's email address?",
        validate: email => {

            const validEmail = String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

            if (!validEmail) {
                console.log('\x1b[31m\tPlease enter a valid email address in the proper format.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

    {
        name: 'school',
        type: 'input',
        message: "What is the intern's school?",
        validate: input => {
            if (!input) {
                console.log('\x1b[31mNo Input detected. Please enter a school.\x1b[0m');
                return false;
            } else {
                return true;
            }
        } 
    },

];

const menuQuestion = [

    {
        name: 'menuOption',
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
    menuQuestion
}