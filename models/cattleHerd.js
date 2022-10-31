const mongoose = require('mongoose')

const cattleHerdSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cattle: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cattle'}]
})

module.exports = mongoose.model('CattleHerd', cattleHerdSchema)
