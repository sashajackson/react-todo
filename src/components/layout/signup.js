import React, {Component} from 'react'
import {createBrowserHistory } from 'history'


class SignUp extends Component {
    _history = createBrowserHistory({forceRefresh: true});


    render(){
        return (
            <div style={rowStyle} className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div style={cardStyle} className="card">
                    <h5 style={{textAlign: "center"}}className="card-title">Sign Up</h5>
                    <input style={inputStyle} type="text" id="saveUsername" name="username" placeholder="enter username"></input>
                    <input style={inputStyle} type="text" id="saveEmail" name="email" placeholder="enter email"></input>
                    <input style={inputStyle} type="password" id="savePassword" name="password" placeholder="create password"></input>
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