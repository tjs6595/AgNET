// DEPENDENCIES
const React = require('react');
const Def = require('../default');

function cattleHerds(data){
    //formats data into HTML so page can display it

    let cattleHerdsFormatted = data.cattle.map((cattle) => {
        return (
            <div className='col-sm-4' style={{margin: '15px 0px 15px 0px '}}>
                <h3><a href={`/cattleHerds/${cattleherds.id}`}>
                    {cattleherds.name}
                </a></h3>
                <img className='mockImg' src={pokemon.image} alt={pokemon.name}></img>
                <img src={pokemon.sprite} alt={pokemon.sprite}></img>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>CATTLE HERDS</h1>
                <div className='row'>
                {cattleHerdsFormatted}  
                </div>   
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = cattleHerds