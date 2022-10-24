const React = require('react')
const Def = require('../default')

// pass in new data
function editForm (data) {
    let cattle = (
        <h3 className="inactive">
          No Cattle Yet!
        </h3>
      )
    
      if (data.cattleHerd.cattle.length) {
        cattle = data.cattleHerd.cattle.map(c => {
          return (
            <div className="border">
              <h4> {c.tag_id } </h4>
              <h4> {c.name } </h4>
              <h4> {c.species } </h4>
            </div>
          )
        })
      }
    return (
        <Def>
            <main>
                <h1>Edit Cattle Herd</h1>
                <form method='POST' action={`./?_method=PUT`}>
                    <div className='form-group'>
                        <label htmlFor="name">Herd Name</label>
                        <input className='form-control' id="name" name="name" value={data.cattleHerd.name} required />
                        { cattle }
                    </div>
                {/* EDIT HERD BUTTON */}
                <input className='btn btn-primary' type="submit" value="Edit Herd" />
                </form>
                {/* BUTTONS */}
                {/* ADD CATTLE BUTTON */}
                <div>
                  <a href={`./cattle/new`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                    Add Cattle
                  </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = editForm