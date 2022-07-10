// importing inquirer
const inquirer = require('inquirer');

// importing required functions, variables, and objects
const fileWriter = require('./dist/fileWriter');
const indexGenerator = require('./dist/indexGenerator');
const cssGenerator = require('./dist/cssGenerator');
const questions = require('./src/questions');
const manager = require('./lib/Manager');
const Manager = manager.Manager;
const engineer = require('./lib/Engineer');
const Engineer = engineer.Engineer;
const intern = require('./lib/Intern');
const Intern = intern.Intern;

// pathing for fileWriter
const htmlPath = "./public/index.html";
const cssPath = "./public/assets/css/style.css";
// declaring question arrays
const managerQuestions = questions.manager;
const engineerQuestions = questions.engineer;
const internQuestions = questions.intern;
const addMoreQuestion = questions.more;

// async function to prompt the user via terminal
async function inquirerPrompt() {
    let askToAdd;
    const teamArray = [];

    // prompt initial manager question
    const manager = await inquirer.prompt(managerQuestions);
    // add manager object to teamArray
    teamArray.push(new Manager(manager));
    // ask if there is aditional team members
    askToAdd = await askToAddMore();

    // keeps prompting user to add more team members until no is selected
    while(askToAdd.addMore !== 'no') {
        switch(askToAdd.addMore) {
            case 'engineer':
                let engineer = await inquirer.prompt(engineerQuestions);
                teamArray.push(new Engineer(engineer));
                break;
            
            case 'intern':
                let intern = await inquirer.prompt(internQuestions);
                teamArray.push(new Intern(intern));
                break;

            default:
                console.log('error in switch statement');
                break;
        }

        askToAdd = await askToAddMore();
    }
    // awaiting to create file once prompt is done
    await createFile(teamArray);
};

// ask if there is aditional team members
async function askToAddMore() {
    const result = inquirer.prompt(addMoreQuestion);

    return result;
};

// creates html and css file
async function createFile(teamArray) {
    // data must be an array of objects
    fileWriter(htmlPath, indexGenerator(teamArray));
    fileWriter(cssPath, cssGenerator());
}

// runs program
inquirerPrompt();