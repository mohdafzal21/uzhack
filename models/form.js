const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    name : String,
    email: String,
    username: String,
    password: { type: String, required: true },
    confirm: { type: String, required: true }
})

const Form = mongoose.model("Form" , formSchema)

module.exports = Form;