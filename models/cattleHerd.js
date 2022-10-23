const mongoose = require('mongoose')

const cattleHerdSchema = new mongoose.Schema({
    name: {type: String, required: true},
    head: {type: String}
})

module.exports = mongoose.model('CattleHerd', cattleHerdSchema)






// let cattleHerdList = [{
//     id: 1,
//     name: 'Array Herd 1',
//     head: [
//       'Cattle 1',
//       'Cattle 2',
//       'Cattle 3'
//     ]
//   }, {
//     id: 2,
//     name: 'Array Herd 2',
//     head: [
//       'Cattle 4',
//       'Cattle 5',
//       'Cattle 6'
//     ]
//   }]

//   // MODEL AND EXPORT
// module.exports = cattleHerdList