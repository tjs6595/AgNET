const React = require('react')
const Def = require('../default')

// pass in new data
function newForm (data) {
    return (
        <Def>
            <main>
                <h1>New Cattle Herd</h1>
                <form method="POST" action="/cattleHerds">
                    <div>
                        <label htmlFor="name">Herd Name</label>
                        <input id="name" name="name" required />
                    </div>
                    <input type="submit" value="Add Herd" />
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm
