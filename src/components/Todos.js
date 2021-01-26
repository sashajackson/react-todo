import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Task extends Component {


    render(){


            if(Array.isArray(this.props.task)){
                console.log(this.props.task);
                let todoArray = this.props.task.filter(val => val.id);
                console.log('this is props ', todoArray);
                return todoArray.map((todo) => (
                    <TodoItem key={todo.id} task={todo} updateRecord ={this.props.updateRecord} markComplete={this.props.markComplete} delTodo={this.props.delTodo} 
                    log={this.props.log} />
                        ))
            }

            return null;

    }
  
}

Task.propTypes = {
    task: PropTypes.array.isRequired
}
  
  export default Task;