const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            {/* <h1>Show Page</h1> */}
            <div>
                <h3 style={{fontWeight:'Bold', fontSize: '75px'}}><a href={`/mockmon/${data.pokemon.id}`}>
                    {data.pokemon.species}
                </a></h3>
                <img className='mockImg' src={data.pokemon.image} alt={data.pokemon.name}></img>
            </div>
            <div className='stripeTest' style={{display: 'inline-block', textAlign: 'left', 
            margin: '10px', padding: '10px',
            borderLeftStyle: 'solid', borderWidth: '5px', borderColor: '#c24242', boxShadow: 'rgba(0, 0, 0, 0.5) 1.95px 1.95px 2.6px',
            backgroundColor: "#79a0c9", width:"300px"}}>
                <p><span style={{fontWeight:'Bold'}}>Lv. </span>{data.pokemon.level}</p>
                <p><span style={{fontWeight:'Bold'}}>Type(s):</span></p>
                <p>{data.pokemon.type_1}</p> 
                <p>{data.pokemon.type_2} </p>
                <p><span style={{fontWeight:'Bold'}}>Ability: </span>{data.pokemon.ability}</p>
                <p><span style={{fontWeight:'Bold'}}>Entry: </span>{data.pokemon.dex_entry}</p>
                <p><span style={{fontWeight:'Bold'}}>Hit Points: </span>{data.pokemon.hit_points}</p>
                <p><span style={{fontWeight:'Bold'}}>Defense: </span>{data.pokemon.defense}</p>
                <p><span style={{fontWeight:'Bold'}}>Move(s): </span>
                    <p>{data.pokemon.move_1}</p>
                    <p>{data.pokemon.move_2}</p>
                    <p>{data.pokemon.move_3}</p>
                    <p>{data.pokemon.move_4}</p>
                </p>
            </div>
            <div style={{margin: '15px'}}>
            <img src={data.pokemon.sprite} alt={data.pokemon.sprite}></img>
            </div>

            {/* BUTTONS */}
                <div>
                    <div style={{display: 'inline-flex',}}>
                    {/* EDIT BUTTON */}
                    <a href={`/mockmon/${data.pokemon.id}/edit`} className='btn btn-success btn-lg' style={{marginRight: '15px'}}>
                        Edit
                    </a>

                    {/* DELETE BUTTON */}
                    <form method='POST' action={`/mockmon/${data.pokemon.id}?_method=DELETE`}>
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
