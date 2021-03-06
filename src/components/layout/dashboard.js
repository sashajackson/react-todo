import React, { Component } from 'react'
import {createBrowserHistory } from 'history'
import GroupPage from './groupPage'
import { Link } from 'react-router-dom'
import './dashboard.css'
import Loader from './loader'
import axios from 'axios'
import './slickslider'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




class Dashboard extends Component {
_isMounted = false;
_history = createBrowserHistory({forceRefresh: true});
history = createBrowserHistory();
settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
}

constructor(){
    super()
    this.state = {
        groups: [],
        test: true,
    }
}

componentDidMount = async () => {
    this._isMounted = true;

        let obj = {
            id: localStorage.getItem('fx')
        }

        await axios
            .post('/mygroups', obj)
                .then(res => {
                    if(this._isMounted){
                        this.setState({
                            groups: res.data,
                            requestComplete: true,
                        })
                    }
                })
}

componentWillUnmount = () => {
    this._isMounted = false;
}
componentDidUpdate = () => {
    
}

changePage = () => {
    this._history.push("/creategroup")
 }

 signOut = () => {
     localStorage.removeItem('isAuth');
     localStorage.removeItem('fx');
     this._history.push('/')
 }
 getGroupLength = () => {
     if(this.state.groups.length === 0){
         return true;
     }

     return false;
 }

render(){
    
    if(this.state.groups.length !== 0 && this._isMounted){
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar" style={headerStyle}>
                        <div style={containerStyle} className="container-fluid">
                            <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
                            <ul className="navbar-nav d-flex flex-row">
                                <li style={userStyle} className="nav-item"><i className="fas fa-user-circle userCircle"></i></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>


        <div className="container-fluid">
            <div style={secondRowStyle} className="row">
                <div className="col-12">
                <Slider {...this.settings}>
                {this.state.groups.map((group, i) => {
                    
                    if(group.photoUrl){
                        return (
                            <div key={i} class="groupMenuIcon">
                                <img class="carousel-img" style={imgStyle} alt='' src={group.photoUrl} />
                                <p style={groupTitle}>{group.title}</p>
                            </div>
    
                        )
                    } else {

                        return (
                            <div key={i} class="groupMenuIcon">
                                <img  class="carousel-img" style={imgStyle} alt='' src="https://images.pexels.com/photos/4039452/pexels-photo-4039452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <p style={groupTitle}>{group.title}</p>
                            </div>
                        )
                    }
                })}
                </Slider>
                </div>                    
            </div>
            <GroupPage />
        </div>
        <div style={parentRow1Style} className="row fixed-bottom">

<div className="col-12">
    <nav className="navbar">
    <ul style={{marginLeft:"30px"}} className="navbar-nav d-flex flex-row">

    <li style={iconMenuStyle} className="nav-item">
        <Link to="/">
        <i className="fal fa-home-lg-alt"></i>
        </Link>

    </li>
    <li style={iconMenuStyle} className="nav-item" onClick={this.changePage}>
        <i style={createStyle} className="fal fa-file-plus"></i> 
    </li>
    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-search"></i></li>
    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-bell"></i></li>
    <li style={iconMenuStyle} className="nav-item" onClick={this.signOut}>
        <span style={ulIcon}><i className="fad fa-sign-out-alt"></i></span>
    </li>

    </ul>
    </nav>
</div>
</div>

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
/**end of return */
} else if(this.state.groups.length === 0 && this._isMounted){
    return (
        <div className="">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar" style={headerStyle}>
                        <div style={containerStyle} className="container-fluid">
                            <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
                            <ul className="navbar-nav d-flex flex-row">
                                <li style={userStyle} className="nav-item"><i className="fas fa-user-circle userCircle"></i></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>


        <div className="container">
            <div style={secondRowStyle} className="row">
                <div className="col-12 variable-width">
                    <h6 className="font-weight-bold text-center">Once you're in some groups, they'll display here.</h6>
                </div>                    
            </div>
            <GroupPage />
            <div style={parentRow1Style} className="row fixed-bottom">

                <div className="col-12">
                    <nav className="navbar">
                    <ul style={{marginLeft:"30px"}} className="navbar-nav d-flex flex-row">

                    <li style={iconMenuStyle} className="nav-item">
                        <Link to="/">
                        <i className="fal fa-home-lg-alt"></i>
                        </Link>

                    </li>
                    <li style={iconMenuStyle} className="nav-item" onClick={this.changePage}>
                        <i style={createStyle} className="fal fa-file-plus"></i> 
                    </li>
                    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-search"></i></li>
                    <li style={iconMenuStyle} className="nav-item"><i className="fal fa-bell"></i></li>
                    <li style={iconMenuStyle} className="nav-item" onClick={this.signOut}>
                        <span style={ulIcon}><i className="fad fa-sign-out-alt"></i></span>
                    </li>

                    </ul>
                    </nav>
                </div>
            </div>
        </div>
       

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
} else {

    return (

        <Loader />
    )
}

/** end of render */
    }
/** end of class */
}



const parentRow1Style = {
    background: "white",
    border: "1px solid #f4f4f4",
    zIndex: "9999",
}

const secondRowStyle = {
    paddingTop: "1em",
    paddingBottom: "10px",
    background: "white",
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    
}
const createStyle = {
    color: "#7f5fff",
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


//navbar style
const containerStyle = {
    paddingLeft: '0'
  }
  
  const headerStyle =  {
      color: 'white',
      padding: '1em 10px 1em 10px',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #7f5fff, #7f5fff, #5f8fff, #5f8fff)',
    //   background: 'white',
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
  
  
  const brandStyle = {
      color: 'white',
      background: 'transparent',
      borderRadius: '10px',
      padding: '10px',
      fontFamily: 'Trispace',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  }
  
  const ulIcon = {
    color: '#7f5fff',
  }

  const modalStyle = {
      border: "1px solid #7f5fff"
  }

export default Dashboard