import React, {Component} from 'react'

class SignIn extends Component {

    render(){
        return (
            <div style={rowStyle} className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div style={cardStyle} className="card">
                        <h5 style={{textAlign: "center"}}className="card-title">Sign In Console</h5>
                        <input style={inputStyle} type="text" id="email" name="email" placeholder="enter email"></input>
                        <input style={inputStyle} type="text" id="password" name="password" placeholder="enter password"></input>
                        <button style={btnStyle} className="btn">Submit</button>

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
