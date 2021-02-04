import React, { Component } from 'react'
import {createBrowserHistory } from 'history'
import GroupPage from './groupPage'
import './dashboard.css'



class Dashboard extends Component {
_history = createBrowserHistory({forceRefresh: true});

constructor(){
    super()
    this.state = {
        groups: []
    }
}

changePage = () => {
    this._history.push("/creategroup")
 }

 signOut = () => {
     localStorage.removeItem('isAuth');
     localStorage.removeItem('fx');
 }

render(){
    
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar" style={headerStyle}>
                        <div style={containerStyle} className="container-fluid">
                            <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
                            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
                            </button> */}
                            <ul className="navbar-nav d-flex flex-row">
                                {/* <li style={iconMenuStyle} className="nav-item"><i className="fal fa-home-lg-alt"></i></li> */}
                                {/* <li style={iconMenuStyle} className="nav-item"><i className="fas fa-random"></i></li> */}
                                {/* <li style={iconMenuStyle} className="nav-item"><i className="fal fa-bell"></i></li> */}
                                <li style={userStyle} className="nav-item"><i className="fas fa-user-circle userCircle"></i></li>
                            </ul>
                            {/* <div className="collapse navbar-collapse" id="navbarNav">
                                <ul style={ulStyle} className="navbar-nav">
                                    <li className="nav-item">
                                        <a style={aStyle} className="nav-link active" href="/" aria-current="page"><span style={ulIcon}><i className="fad fa-home-lg-alt"></i></span> Home </a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={aStyle} className="nav-link" onClick={this.isAuth} data-bs-toggle="modal" data-bs-target="#exampleModal"><span style={ulIcon}><i className="fad fa-search"></i></span> Find friends</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={aStyle} className="nav-link" href="/groups"><span style={ulIcon}><i className="fad fa-users"></i></span> Groups</a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={aStyle} onClick={this.signOut} className="nav-link" href="/"><span style={ulIcon}><i className="fad fa-sign-out-alt"></i></span> Logout</a>
                                    </li>
                                </ul>
                            </div> */}
      
                        </div>
                    </nav>
                </div>
            </div>

            {/* <div style={headerRow} className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <i style={iStyle} className="fab fa-twitter"></i> 
                    <i style={iStyle1} className="fab fa-facebook"></i> 
                    <i style={iStyle1} className="fas fa-envelope"></i>
                </div>
                <div style={liFloatRight} className="col-6">
                    8:34 PM
                </div>
            </div> */}

        <div className="container">

            {/* <div style={parentRow1Style} className="row">

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
            </div> */}
            <div style={secondRowStyle} className="row sticky-top">
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
            {/* <div style={{marginTop: "1em"}} className="row">
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
            </div> */}
            <GroupPage />
            <div style={parentRow1Style} className="row fixed-bottom">

                <div className="col-12">
                    <nav className="navbar">
                    <ul style={{marginLeft:"30px"}} className="navbar-nav d-flex flex-row">

                    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-home-lg-alt"></i></li>
                    <li style={iconMenuStyle} className="nav-item" onClick={this.changePage}>
                        <i style={createStyle} className="fal fa-plus-circle"></i> 
                    </li>
                    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-search"></i></li>
                    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-bell"></i></li>
                    <li style={iconMenuStyle} className="nav-item" onClick={this.signOut}>
                        <span style={ulIcon}><i className="fad fa-sign-out-alt"></i></span>
                        {/* <a style={aStyle} onClick={this.signOut} className="nav-link" href="/"><span style={ulIcon}><i className="fad fa-sign-out-alt"></i></span> Logout</a> */}
                    </li>

                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <GroupPage /> */}

        {/* modal */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Find friends</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button style={modalStyle} className="btn" type="submit">Search</button>
      </form>
      </div>
    </div>
  </div>
</div>
        </div>
        
    )
}

}

const headerRow = {
    padding: "20px",
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
}

const liFloatRight = {
    textAlign: "right",
    fontFamily: 'Trispace',
    fontSize: '20px',
}

const iStyle = {
    fontSize: "20px"
}
const iStyle1 = {
    fontSize: "20px",
    marginLeft: "30px"
}


const parentRow1Style = {
    background: "white",
    border: "1px solid #f4f4f4",
}

const secondRowStyle = {
    paddingTop: "1em",
    paddingBottom: "10px",
    background: "white",
    // background: "#efffaf",
    // boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    
}
const cardStyle = {
    paddingTop: "20px",
    background: "white",
}
const createStyle = {
    // fontSize: "30px",
    color: "#7f5fff",
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
    fontFamily: 'Trispace',
    background: "white",
    // boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
}
const notificationStyle2 = {
    marginBottom: "1em",
    fontFamily: 'Trispace',
    background: "white",
    // boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px',
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

//navbar style
const containerStyle = {
    paddingLeft: '0'
  }
  
  const headerStyle =  {
      color: '#7f5fff',
      padding: '1em 10px 1em 10px',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #7f5fff, #7f5fff, #5f8fff, #5f8fff)',
      background: 'white',
  };

  const iconMenuStyle = {
      color: "#7f5fff",
      marginRight: '50px',
      fontSize: '30px',
      display: "inline-block",
      boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px"
  }
  const userStyle = {
      fontSize: '30px'
  }
  
  const ulStyle = {
      float: 'left',
      color: '#7f5fff !important'
  }
  
  const menuIcon = {
      fontSize: '30px',
      color: '#7f5fff',
      textDecoration: 'none',
  }
  
  const brandStyle = {
      color: '#7f5fff',
      background: 'transparent',
      borderRadius: '10px',
      padding: '10px',
      fontFamily: 'Trispace',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  }
  
  const aStyle = {
    textAlign: "left",
    color: '#7f5fff',
    fontFamily: 'Trispace',
  }
  
  const ulIcon = {
    color: '#7f5fff',
  }

  const modalStyle = {
      border: "1px solid #7f5fff"
  }

export default Dashboard