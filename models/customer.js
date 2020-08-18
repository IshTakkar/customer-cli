const mongoose = require('mongoose');

//create schema

const customerSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    phone: { type: String },
    email: { type: String },
});

//define and export the schema
module.exports = mongoose.model('Customer', customerSchema);