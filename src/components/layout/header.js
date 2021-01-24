import React from 'react' 

function Header(){
    return (
        <div>
<nav className="navbar" style={headerStyle}>
  <div className="container-fluid">
    <a style={brandStyle} className="navbar-brand" href="http://localhost:3000/">eTodo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul style={ulStyle} className="navbar-nav">
        <li className="nav-item">
          <a style={{textAlign: "left"}} className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
        </li>
        <li className="nav-item">
          <a style={{textAlign: "left"}} className="nav-link" href="http://localhost:3000/">Features</a>
        </li>
        <li className="nav-item">
          <a style={{textAlign: "left"}} className="nav-link" href="http://localhost:3000/">Pricing</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
        </div>
    )
}

const headerStyle =  {
    background: 'dodgerblue',
    color: 'ghostwhite',
    padding: '10px',
    textAlign: 'center'
};

const ulStyle = {
    float: 'left',
    color: 'ghostwhite'
}

const menuIcon = {
    fontSize: '30px',
    color: 'ghostwhite',
}

const brandStyle = {
    color: 'ghostwhite',
    background: 'black',
    borderRadius: '20em',
    padding: '10px'
}

export default Header;