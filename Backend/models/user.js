const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firtsName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String, 
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    passwordDigest: {
        type: String, 
        required: true},
})

module.exports = mongoose.model('User', userSchema)


