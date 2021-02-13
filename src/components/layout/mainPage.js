import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Main extends Component {
    _isMounted = false;
    displayProp = ['napkins', 'cups', 'soda'];
    count = 0;
    length = this.displayProp.length;
    display = this.displayProp[this.count];


    componentDidMount = () => {
        this._isMounted = true;
        if(this._isMounted){
            
        }
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render(){
        return (
            <div style={mainDiv}>
                <div className="container-fluid h-100 p-0">
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 style={{color:"#7f5fff", padding:"1.5em"}}>Group Projects have never been easier.</h5>
                        <img style={{width:"100%"}} src="https://images.pexels.com/photos/6774155/pexels-photo-6774155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                </div>
                {/* <img style={{width:"100%"}} src="https://images.pexels.com/photos/6774155/pexels-photo-6774155.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div style={{position:"absolute", top:"0", background:"white"}} className="row">
                    <div style={infoStyle} className="col-12 text-center">
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-12">
                        <div style={{padding:"20px", textAlign:"center", opacity:"0.6"}} className="card"> 
                            <div className="card-title">GroupList makes planning easy!</div>
                            <div className="card-body text-center">
                                <ul style={{textAlign:"left", listStyleType:"none"}}>
                                    <li style={liStyle}>
                                        <i style={{color:"gold", marginRight:"10px"}} class="fas fa-star"></i>
                                        Organize your events easier
                                    </li>
                                    <li style={liStyle}>
                                        <i style={{color:"gold", marginRight:"10px"}} class="fas fa-star"></i>
                                        Make group projects smoother
                                    </li>
                                    <li style={liStyle}>
                                        <i style={{color:"gold", marginRight:"10px"}} class="fas fa-star"></i>
                                        Keep up with your goals
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


       


                <div className="row fixed-bottom">
                    <div style={{background:"ghostwhite", textAlign:"center"}} className="col-6">
                        <div style={{padding:"1.5em"}} className='btn'>
                        <Link style={linkStyle} to="/signIn">Login</Link>

                        </div>
                    </div>

                    <div style={{background:"ghostwhite", textAlign:"center"}} className="col-6">
                    <div style={{padding:"1.5em"}} className='btn'>
                        <Link style={linkStyle} to="/signup">Sign Up</Link>
                    </div>                       
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mainDiv = {
   
}
const liStyle = {
    textDecoration: "none !important",
}

const linkStyle = {
    color: '#7f5fff',
    fontSize: '20px',
}

const infoStyle = {
    textAlign: 'center',
    padding: '1.5em',
}


export default Main