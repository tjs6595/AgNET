const React = require('react')
const Def = require('../default')

// pass in new data
function newForm (data) {
    return (
        <Def>
            <main>
                <h1>New Cattle Herd</h1>
                <form method="POST" action="/Livestock/Cattle/HerdList/New">
                    <div className='form-group'>
                        <label htmlFor="name">Herd Name</label>
                        <input className='form-control' id="name" name="name" required />
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add Herd" />
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm
