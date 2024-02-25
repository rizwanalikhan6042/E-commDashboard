const mongoose=require('mongoose');

// Defining the schema for the 'users' collection
const productSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

// Exporting the 'users' model, which will represent the 'users' collection in the database
module.exports = mongoose.model('users',productSchema);


