import React, { Component } from 'react'
import AddTodo from './addTodo'

class Input extends Component {

    render(){
        return (
            <AddTodo log={this.props.log} task={this.props.task}/>
        )
    }
}

export default Input;