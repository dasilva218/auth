const mongoose = require('mongoose')
const unique = require("mongoose-unique-validator");

const userSchema= mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    date: { type: Date, defaults:Date.now }
})

mongoose.plugin(unique);
module.exports= mongoose.model("user", userSchema);