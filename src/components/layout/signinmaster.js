import React, { Component } from 'react'
import SignUp from './signup'

class SUMaster extends Component {



    render(){
        return (

            <SignUp addUser={this.props.addUser} />
        )
    }
}

export default SUMaster