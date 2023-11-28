const userModel = require('../model/userModel')
const storage = require('node-persist');

exports.userRegistration = async (req, res) => {
    var data = await userModel.create(req.body)
    res.status(200).json({
        status: "Success",
        data
    })
}
exports.userLogin = async (req, res) => {
    var username = req.body.username
    var pass = req.body.password

    try {
        var data = await userModel.find({ email: username })
        if (data[0].password == pass) {
            await storage.init( /* options ... */);
            await storage.setItem('u_id', data[0]._id)
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

