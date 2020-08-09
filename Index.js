// Constructor Functions

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');


// empty team array
const teamArray = [];

// Inquirer Data Collection
function getEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Start off by giving us your employee's name.",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("We need your employee's name before we can continue!");
                    return false;
                }
            }
        },
        {
            type: 'Input',
            name: 'id',
            message: "Next, please provide your employee's ID number.",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log("We can't continue until we have your employee's ID number!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Next, please provide your employee's email address.",
            validate: emailInput =>  {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Sorry! We need your employee's email address before we can go any further!");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Next, please select if your employee is a Manager, Engineer, or Intern.",
            choices: ['Manager','Engineer','Intern'],
            validate: roleInput => {
                if(roleInput) {
                    return true;
                } else {
                    console.log("Not so fast! We need to know if your employee is a Manager, Engineer, or Intern!");
                    return false;
                }
            }
        }

    ])
    .then(response => {

        // Ask specific job-based questions that coincide with answer from 'response.role
        if(response.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name:'office',
                    message: 'What is the office number of your manager?',
                    validate: officeInput => {
                        if(officeInput) {
                            return true;
                        } else {
                            console.log("Stop right there! We need an office number for your manager before you continue!");
                            return false;
                        }
                    }
                }
            ]).then(answer => {
                const teamManager = new Manager(response.name,response.id,response.email,answer.office);
                teamArray.push(teamManager)
                furtherTeamPrompt();
            })
        } else if(response.role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Please enter the github username of your Engineer.',
                    validate: githubInput => {
                        if(githubInput) {
                            return true;
                        } else {
                            console.log("Wait! We need your engineer's github username before we can continue!");
                            return false;
                        }
                    }
                }
            ]).then(answer => {
                const teamEngineer = new Engineer(response.name,response.id,response.email,answer.github);
                teamArray.push(teamEngineer)
                furtherTeamPrompt();
            })
        } else {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school is your Intern attending?',
                    validate: schoolInput => {
                        if(schoolInput) {
                            return true;
                        } else {
                            console.log("Hold your horses! We need your interns school before we can continue!");
                            return false;
                        }
                    }
                }
            ]).then(answer => {
                const teamIntern = new Intern(response.name,response.id,response.email,answer.school);
                teamArray.push(teamIntern);
                furtherTeamPrompt();
            })
        }
    })
};
function furtherTeamPrompt() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'more',
            message: 'Do you have more employees to add to your team?',
        }
    ])
    .then(response => {
        if(response.more === true) {
            return getEmployee(teamArray);
        } else {
            let pageHTML = generatePage(teamArray)
             writeFile(pageHTML)
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
            .catch(err => {
                console.log(err);
            });
        }
    })
    
}
getEmployee();
