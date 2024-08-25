// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function livestock(){
    return (
        <Def>
            <main>
                <h2>LIVESTOCK</h2>
                <div style={{display: "block"}}>
                    <a  className='livestockmenulist' href='Livestock/Cattle/HerdList'><i></i> CATTLE</a>
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = livestock