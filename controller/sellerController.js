const sellerModel = require('../model/sellerModel')
const storage = require('node-persist');

exports.selerRegistration = async (req, res) => {
    var data = await sellerModel.create(req.body)
    res.status(200).json({
        status: "Success",
        data
    })
}
exports.selerLogin = async (req, res) => {
    var username = req.body.username
    var pass = req.body.password

    try {
        var data = await sellerModel.find({ email: username })
        if (data[0].password == pass) {
            await storage.init( /* options ... */);
            await storage.setItem('s_id', data[0]._id)
            res.status(200).json({
                status: "Login Successfully"
            })
        } else {
            res.status(401).json({
                status: "Password is incorrect"
            })
        }
    } catch {
        res.status(401).json({
            status: "Username incorect"
        })
    }
}