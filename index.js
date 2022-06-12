const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');
const { 
    introQuestion, 
    managerQuestions, 
    engineerQuestions, 
    internQuestions, 
    menu
} = require('./src/questions');

let teamArray = [];



