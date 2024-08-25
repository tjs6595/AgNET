// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// function cattleHerds(data){
function login(){
    return (
        <Def>
        <main>
          <h2> LOGIN </h2>
          <form action="/login" method="POST">
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">LOGIN</button>
          </form>
          <div>
            {/* BUTTONS */}
              <div >
                {/* BACK TO HOME BUTTON */}
                  <div>
                    <a href={`/`} className='btn btn-success btn-lg' >
                      BACK TO THE HOME SCREEN
                    </a>
                  </div>
              </div>
          </div>
        </main>
        </Def>
    )
}

// EXPORTS
module.exports = login