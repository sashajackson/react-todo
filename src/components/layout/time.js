import React, {Component} from 'react'
import moment from 'moment'

class Time extends Component {
    render(){
        return (
            <div className="row">
                
                <div className="col-6">
                    <div style={dayStyle}>
                        <h5>{moment().format('dddd')}</h5>
                    </div>
                </div>

                <div className="col-6">
                    <div style={timeStyle}>
                        <h5>{moment().format('LT')}</h5>
                    </div>
                </div>

                
            </div>
        )
    }
}

const dayStyle = {
    textAlign: "left",
    marginTop: "2em",
    margin: "20px",
}
const timeStyle = {
    textAlign: "right",
    marginTop: "2em",
    margin: "20px",
}

export default Time