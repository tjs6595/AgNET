const React = require('react')

function Default(html) {
  return (
    <html>
    <head>
      <title>{html.title || 'Default'}</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
      <link rel="stylesheet" href="/style.css"/>
      <link rel="shortcut icon" type="image/jpg" href="images/small-shark-favicon.jpeg"/>
    </head>
    <body>
      <div className="wrapper">
        <header>
          <h1>AgNET</h1>
          <nav>
            <a href='/'> <i className="fa fa-gamepad" aria-hidden="true"></i> AgNET</a>
            <a href='/Livestock'> <i className="fa fa-gamepad" aria-hidden="true"></i> Livestock</a>
            {/* <a href='/livestock/cattleList'><i className="fa fa-question-circle" aria-hidden="true"></i> Cattle Herds</a> */}
            {/* <a href='/livestock/cattleHerds/cattle'><i className="fa fa-question-circle" aria-hidden="true"></i> Cattle</a>
            <a href='/livestock/swineHerds'><i className="fa-solid fa-fire" aria-hidden="true"></i> Swine Herds</a>
            <a href='/livestock/swineHerds/swine'><i className="fa-solid fa-dragon" aria-hidden="true"></i> Swine</a> */}
          </nav>
        </header>
        <div id="info">
          <h2>This is just a placeholder.</h2>
        </div>
        {/* <header>
          <h1><a>AgNet</a></h1>
        </header> */}
        <div className="container">
          {html.children}
        </div>
      </div>
    </body>
    </html>
  )
}

module.exports = Default


