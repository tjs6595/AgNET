// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function home(){
    return (
        <Def>
            <main>
                <div>
                    <img src={'./images/CountrysideFarm.jpg'} alt="CountrysideFarm" width="700" height="440" />
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = home
