const React = require('react')
const { FLOAT } = require('sequelize')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      {/* Bootstrap CDN link */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/style.css"/>
      {/* <link rel="shortcut icon" type="image/jpg" href="images/small-shark-favicon.jpeg"/> */}
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1>AgNET</h1>
          <nav>
            <a href='/'> <i></i> AgNET </a>
            <a href='/Livestock'> Livestock </a>
            <a href='/About'> About AgNet </a>
            <a href='/Contact'> Contact Us </a>
            <div style={{float: 'right'}}>
              <a href='/Login' style={{marginRight: 10}}> Login</a>
              <a href='/Register' > Sign Up</a>
            </div>

          </nav>
        </header>
        <div id="info">
          {/* <h2>This is just a placeholder.</h2> */}
        </div>
        <div className="container">
          {html.children}
        </div>
        <footer>
          <p>Milestone Project 3: Final Project</p>
          <ul><b><u>Project Creator:</u></b>
            <li>Tim Schultejans</li>
            </ul>
        </footer>
      </div>
    </body>
    </html>
  )
}

module.exports = Default


        {/* <header>
          <h1><a>AgNet</a></h1>
        </header> */}