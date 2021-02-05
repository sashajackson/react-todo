import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Main extends Component {
    render(){
        return (
            <div>
              
                <video style={videoStyle} controls autoPlay>
                    <source src="https://firebasestorage.googleapis.com/v0/b/glco-19bf1.appspot.com/o/images%2FPexels%20Videos%201906755.mp4?alt=media&token=2d4dfbd3-7974-4613-9349-837bcf1dd85b" type="video/mp4">

                    </source>
                </video>

                <h2 style={main}>We all get a little busy.</h2>
                <h5 style={main2}>Keep your group events organized.</h5>
                <Link to='/signIn' style={main3}>Sign In <i className="fal fa-arrow-right"></i></Link>
            </div>
        )
    }
}

const videoStyle = {
    height: '100vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute'
}
const main = {
    position: 'absolute',
    top: '2em',
    zIndex: '999',
    color: 'black',
    background: 'white',
    padding: '18px',
    fontFamily: 'Trispace',
    fontSize: '20px',
}
const main2 = {
    position: 'absolute',
    top: '7em',
    zIndex: '999',
    color: '#7f5fff',
    background: 'white',
    padding: '20px',
    fontFamily: 'Trispace',
    fontSize: '16px',
    
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