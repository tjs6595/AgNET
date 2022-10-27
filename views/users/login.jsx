// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// function cattleHerds(data){
function login(){
    return (
        <Def>
        <main>
          <h2> LOGIN </h2>
          <div>
            {/* BUTTONS */}
              <div >
                {/* EDIT BUTTON */}
                  {/* <div>
                    <a href={`./${data.cattleHerd.id}/edit`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                      Edit
                    </a>
                  </div> */}
                {/* DELETE BUTTON */}
                  {/* <form method='POST' action={`./${data.cattleHerd.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger btn-lg' style={{marginRight: '15px'}}>
                      Delete
                    </button>
                  </form> */}
                {/* BACK TO HOME BUTTON */}
                  <div>
                    <a href={`/`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                      BACK TO THE HOME SCREEN
                    </a>
                  </div>
              </div>
          </div>
        </main>
        </Def>
    )
}

// EXPORTS
module.exports = login