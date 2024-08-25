// DEPENDENCIES
const React = require('react');
const Def = require('../default');

// function cattleHerds(data){
function register(){
    return (
        <Def>
        <main>
          <h2> SIGN UP </h2>
          <form action="/register" method="POST">
            <div>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" ></input>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" ></input>
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required></input>
            </div>
            <button type="submit">Sign Up</button>
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
module.exports = register