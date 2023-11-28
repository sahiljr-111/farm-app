const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    seller_id: { type: String },
    name: { type: String },
    stock: { type: Number },
    price: { type: Number },
    description: { type: String },
})
module.exports = mongoose.model('addProduct', productSchema)