import React, { Component } from 'react'

class ProtectedNav extends Component {

    render(){
        return(
            <div className="">
            <div className="row">
            <div className="col-12 p-0">
                <nav className="navbar" style={headerStyle}>
                    <div style={containerStyle} className="container">
                        <a style={brandStyle} className="navbar-brand" href="/">GroupList</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fas fa-bars" style={menuIcon}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul style={ulStyle} className="navbar-nav">
                                <li className="nav-item">
                                    <a style={aStyle} className="nav-link active" href="/" aria-current="page"><span style={ulIcon}><i className="fad fa-home-lg-alt"></i></span> Home </a>
                                </li>
                                <li className="nav-item">
                                    <a style={aStyle} className="nav-link" onClick={this.isAuth}><span style={ulIcon}><i className="fad fa-sign-in-alt"></i></span> Dashboard</a>
                                </li>
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
</div>
        )
    }
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

  //alert style
const headerRow = {
    padding: "20px",
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
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

const test = {
    
}

export default ProtectedNav