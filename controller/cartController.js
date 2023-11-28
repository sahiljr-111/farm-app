var cartModel = require('../model/cartModel')
const storage = require('node-persist');
const prodectModel = require('../model/prodectModel');
const userModel = require('../model/userModel');


exports.addToCart = async (req, res) => {
    await storage.init( /* options ... */);
    var p_id = req.body.product_id
    var u_id = await storage.getItem('u_id')

    var data = await cartModel.create({
        product_id: p_id,
        user_id: u_id
    })

    res.status(200).json({
        status: "Success",
        data
    })

}

exports.manageCart = async (req, res) => {

    await storage.init( /* options ... */);
    var u_id = await storage.getItem('u_id')
    var userdata = await userModel.findById(u_id)
    var data = await cartModel.find({ user_id: u_id });
    var productdata = []

    for (var i = 0; i < data.length; i++) {
        productdata.push(await prodectModel.findOne({
            _id: data[i].product_id
        }))
    }

    res.status(200).json({
        status: "Success",
        userdata,
        productdata
    })

}

exports.removeCartItem = async (req, res) => {
    var id = req.params.id;
    await cartModel.findByIdAndDelete(id)
    var data = await cartModel.find()
    res.status(200).json({
        status: "Success",
        data
    })

}

exports.manageOrder = async (req, res) => {
    await storage.init( /* options ... */);
    var s_id = await storage.getItem('s_id')
    var cartdata = await cartModel.find()

    var orderdata = [];
    for (var i = 0; i < cartdata.length; i++) {
        var data = await prodectModel.findOne({
            _id: cartdata[i].product_id
        })
        if (data.seller_id == s_id) {
            var user = cartdata[i].user_id
            var userdata = await userModel.findById(user)
            orderdata.push({
                data,
                userdata
            })
        }
    }

    res.status(200).json({
        status: "Success",
        orderdata
    })

}  
