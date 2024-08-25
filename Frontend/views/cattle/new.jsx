const React = require('react')
const Def = require('../default')

// pass in new data
function newForm (data) {



    return (
        <Def>
            <main>
                <h1>Add New Cattle </h1>
                {/* <form method="POST" action={`/Livestock/Cattle/HerdList/${data.cattleHerd.id}/Cattle/New`}> */}
                {console.log(data)}
                <form method="POST" action={`/Livestock/Cattle/HerdList/Cattle/New`}>
                    <div className='form-group'>
                        <label htmlFor="tag_id">Tag Number:</label>
                        <input className='form-control' id="tag_id" name="tag_id" required />
                        <label htmlFor="name"> Name </label>
                        <input className='form-control' id="name" name="name" required />
                        <label htmlFor="species"> Species </label>
                        <input className='form-control' id="species" name="species"/>
                    </div>
                    <input className='btn btn-warning btn-lg' type="submit" value="Add" style={{fontWeight: 'bold', fontSize: 15}}/>
                </form>
            </main>
        </Def>
    )
}

module.exports = newForm