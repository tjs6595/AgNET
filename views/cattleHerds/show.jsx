// DEPENDENCIES
const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.name }</h1>
            {/* <a href={`./${data.id}/edit`} className="btn btn-warning"> Edit </a>  
            <form method="POST" action={`/cattleHerds/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger"> Delete </button>
            </form>      */}
          </main>
        </Def>
    )
}

module.exports = show

