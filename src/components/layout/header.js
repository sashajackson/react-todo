import React, {Component} from 'react' 
import {createBrowserHistory } from 'history'
import {Link} from 'react-router-dom'
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
          <a style={brandStyle} className="navbar-brand" href="/">
            <img style={logo} src="https://projectsbucketsj.s3.us-east-2.amazonaws.com/image_6487327-removebg-preview.png"/>
          </a>
          <div class="">
            <form class="container-fluid justify-content-end">
              <Link to='/signIn' class="btn btn-success me-2" type="button">Login</Link>
              <Link to='/signup' class="btn btn-secondary" type="button">Register</Link>
            </form>
          </div>
      </div>
      </nav>
      )
    }
}
const logo = {
  height: '50px',
  width: 'auto',
}
const containerStyle = {
  paddingLeft: '0'
}

const headerStyle =  {
    color: 'ghostwhite',
    padding: '10px',
    textAlign: 'center',
    background: 'black',
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