// module.exports = [
//     {
//         tag_id: 'Red 7',
//         name: 'Betsy',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     },
//     {
//         tag_id: 'Red 40',
//         name: 'Mabel',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     },
//     {
//         tag_id: 'Red 47',
//         name: 'Belle',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     }
//   ]




const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the cattleHerd, Herd 7777
    let cattleHerd = await db.CattleHerd.findOne({ name: 'Herd 7777' })

    // Create a fake sample cattle.
    let cattle = await db.Cattle.create({
        tag_id: 'Red 7',
        name: 'Betsy',
        species: 'Angus',
        pic: '/images/AngusCow.jpg'
    })

    // Add that comment to the Cattleherd's Cattle array.
    // cattleHerd.cattle.push(cattle.id)

    //save the place now that it has comment
    // await cattleHerd.save()
    
    // Exit the program
    process.exit()
}

// seed()


// module.exports = [
//     {
//         tag_id: 'Red 7',
//         name: 'Betsy',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     },
//     {
//         tag_id: 'Red 40',
//         name: 'Mabel',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     },
//     {
//         tag_id: 'Red 47',
//         name: 'Belle',
//         species: 'Angus',
//         pic: '/images/AngusCow.jpg'
//     }
// ]


