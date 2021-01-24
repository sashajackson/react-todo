import React, {Component} from 'react'
import moment from 'moment'

class Time extends Component {
    render(){
        return (
            <div style={timeStyle}>
            <h5>{moment().format('dddd')}</h5>
            <h5>{moment().format('LT')}</h5>
            </div>
        )
    }
}

const timeStyle = {
    textAlign: "center",
    marginTop: "1em",
}

export default Time