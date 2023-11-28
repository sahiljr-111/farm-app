const mongoose = require('mongoose')
const userRegSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    contact: { type: Number }
})
module.exports = mongoose.model('user', userRegSchema)