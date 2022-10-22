// DEPENDENCIES
const React = require('react')
const Def = require('../default')

function show (data) {
  return (
    <Def>
      <main>
        <h1>{ data.cattleHerd.name }</h1>
          {/* <a href={`./${data.id}/edit`} className="btn btn-warning"> Edit </a>  
          <form method="POST" action={`/cattleHerds/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger"> Delete </button>
          </form>      */}
        <div>
          {/* BUTTONS */}
            <div>
              {/* DELETE BUTTON */}
                <form method='POST' action={`./HerdList/${data.cattleHerd.id}?_method=DELETE`}>
                  <button type='submit' className='btn btn-danger btn-lg'>
                    Delete
                  </button>
                </form>
            </div>
        </div>
      </main>
      </Def>
  )
}

module.exports = show

