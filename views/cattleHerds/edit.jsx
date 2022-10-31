const React = require('react')
const Def = require('../default')
// import { Link } from 'react-router-dom'

// pass in new data
function editForm (data) {
  let cattle = (
    <h3 className="inactive">
      No Cattle Yet!
    </h3>
  )

  if (data.cattleHerd.cattle.length) {
    console.log(data.cattleHerd.cattle)
    cattle = data.cattleHerd.cattle.map(c => {
      return (
        <div class="card" style={{width: 150}}>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Tag #: {c.tag_id } </li>
            <li class="list-group-item">Name: {c.name } </li>
            <li class="list-group-item">Breed: {c.species } </li>
          </ul>
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
              <label htmlFor="name" >Herd Name</label>
                <input className='form-control' id="name" name="name" value={data.cattleHerd.name} style={{fontWeight: 'bold', fontSize: 20}} required />
                  { cattle }
            </div>
            {/* EDIT HERD BUTTON */}
            <input className='btn btn-warning btn-lg' type="submit" value="Save Edits" style={{fontWeight: 'bold', fontSize: 15}}/>
          {/* BUTTONS */}
            {/* ADD CATTLE BUTTON */}
            <div>
              <a href={`Cattle/New`} className='btn btn-success btn-lg' style={{fontWeight: 'bold', fontSize: 15}}>
                Add Cattle
              </a>
            </div>
            {/* BACK TO HERD SHOW PAGE BUTTON */}
              {/* <div>
                <a href={`./`} className='btn btn-warning' style={{fontWeight: 'bold', fontSize: 15}}>
                  Back To The Herd Screen
                </a>
              </div> */}
          </form>
      </main>
    </Def>
    )
}

module.exports = editForm


        // <div className="border">
        //   <h4>Tag #: {c.tag_id } </h4>
        //   <h4>Name: {c.name } </h4>
        //   <h4>Breed: {c.species } </h4>
        // </div>