import React, { Component, useState } from 'react'
import { storage } from './firebase/fbconfig'
import { Link } from 'react-router-dom'

class CreateGroup extends Component {

constructor(props){
    super(props)
    this.state = {
        image: null,
    }
}

handleChange = (e) => {
    if(e.target.files[0]){
        this.setState({
            image: e.target.files[0],
        })
    }
}

handleUpload = () => {
    const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
    uploadTask.on('state_changed', snapshot => {}, err => { console.log(err) }, () => {
        storage
            .ref("images")
                .child(this.state.image.name).getDownloadURL().then(url => { console.log(url) 
                
                    this.props.createGroup(url);
                });
    })
}


    render(){
        return (
            <div>

<div className="row">
                <div className="col-12">
                    <nav className="navbar" style={headerStyle}>
                        <div style={containerStyle} className="container-fluid">
                            <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul style={ulStyle} className="navbar-nav">
                                    <li className="nav-item">
                                        <a style={aStyle} className="nav-link active" href="/" aria-current="page"><span style={ulIcon}><i className="fad fa-home-lg-alt"></i></span> Home </a>
                                    </li>
                                    <Link to="/dashboard" className="nav-item">
                                    <i className="fad fa-sign-in-alt"></i> Dashboard
                                        {/* <a style={aStyle} className="nav-link" onClick={this.isAuth}><span style={ulIcon}><i className="fad fa-sign-in-alt"></i></span> Dashboard </a> */}
                                    </Link>
                                    <li className="nav-item">
                                        <a style={aStyle} className="nav-link" href="/"><span style={ulIcon}><i className="fad fa-users"></i></span> Groups</a>
                                    </li>
                                </ul>
                            </div>
      
                        </div>
                    </nav>
                </div>
            </div>

            <div style={headerRow} className="row">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <i style={iStyle} className="fab fa-twitter"></i> 
                    <i style={iStyle1} className="fab fa-facebook"></i> 
                    <i style={iStyle1} className="fas fa-envelope"></i>
                </div>
                <div style={liFloatRight} className="col-6">
                    8:34 PM
                </div>
            </div>



            <div style={{padding: "20px"}} className="row">

                <div style={{paddingTop: "30px"}} className="col-12">
                <div style={{padding: "20px"}} className="card">
                    <h5 style={{padding: "20px", textAlign: "center", fontFamily: 'Trispace',}} className="card-title">Don't forget to invite your friends!</h5>
                <div className="input-group">
                    <span className="input-group-text">Group Name</span>
                    <input id="groupTitle" type="text" aria-label="First name" className="form-control"/>
                    {/* <input id="groupFile" type="file" onChange={this.handleChange} /> */}
                </div>
                {/* <div style={{marginTop: "1em"}} className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Add Member</label>
                    <select defaultValue="1" className="form-select" id="inputGroupSelect01">
                        <option value="1">Choose..</option>
                        <option value="2">John</option>
                        <option value="3">Lisa</option>
                        <option value="4">Debrah</option>
                    </select>
                </div> */}

                <h5 style={{padding: "20px", textAlign: "center", fontFamily: 'Trispace',}} className="card-title">Add Task</h5>
                <div className="input-group mb-3">
                    {/* <span className="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" id="task1" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" id="task2" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>              
                </div>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" id="task3" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <div className="input-group mb-3">
                <input id="groupFile" type="file" onChange={this.handleChange} />
                {/* <button onClick={this.handleUpload}>Upload</button> */}
                </div>
                <button style={submitStyle} type="button" className="btn btn-primary" onClick={this.handleUpload} >Create Group</button>
        </div>
    </div>
     
</div>
</div>
        )
    }
}

//form style
const submitStyle = {
    background: "#7f5fff",
    border: "none",
}

//navbar style
const containerStyle = {
    paddingLeft: '0'
  }
  
const headerStyle =  {
      color: 'ghostwhite',
      padding: '1em 10px 1em 10px',
      textAlign: 'center',
      background: '#7f5fff',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  };
  
const ulStyle = {
      float: 'left',
      color: 'ghostwhite !important'
  }
  
const menuIcon = {
      fontSize: '30px',
      color: 'ghostwhite',
  }
  
const brandStyle = {
      color: 'ghostwhite',
      background: 'transparent',
      borderRadius: '20em',
      padding: '10px',
      fontFamily: 'Trispace',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  }
  
const aStyle = {
    textAlign: "left",
    color: 'black',
    fontFamily: 'Trispace',
  }
  
const ulIcon = {
    color: 'black',
  }
const iStyle = {
    fontSize: "20px"
}
const iStyle1 = {
    fontSize: "20px",
    marginLeft: "30px"
}
const liFloatRight = {
    textAlign: "right",
    fontFamily: 'Trispace',
    fontSize: '20px',
}
const headerRow = {
    padding: "20px",
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
} 

export default CreateGroup