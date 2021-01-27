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
          margin: "0 20px 20px 20px",
          borderRadius: "30px"
      }
    }


    render(){

        return (
            <div className="row" style={this.getStyle()}>
                <div className="col-12">
               <p style={{marginBottom: "0"}}>
                <span style={{marginLeft: "10px"}} onClick={this.props.markComplete.bind(this, this.props.task.id, this.props.task.completed)} >
                {this.props.task.task}
                </span>
                <button onClick={this.props.delTodo.bind(this, this.props.task.id)} style={btnStyle}><i style={iconStyle} className="fas fa-times-square"></i></button>
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
    border: 'none',
    float: 'right'
}

const iconStyle = {
    color: "black",
}

export default TodoItem