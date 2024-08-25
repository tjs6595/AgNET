const mongoose = require('mongoose')

const cattleSchema = new mongoose.Schema({
    tag_id:{type: String, required: true},
    name: {type: String, required: false},
    species: {type: String},
    herd: {type: mongoose.Schema.Types.ObjectId, ref: 'CattleHerd'}
})

module.exports = mongoose.model('Cattle', cattleSchema, 'cattle')