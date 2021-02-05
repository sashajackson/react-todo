import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Main extends Component {
    _isMounted = false;
    displayProp = ['napkins', 'cups', 'soda'];
    count = 0;
    length = this.displayProp.length;
    display = this.displayProp[this.count];

    startInterval = () => {
        console.log('in start interval')
        // setInterval(() => {
        //     this.count++;
        //     console.log(this.count);
        //     if(this.count === this.length){
        //         this.count = 0;
        //     } 
        // }, 4000);
    }

    componentDidMount = () => {
        console.log('component did mount');
        this._isMounted = true;
        if(this._isMounted){
            this.startInterval();
        }
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render(){
        return (
            <div>
              
                {/* <video style={videoStyle} controls autoPlay>
                    <source src="https://firebasestorage.googleapis.com/v0/b/glco-19bf1.appspot.com/o/images%2FPexels%20Videos%201906755.mp4?alt=media&token=2d4dfbd3-7974-4613-9349-837bcf1dd85b" type="video/mp4">

                    </source>
                </video> */}
                <img style={imgStyle} src="https://images.pexels.com/photos/5805001/pexels-photo-5805001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div style={{textAlign:"center"}}>
                <h2 style={main1}>Party Rule #1:</h2>
                <h5 style={main2}>5 people don't need to bring {this.display}.</h5>
                </div>
                <div style={main4}>
                <Link style={linkStyle} to="/signIn">Login</Link>

                </div>
                {/* <Link to='/signIn' style={main3}>Sign In <i className="fal fa-arrow-right"></i></Link> */}
            </div>
        )
    }
}

const imgStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute'
}
const main = {
    position: 'absolute',
    top: '1em',
    zIndex: '999',
    color: 'black',
    background: 'white',
    padding: '18px',
    fontFamily: 'Trispace',
    fontSize: '20px',
}
const main1 = {
    position: 'absolute',
    top: '0',
    zIndex: '999',
    color: 'black',
    background: 'white',
    padding: '20px',
    fontFamily: 'Trispace',
    fontSize: '16px',
    width:'100%',
    
}
const main2 = {
    position: 'absolute',
    top: '3em',
    zIndex: '999',
    color: '#7f5fff',
    background: 'white',
    padding: '20px',
    fontFamily: 'Trispace',
    fontSize: '16px',
    width:'100%',
    
}
const main4 = {
    position: 'absolute',
    bottom: '-7px',
    zIndex: '999',
    background: 'white',
    padding: '20px',
    fontFamily: 'Trispace',
    fontSize: '14px',
    textAlign: 'center',
    width: '100%',
    
}
const linkStyle = {
    color: '#7f5fff',
    fontSize: '20px',
}

const main3 = {
    position: 'absolute',
    // top: '11em',
    right: '0',
    bottom: '0',
    zIndex: '999',
    color: '#7f5fff',
    background: 'white',
    padding: '20px',
    fontFamily: 'Trispace',
}

export default Main