// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function livestock(){
    return (
        <Def>
            <main>
                <h1>LIVESTOCK</h1>
                <div>
                    <a href='/cattleHerds/herdList'><i className="fa-solid fa-dragon" aria-hidden="true"></i> CATTLE from livestock</a>

                    <a href='/swineHerds/herdList'><i className="fa-solid fa-dragon" aria-hidden="true"></i> SWINE</a>

                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = livestock