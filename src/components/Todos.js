import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Task extends Component {


    render(){
        // return this.props.tasks.map((task) => (
        //     <TodoItem key={task.id} task={task} markComplete={this.props.markComplete} />
        // ))

        // console.log(this.props.task);
        console.log(this.props.task);
        if(Array.isArray(this.props.task)){
        let todoArray = this.props.task.filter(val => val.id);
        return todoArray.map((todo) => (
            <TodoItem key={todo.id} task={todo} updateRecord ={this.props.updateRecord} markComplete={this.props.markComplete} delTodo={this.props.delTodo} 
            log={this.props.log} />
                ))
        };
    }
  
}

Task.propTypes = {
    task: PropTypes.array.isRequired
}
  
  export default Task;