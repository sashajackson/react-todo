import React, {Component} from 'react' 
import PropTypes from 'prop-types'

class AddTodo extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-12" style={parentDiv}>
                <input id="todoBox" style={inputStyle} type="text" name="todoBox" />
                <button style={btnStyle} onClick={this.props.log.bind(this, this.props.task.id)}>Add</button>
            </div>

            </div>
        )
    }
}

AddTodo.propTypes = {
    task: PropTypes.array.isRequired
}

const inputStyle =  {
    background: 'white',
    color: 'black',
    padding: '10px',
    textAlign: 'left',
    width: '200px',
    height: '50px',
    border: '1px solid grey',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
};

const parentDiv = {
    textAlign: "center",
    marginTop: "1em",
}

const btnStyle = {
    background: 'black',
    color: 'ghostwhite',
    padding: '10px',
    height: '50px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    border: 'none'
}

export default AddTodo;