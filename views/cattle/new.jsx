const React = require('react')
const Def = require('../default')

// pass in new data
function newForm (data) {
    return (
        <Def>
            <main>
                <h1>Add New Cattle </h1>
                <form method="POST" action={`/New`}>
                    <div className='form-group'>
                        <label htmlFor="name"> Cattle </label>
                        <input className='form-control' id="id" name="tag_id" required />
                        <input className='form-control' id="name" name="name" required />
                        <input className='form-control' id="species" name="species"/>
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Cattle" />
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm