import React from 'react' 
import './header.css'

function Header(){
    return (
        <div>
<nav className="navbar" style={headerStyle}>
  <div className="container-fluid">
    <a style={brandStyle} className="navbar-brand" href="http://localhost:3000/">GroupList</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul style={ulStyle} className="navbar-nav">
        <li className="nav-item">
          <a style={aStyle} className="nav-link active" aria-current="page" href="http://localhost:3000/"><span style={ulIcon}><i className="fad fa-home-lg-alt"></i></span> Home</a>
        </li>
        <li className="nav-item">
          <a style={aStyle} className="nav-link" href="http://localhost:3000/"><span style={ulIcon}><i className="fad fa-users"></i></span> Groups</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
        </div>
    )
}

const headerStyle =  {
    color: 'ghostwhite',
    padding: '10px',
    textAlign: 'center',
    margin: '13px',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const ulStyle = {
    float: 'left',
    color: 'ghostwhite !important'
}

const menuIcon = {
    fontSize: '30px',
    color: 'black',
}

const brandStyle = {
    color: 'ghostwhite',
    background: 'black',
    borderRadius: '20em',
    padding: '10px',
    fontFamily: 'Trispace'
}

const aStyle = {
  textAlign: "left",
  color: 'black',
  fontFamily: 'Trispace',
}

const ulIcon = {
  color: 'black',
}

export default Header;