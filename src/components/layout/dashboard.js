import React, { Component } from 'react'
import {createBrowserHistory } from 'history'


class Dashboard extends Component {
_history = createBrowserHistory({forceRefresh: true});

changePage = () => {
    this._history.push("/creategroup")
 }

render(){
    
    return (
        <div>
            <div style={headerRow} className="row">
                <div className="col-6">
                    <i style={iStyle} className="fab fa-twitter"></i> 
                    <i style={iStyle1} className="fab fa-facebook"></i> 
                    <i style={iStyle1} className="fas fa-envelope"></i>
                </div>
                <div style={liFloatRight} className="col-6">
                    8:34 PM
                </div>
            </div>

        <div className="container">

            {/* <div className="row">
                <div className="col-12 p-0">
                <ul className="list-group list-group-horizontal-sm">
                    <li style={liFloatRight} className="list-group-item pull-left"><i style={iStyle} className="fab fa-twitter"></i> <i style={iStyle1} className="fab fa-facebook"></i> <i style={iStyle1} className="fas fa-envelope"></i></li>
                    <li style={liFloatLeft} className="list-group-item pull-right">Leave feedback and suggestions!</li>
                </ul>                    
                </div>
            </div> */}

            <div style={parentRow1Style} className="row">

                <div className="col-6">
                    <button style={notificationStyle2} type="button" className="btn" onClick={this.changePage}>
                        <i style={createStyle} className="fas fa-plus-circle"></i> Create
                    </button>
                </div>

                <div className="col-6">
                    <button style={notificationStyle} type="button" className="btn">
                        <span style={badgeStyle} className="badge">1</span> Alert
                    </button>
                </div>
            </div>
            <div style={secondRowStyle} className="row">
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://images.pexels.com/photos/4039452/pexels-photo-4039452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p style={groupTitle}>house stuff</p>
                </div>
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://images.pexels.com/photos/5796567/pexels-photo-5796567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p style={groupTitle}>work</p>
                </div>
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p style={groupTitle}>vacation</p>
                </div>
            </div>
            <div style={{marginTop: "1em"}} className="row">
                <div style={{}} className="col-12">
                    <div style={cardStyle} className="card">
                    <h5 className="card-title" style={taskTitleStyle}>Task Activity</h5>
                        <div className="card-body">
                            <h1 style={taskTrackStyle}><i style={checkStyle} className="fad fa-check"></i> Lee reserved the Airbnb <span style={groupList}>for Atlanta Trip</span></h1>
                            <h1 style={taskTrackStyle}><i style={checkStyle} className="fad fa-check"></i> Ashley washed the dishes <span style={groupList}>for Home Duties</span> </h1>
                            <h1 style={taskTrackStyle}><i style={checkStyle} className="fad fa-check"></i> Joshua took out the trash <span style={groupList}>for Home Duties</span></h1>
                            <h1 style={taskTrackStyle}><i style={checkStyle} className="fad fa-check"></i> Tammy prepped the food <span style={groupList}>for Saturday Night</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

}

const headerRow = {
    padding: "20px"
}

const liFloatRight = {
    textAlign: "right",
    fontFamily: 'Trispace',
    fontSize: '20px',
}
const liFloatLeft = {
    float: "left",
    textAlign: "center"
}

const iStyle = {
    fontSize: "20px"
}
const iStyle1 = {
    fontSize: "20px",
    marginLeft: "30px"
}

const alertText = {
    textAlign: "center",
    color: "white",
    background: "#4c4c4c",
    borderRadius: "0",
    marginBottom: "0",
}

const parentRow1Style = {
    // marginTop: "2em",
    paddingTop: "1.5em",
    borderTop: "1px solid #5f8fff",
    // background: 'linear-gradient(45deg, #ffcf5f, #5f8fff)',
    background: "#92b3ff",
}

const secondRowStyle = {
    paddingTop: "1em",
    paddingBottom: "10px",
    background: "#7f5fff",
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
}
const cardStyle = {
    paddingTop: "20px",
    background: "linear-gradient(white, #7f5fff)",
    background: "white",
}
const createStyle = {
    fontSize: "20px",
    color: "green",
}

const titleStyle= {
    fontFamily: 'Trispace',
    fontSize: '22px',
    marginTop: "2em",
}
const taskTitleStyle = {
    fontFamily: 'Trispace',
    fontSize: '22px',
    marginTop: "1em",
    paddingLeft: "20px",
    textAlign: "center",
    color: "#7f5fff",
    
}
const notificationStyle = {
    float: "left",
    marginBottom: "1em",
    background: "white",
    fontFamily: 'Trispace',
}
const notificationStyle2 = {
    float: "right",
    marginBottom: "1em",
    background: "white",
    fontFamily: 'Trispace',
}
const groupTitle = {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "0",
}
const imgStyle = {
    borderRadius: '30px',
    width: "120px",
    height: "100px"
}

const badgeStyle = {
    borderRadius: "30px",
    background: "red",
}

const taskTrackStyle = {
    marginBottom: "1em",
    fontSize: "18px",
    fontWeight: "bold",
}

const checkStyle = {
    color: "green"
}

const groupList = {
    fontStyle: "italic",
    fontWeight: "100"
}

export default Dashboard