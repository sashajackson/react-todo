import React, {Component} from 'react'
import moment from 'moment'

class Time extends Component {

    state = {
        day: moment().format('dddd'),
        time: moment().format('LT'),
    }

    startTimer = () => {
        setInterval(() => {
            this.setState({
                day: moment().format('dddd'),
                time: moment().format('LT'),
            })
        }, 1000);
    }

    render(){
        this.startTimer();
        return (
            <div className="row">
                
                <div className="col-6">
                    <div style={dayStyle}>
                        <h5 style={{marginBottom: "0"}}>{moment().format('dddd')}</h5>
                    </div>
                </div>

                <div className="col-6">
                    <div style={timeStyle}>
                        <h5 style={{marginBottom: "0"}}>{moment().format('LT')}</h5>
                    </div>
                </div>

                
            </div>
        )
    }
}

const dayStyle = {
    textAlign: "center",
    marginTop: "2em",
    margin: "20px",
    background: "white",
    padding: "10px",
    borderRadius: "30px",
}
const timeStyle = {
    textAlign: "center",
    marginTop: "2em",
    margin: "20px",
    background: "white",
    padding: "10px",
    borderRadius: "30px",
}

export default Time