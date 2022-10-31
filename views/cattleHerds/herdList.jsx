// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// function cattleHerds(data){
function cattleHerds(data){
    //formats data into HTML so page can display it
    let cattleHerdsFormatted = data.cattleHerd.map((cattleHerd) => {
        return (
            <div className='col-sm-6' style={{margin: '15px 0px 15px 0px '}}>
                <h2>
                    <a href={`./HerdList/${cattleHerd.id}`}>
                        {cattleHerd.name}
                    </a>
                </h2>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>CATTLE HERDS</h1>
                <div className='row' style={{display: 'inline-flex'}}>
                    {cattleHerdsFormatted}  
                </div>
                <div>
                {/* BUTTONS */}
                    <div>
                        <div style={{display: 'inline-flex',}}>
                        {/* NEW BUTTON */}
                            <div>
                                <a href={`./HerdList/new`} className='btn btn-warning  btn-lg' style={{fontWeight: 'bold', fontSize: 15}}> Add New Herd </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = cattleHerds
