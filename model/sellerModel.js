const mongoose = require('mongoose')
const sellerRegSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    contact: { type: Number }
})
module.exports = mongoose.model('seller', sellerRegSchema)