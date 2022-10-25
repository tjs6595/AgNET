// DEPENDENCIES
const React = require('react')
const Def = require('../default')

function show (data) {
  console.log(data.cattleHerd.cattle.length)
  let cattle = (
    <h3 className="inactive">
      No Cattle Yet!
    </h3>
  )

  if (data.cattleHerd.cattle.length) {
    // console.log(data.cattleHerd.name)
    cattle = data.cattleHerd.cattle.map(c => {
      return (
        <div className="border">
          <h4>Tag #: {c.tag_id } </h4>
          <h4>Name: {c.name } </h4>
          <h4>Breed: {c.species } </h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <h1>{ data.cattleHerd.name }</h1>
        <h2> Cattle </h2>
        { cattle }
        <div>
          {/* BUTTONS */}
            <div >
              {/* EDIT BUTTON */}
                <div>
                  <a href={`./${data.cattleHerd.id}/edit`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                    Edit
                  </a>
                </div>
              {/* DELETE BUTTON */}
                <form method='POST' action={`./${data.cattleHerd.id}?_method=DELETE`}>
                  <button type='submit' className='btn btn-danger btn-lg' style={{marginRight: '15px'}}>
                    Delete
                  </button>
                </form>
              {/* BACK TO HERDS BUTTON */}
                <div>
                  <a href={`/Livestock/Cattle/HerdList`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                    BACK TO THE HERD LIST
                  </a>
                </div>
            </div>
        </div>
      </main>
      </Def>
  )
}

module.exports = show

