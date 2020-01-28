const mongoose = require('mongoose');//npm i mongoose

const Schema = mongoose.Schema;
const leadSchema = new Schema({
    email: String,
    name: String,
    phone: String,
    feature:String,
    message: String
});

module.exports =
{
    leadsSchema: mongoose.model('demoleads', leadSchema),
}