const React = require('react')
const Def = require('../default')

// pass in new data
function editForm (data) {
    return (
        <Def>
            <main>
                <h1>Edit Cattle Herd</h1>
                <form method='POST' action={`./?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor="name">Herd Name</label>
                        <input className='form-control' id="name" name="name" value={data.cattleHerd.name} required />
                        <input className='form-control' id="head" name="head" value={data.cattleHerd.head}/>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Edit Herd" />
                </form>
            </main>
        </Def>
    )
}

module.exports = editForm