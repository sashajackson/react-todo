import React, {Component} from 'react'

class Alert extends Component {


    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <div style={alertText} className="alert" role="alert">
                        Planning with friends, for fun.
                    </div>
                </div>
            </div>
        )
    }
}

const alertText = {
    textAlign: "center",
    color: "white",
    background: "#4c4c4c",
    borderRadius: "0",
    marginBottom: "0",
}

export default Alert