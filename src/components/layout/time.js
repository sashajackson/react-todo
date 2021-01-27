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
                
                <div className="col-7">
                    <div style={dayStyle}>
                        <h5 style={{marginBottom: "0"}}>{moment().format('dddd')}</h5>
                    </div>
                </div>

                <div className="col-5">
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
    margin: "15px 0",
    marginLeft: "20px",
    background: "white",
    padding: "10px",
    borderRadius: "30px",
}
const timeStyle = {
    textAlign: "center",
    margin: "15px 0",
    marginRight: "20px",
    background: "white",
    padding: "10px",
    borderRadius: "30px",
}

export default Time