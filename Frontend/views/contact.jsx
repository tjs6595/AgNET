// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function home(){
    return (
        <Def>
            <main>
                <div>
                    <h1>Thanks for visiting!</h1>
                    <h2>This page is under construction.</h2>
                    <h3>Please check back soon!</h3>
                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = home