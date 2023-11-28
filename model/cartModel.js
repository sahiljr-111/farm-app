const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    product_id: { type: String },
    user_id: { type: String },
    status: { type: String }

})
module.exports = mongoose.model('cart', cartSchema)