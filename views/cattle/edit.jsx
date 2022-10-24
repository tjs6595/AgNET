const React = require('react')
const Def = require('../default')

// Pass in new data
function editForm (data) {
    return (
        <Def>
            <main>
                <h1>Edit Cattle </h1>
            </main>
        </Def>
    )
}

module.exports = editForm



// <form method='POST' action={`./?_method=PUT`}>
// <div className='form-group'>
//     <label htmlFor="name">Herd Name</label>
//     <input className='form-control' id="name" name="name" value={data.cattleHerd.name} required />
//     { cattle }
// </div>
// </form>
// {/* BUTTONS */}
// {/* EDIT HERD BUTTON */}
// <input className='btn btn-primary' type="submit" value="Edit Herd" />
// {/* EDIT CATTLE BUTTON */}
// <div>
// <a href={`./${data.cattleHerd.id}/edit`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
// Edit
// </a>
// </div>