var productModel = require('../model/prodectModel')
const storage = require('node-persist');

exports.addProduct = async (req, res) => {
    var data = await productModel.create(req.body)
    res.status(200).json({
        status: "Success",
        data
    })
}

exports.manageProduct = async (req, res) => {
    await storage.init( /* options ... */);
    var s_id = await storage.getItem('s_id')
    var data = await productModel.find({ seller_id: s_id })
    res.status(200).json({
        status: "Success",
        data
    })
}

exports.deleteProduct = async (req, res) => {
    var id = req.params.id
    var data = await productModel.findByIdAndDelete(id)
    res.status(200).json({
        status: "Success",
        data
    })
}

exports.updateProduct = async (req, res) => {
    var id = req.params.id
    await productModel.findByIdAndUpdate(id, req.body)
    var data = await productModel.findById(id)
    res.status(200).json({
        status: "Success",
        data
    })
}

exports.userProduct = async (req, res) => {
    var data = await productModel.find()
    res.status(200).json({
        status: "Success",
        data
    })
}



