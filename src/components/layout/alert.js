import React, {Component} from 'react'

class Alert extends Component {


    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <div style={alertText} className="alert" role="alert">
                        {this.props.user.username}
                    </div>
                </div>
            </div>
        )
    }
}

const alertText = {
    textAlign: "center",
    color: "ghostwhite",
    background: "black",
    borderRadius: "0"
}

export default Alert