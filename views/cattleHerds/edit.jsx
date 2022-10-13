const React = require('react')
const Def = require('../default')

// pass in new data
function editForm (data) {
    return (
        <Def>
          <main>
            <h1>Edit Mockmon</h1>
            <form method='POST' action={`/mockmon/${data.pokemon.id}?_method=PUT`}>
                <div className='row'>
                    {/* MOCKMON SPECIES */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='species'>Species</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='species' name='species' 
                        defaultValue={data.pokemon.species} 
                        maxLength='10' type='text'
                        pattern="[a-zA-Z]+" 
                        required />
                    </div>

                    {/* MOCKMON PICTURE */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='image'>Image</label>
                        <input className='form-control' type='url' id='image' name='image'  defaultValue={data.pokemon.image} />
                    </div>

                    {/* MOCKMON SPRITE */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='sprite'>Sprite</label>
                        <input className='form-control' type='url' id='sprite' name='sprite'  defaultValue={data.pokemon.sprite} />
                    </div>

                    {/* MOCKMON TYPE 1 */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='type_1'>Type 1</label>
                        <span className="required-field">*</span>
                        <select className='form-control' 
                        id='type_1' name='type_1' 
                        defaultValue={data.pokemon.type_1}  
                        required >
                            <option value='bug' >Bug</option>
                            <option value='dark' >Dark</option>
                            <option value='dragon' >Dragon</option>
                            <option value='electric' >Electric</option>
                            <option value='fight' >Fight</option>
                            <option value='fire' >Fire</option>
                            <option value='flying' >Flying</option>
                            <option value='ghost' >Ghost</option>
                            <option value='grass' >Grass</option>
                            <option value='ground' >Ground</option>
                            <option value='ice' >Ice</option>
                            <option value='normal' >Normal</option>
                            <option value='poison' >Poison</option>
                            <option value='psychic' >Psychic</option>
                            <option value='rock' >Rock</option>
                            <option value='steel' >Steel</option>
                            <option value='water' >Water</option>

                        </select>
                    </div>

                    
                    {/* MOCKMON TYPE 2 */}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='type_2'>Type 2 (optional)</label>
                        <select className='form-control' id='type_2' name='type_2'  defaultValue={data.pokemon.type_2}>
                            <option value=''></option>
                            <option value='bug' >Bug</option>
                            <option value='dark' >Dark</option>
                            <option value='dragon' >Dragon</option>
                            <option value='electric' >Electric</option>
                            <option value='fight' >Fight</option>
                            <option value='fire' >Fire</option>
                            <option value='flying' >Flying</option>
                            <option value='ghost' >Ghost</option>
                            <option value='grass' >Grass</option>
                            <option value='ground' >Ground</option>
                            <option value='ice' >Ice</option>
                            <option value='normal' >Normal</option>
                            <option value='poison' >Poison</option>
                            <option value='psychic' >Psychic</option>
                            <option value='rock' >Rock</option>
                            <option value='steel' >Steel</option>
                            <option value='water' >Water</option>
                        </select>
                    </div>

                    {/* ABILITY*/}
                    <div className='form-group col-sm-4'>
                        <label htmlFor='ability'>Ability</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='ability' name='ability'  
                        defaultValue={data.pokemon.ability}
                        maxLength='20' type='text'
                        required
                         />
                    </div>

                    {/* DEX ENTRY*/}
                    <div className='form-group'>
                        <label htmlFor='dex_entry'>Dex Entry</label>
                        <textarea cols='3' rows='3' 
                        className='form-control' id='dex_entry' name='dex_entry'
                        defaultValue={data.pokemon.dex_entry}
                        />
                    </div>

                    {/* Move 1 */}
                    <div className='form-group col-sm-3'>
                        <label htmlFor='move_1'>Move #1</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='move_1' name='move_1'  
                        defaultValue={data.pokemon.move_1}
                        maxLength='20' type='text'
                        required
                        />
                    </div>
                    {/* Move 2 */}
                    <div className='form-group col-sm-3'>
                        <label htmlFor='move_2'>Move #2</label>
                        <span className="required-field">*</span>
                        <input className='form-control' id='move_2' name='move_2'  
                        defaultValue={data.pokemon.move_2}
                        maxLength='20' type='text'
                        required
                        />
                    </div>
                    {/* Move 3 */}
                    <div className='form-group col-sm-3'>
                        <label htmlFor='move_3'>Move #3</label>
                        <input className='form-control' id='move_3' name='move_3'  
                        maxLength='20' type='text'
                        defaultValue={data.pokemon.move_3}/>
                    </div>
                    {/* Move 4 */}
                    <div className='form-group col-sm-3'>
                        <label htmlFor='move_4'>Move #4</label>
                        <input className='form-control' id='move_4' name='move_4'  
                        maxLength='20' type='text'
                        defaultValue={data.pokemon.move_4}/>


                </div>
                
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