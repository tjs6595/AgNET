const React = require('react')
const Def = require('../default')

// pass in new data
function cattleHerdEditForm (data) {
    return (
        <Def>
          <main>
            <h1>Edit The Cattle Herd</h1>
            <form method='POST' action={`/cattleHerds/${data.cattleherds.id}?_method=PUT`}>
                <div className='row'>
                    {/* CATTLE HERD NAME */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='Name'>Herd Name:</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='cattle-herd-name' name='name' 
                        defaultValue={data.cattleHerds.name} 
                        required />
                    </div>

                    {/* MOCKMON PICTURE */}
                    {/* <div className='form-group col-sm-4'>
                        <label htmlFor='image'>Image</label>
                        <input className='form-control' type='url' id='image' name='image'  defaultValue={data.pokemon.image} />
                    </div> */}

                    {/* MOCKMON SPRITE */}
                    {/* <div className='form-group col-sm-4'>
                        <label htmlFor='sprite'>Sprite</label>
                        <input className='form-control' type='url' id='sprite' name='sprite'  defaultValue={data.pokemon.sprite} />
                    </div> */}

                    {/* ABILITY*/}
                    {/* <div className='form-group col-sm-4'>
                        <label htmlFor='ability'>Ability</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='ability' name='ability'  
                        defaultValue={data.pokemon.ability}
                        maxLength='20' type='text'
                        required
                         />
                    </div> */}

                    {/* Move 1 */}
                    {/* <div className='form-group col-sm-3'>
                        <label htmlFor='move_1'>Move #1</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='move_1' name='move_1'  
                        defaultValue={data.pokemon.move_1}
                        maxLength='20' type='text'
                        required
                        />
                    </div> */}
                
                <div className='d-flex justify-content-center'>
                    {/* SUBMIT BUTTON */}
                    <input className='btn btn-success col-sm-3' type='submit' 
                    value='Edit Mockmon'
                    style={{margin: '15px'}}
                    />
                </div>
                
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = editForm