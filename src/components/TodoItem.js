import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
      return {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          fontSize: '20px',
          textDecoration: this.props.task.completed ? 'line-through' : 'none',
          margin: "20px",
          borderRadius: "5%"
      }
    }

    // handleNameChange = (e) => {
    //    this.props.markComplete.bind(this, this.props.task.id);
    //    this.props.update.bind(this, this.props.task.id, this.props.task.completed)
    //   }

    render(){
        // const { id, task } = this.props.tasks;
        // return (
        //     <div style={this.getStyle()}>
        //         <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        //         { task }
        //         <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        //     </div>
        // )

        
        
        return (
            <div className="row" style={this.getStyle()}>
                <div className="col-12">
               <p style={{marginBottom: "0"}}>
                {/* <input style={{paddingRight: "10px"}} onClick={this.props.markComplete.bind(this, this.props.task.id, this.props.task.completed)} /> */}
                <span style={{marginLeft: "10px"}} onClick={this.props.markComplete.bind(this, this.props.task.id, this.props.task.completed)} >
                {this.props.task.task}
                </span>
                <button onClick={this.props.delTodo.bind(this, this.props.task.id)} style={btnStyle}>x</button>
               </p>

                </div>
            </div>
        )
    }
  
}

TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}

const btnStyle = {
    color: 'red',
    border: 'none',
    borderRadius: '30%',
    float: 'right'
}

export default TodoItem