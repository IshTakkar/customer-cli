const mongoose = require('mongoose');

//remove warnings
mongoose.Promise = global.Promise;

//connect to database
const db = mongoose.connect('mongodb://localhost:27017/customercli', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//add the model
const Customer = require('./models/customer');


//Create the customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('Customer added!');
    })
        .catch((err) => {
            console.log('error:', err);
        });
};

//Find customer
const findCustomer = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');

    //check whether 'search' matches 'firstname' or 'lastname'
    Customer.find({ $or: [{ firstname: search }, { lastname: search }] }).then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
    })
        .catch((err) => {
            console.log("error: ", err);
        });
};

//Update customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(customer => {
            console.info('Customer info updated!');
        })
        .catch((err) => {
            console.log('error:', err);
        });
};

//Delete customer
const removeCustomer = (_id) => {
    Customer.deleteOne({ _id })
        .then(customer => {
            console.info('Customer deleted!');
        })
        .catch((err) => {
            console.log('error:', err);
        });
};

//List customers
const listCustomers = (customers) => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} customers`);
        })
        .catch((err) => {
            console.log('error:', err);
        });
};


//export functions for use in other files
module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}


