import React, { Component } from 'react'
import SignUp from './signup'
import Header from './header'

class SUMaster extends Component {



    render(){
        return (
            <div>

                <Header />
                <SignUp addUser={this.props.addUser} />
            </div>
        )
    }
}

export default SUMaster