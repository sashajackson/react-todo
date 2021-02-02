import React, {Component} from 'react' 
import {createBrowserHistory } from 'history'
import './header.css'

class Header extends Component {
  _history = createBrowserHistory({forceRefresh: true});
  display = 'Login';
  isAuth = () => {
      if(localStorage.getItem('isAuth')){
        console.log('page should be changed now');
          this._history.push('/dashboard');
          this.display = 'Dashboard';
      } else {
        this._history.push('/signIn');
        this.display = 'Sign In'
      }
  }
  


    render(){

      return (
        <nav className="navbar" style={headerStyle}>
        <div style={containerStyle} className="container-fluid">
          <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul style={ulStyle} className="navbar-nav">
              <li className="nav-item">
                <a style={aStyle} className="nav-link active" href="/" aria-current="page"><span style={ulIcon}><i className="fad fa-home-lg-alt"></i></span> Home </a>
              </li>
              <li className="nav-item">
                <a style={aStyle} className="nav-link" onClick={this.isAuth}><span style={ulIcon}><i className="fad fa-sign-in-alt"></i></span> {this.display} </a>
              </li>
              <li className="nav-item">
                <a style={aStyle} className="nav-link" href="/"><span style={ulIcon}><i className="fad fa-users"></i></span> Groups</a>
              </li>
            </ul>
          </div>
      
        </div>
      </nav>
      )
    }
}

const containerStyle = {
  paddingLeft: '0'
}

const headerStyle =  {
    color: 'ghostwhite',
    padding: '10px',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #7f5fff, #7f5fff, #5f8fff, #5f8fff)',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
};

const ulStyle = {
    float: 'left',
    color: 'ghostwhite !important'
}

const menuIcon = {
    fontSize: '30px',
    color: 'ghostwhite',
}

const brandStyle = {
    color: 'ghostwhite',
    background: '#4c4c4c',
    background: 'transparent',
    borderRadius: '20em',
    padding: '10px',
    fontFamily: 'Trispace',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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