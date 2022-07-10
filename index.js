const inquirer = require('inquirer');

const createFile = require('./dist/fileWriter');
const indexGenerator = require('./dist/indexGenerator');
const cssGenerator = require('./dist/cssGenerator');
const questions = require('./src/questions');
const manager = require('./lib/Manager');
const Manager = manager.Manager;
const engineer = require('./lib/Engineer');
const Engineer = engineer.Engineer;
const intern = require('./lib/Intern');
const Intern = intern.Intern;

const htmlPath = "./public/index.html";
const cssPath = "./public/assets/css/style.css";
const managerQuestions = questions.manager;
const engineerQuestions = questions.engineer;
const internQuestions = questions.intern;
const addMoreQuestion = questions.more;
const teamArray = [];

async function inquirerPrompt() {
    let askToAdd;

    const manager = await inquirer.prompt(managerQuestions);
    teamArray.push(new Manager(manager));
    askToAdd = await askToAddMore();

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
    await asyncCreateFile();
};

async function askToAddMore() {
    const result = inquirer.prompt(addMoreQuestion);

    return result;
};

async function asyncCreateFile() {
    // data must be an array of objects
    createFile(htmlPath, indexGenerator(teamArray));
    createFile(cssPath, cssGenerator());
}


inquirerPrompt();

// data must be an array of objects
// createFile(htmlPath, indexGenerator(teamArray));
// createFile(cssPath, cssGenerator());