import React, { Component } from 'react'

class Dashboard extends Component {


render(){
    return (
        <div className="container">
            <div style={{paddingLeft: "20px"}}className="row">
                <div className="col-6">
                    <p style={titleStyle}>Groups</p>
                </div>
                <div className="col-6">
                    <button style={notificationStyle} type="button" className="btn">
                        New Tasks <span style={badgeStyle} className="badge bg-secondary">1</span>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://images.pexels.com/photos/4039452/pexels-photo-4039452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p style={groupTitle}>Home Duties</p>
                </div>
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://images.pexels.com/photos/5796567/pexels-photo-5796567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p style={groupTitle}>Atlanta Trip</p>
                </div>
                <div className="col-4">
                    <img style={imgStyle} alt='' src="https://resizeimage.net/mypic/wRJ20KHTXpaURj7G/LzXTC/pexels-marlene-leppa--nen-1426.png" />
                    <p style={groupTitle}>Saturday Night</p>
                </div>
            </div>
            <div className="row">
                <div style={{padding: 0}} className="col-12">
                    <div className="card">
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
        
    )
}

}

const titleStyle = {
    fontFamily: 'Trispace',
    fontSize: '22px',
    marginTop: "2em",
}
const notificationStyle = {
    marginTop: "2em", 
    float: "right", 
    background: "white",
    fontFamily: 'Trispace',
}
const groupTitle = {
    textAlign: "center",
    marginTop: "10px",
}
const imgStyle = {
    borderRadius: '30px',
    width: "120px",
    height: "100px"
}

const badgeStyle = {
    borderRadius: "30px"
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