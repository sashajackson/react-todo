import React, {Component} from 'react'
import {createBrowserHistory } from 'history'
import axios from 'axios'

class SignUp extends Component {
    _history = createBrowserHistory({forceRefresh: true});

    // addUser = () => {
    //     let email = document.getElementById('saveEmail').value;
    //     let password = document.getElementById('savePassword').value;
    //     let username = document.getElementById('saveUsername').value;
    //     console.log(username);

    //     if(email && password && username){
    //         let obj = {
    //             u: username,
    //             e: email,
    //             p: password,
    //         }
    //         axios
    //             .post('/signup', obj)
    //                 .then(result => {
    //                     localStorage.setItem('isAuth', 'true');
    //                     this._history.push('/dashboard')
    //                 });
    //     } else {
    //         console.log('must enter username, email and password');
    //     }
    // }

    render(){
        return (
            <div style={rowStyle} className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div style={cardStyle} className="card">
                    <h5 style={{textAlign: "center"}}className="card-title">Sign Up</h5>
                    <input style={inputStyle} type="text" id="saveUsername" name="username" placeholder="enter username"></input>
                    <input style={inputStyle} type="text" id="saveEmail" name="email" placeholder="enter email"></input>
                    <input style={inputStyle} type="text" id="savePassword" name="password" placeholder="create password"></input>
                    <button style={btnStyle} className="btn" onClick={this.props.addUser}>Submit</button>
                    <p style={pStyle}>or <a>Login</a></p>

                </div>
            </div>
            <div className="col-2"></div>
        </div>
        )
    }
}
const inputStyle = {
    margin: "20px 0",
    borderRadius: "30px",
    height: "50px",
    border: "none",
    background: "#f4f4f4",
    paddingLeft: "20px"
}

const cardStyle = {
    padding: "20px",
    background: "f4f4f4",
}

const btnStyle = {
    background: "black",
    color: "ghostwhite"
}

const rowStyle = {
    paddingTop: "2em",
}

const pStyle = {
    textAlign: "center",
    marginTop: "1em"
}

export default SignUp