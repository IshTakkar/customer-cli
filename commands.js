#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
} = require('./index');

const questions = [
    {
        type: 'input',
        name: 'firstname',
        message: 'Customer\'s first name: '
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'Customer\'s last name: '
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer\'s phone number: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer\'s email address: '
    }
]

program
    .version('1.0.0')
    .description('Client Management System');

//add command
program
    .command('add')
    .alias('a')
    .description('Add a customer')
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers)).catch((err) => {
            console.log('error:', err);
        });
    });

//find command
program
    .command('find <name>')
    .alias('f')
    .description('Find a customer')
    .action((name) => findCustomer(name));


//update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update a customer')
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id, answers)).catch((err) => {
            console.log('error:', err);
        });
    });

//delete command
program
    .command('delete <_id>')
    .alias('d')
    .description('Delete a customer')
    .action((_id) => removeCustomer(_id));

//list customers
program
    .command('list')
    .alias('l')
    .description('List all customers')
    .action(() => listCustomers());

program.parse(process.argv);