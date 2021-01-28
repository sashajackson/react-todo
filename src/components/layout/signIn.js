import React, {Component} from 'react'
import {createBrowserHistory } from 'history'

class SignIn extends Component {
    _history = createBrowserHistory({forceRefresh: true});

    redirect = () => {
        this._history.push('/signup');
    }

    render(){
        return (
            <div style={rowStyle} className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div style={cardStyle} className="card">
                        <h5 style={{textAlign: "center"}} className="card-title">Sign In Console</h5>
                        <input style={inputStyle} type="text" id="email" name="email" placeholder="enter email"></input>
                        <input style={inputStyle} type="text" id="password" name="password" placeholder="enter password"></input>
                        <button style={btnStyle} className="btn" onClick={this.props.submitSignIn}>Submit</button>
                        <p>or <a onClick={this.redirect}>Sign Up</a></p>

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

export default SignIn
