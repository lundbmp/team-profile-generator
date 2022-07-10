const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your managers name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your managers name!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your office number?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
    }
}];

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'school',
    message: 'What is your school name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your school name!');
          return false;
        }
    }
}];

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your employee ID!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
    }
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github name?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your github name!');
          return false;
        }
    }
}];

const addMoreQuestion = [{
    type: 'list',
    name: 'addMore',
    message: 'would you like to add to your team?',
    choices: ['engineer', 'intern', 'no'],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('please select an option');
            return false;
        }
    }
}];

module.exports = {
    manager: managerQuestions,
    intern: internQuestions,
    engineer: engineerQuestions,
    more: addMoreQuestion,
};