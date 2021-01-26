import React, { Component } from 'react'
import Task from './components/Todos'
import Header from './components/layout/header'
import Input from './components/layout/input'
import './App.css'
import axios from 'axios'
import Time from './components/layout/time'

const baseUrl = 'https://react-todo-17.herokuapp.com';

class App extends Component {
  _isMounted = false;

  constructor(){
    super();

    this.state = {
        tasks: [
          { id: 10, task: "wash car"},
        ]
      }
  }


  componentDidMount() {
    this._isMounted = true;
 
    axios
      .get('/getData')
      .then(result => {
        console.log('this is result ', result);
        if (this._isMounted) {
          this.setState({
            tasks: result.data,
          });
        }

      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
    
 
    markComplete = (id, completed) => {
      this.setState({
        tasks: this.state.tasks.map(todo => {
          if(todo.id === id){
            console.log('found id', todo.id)
            todo.completed = !todo.completed;

            axios
            .put('/updateComplete', {properties: {
              id: id,
              complete: todo.completed
            }})
            .then(result => {
              if (this._isMounted) {
                
              }
            });
          }
          return todo;
        })
      })
    };

    delTodo = (id) => {
      this.setState({tasks: [...this.state.tasks.filter(todo => todo.id !== id)]})
    }

    update = (id, complete) => {

      axios
      .put('/updateComplete', {properties: {
        id: id,
        complete: complete
      }})
      .then(result => {
        if (this._isMounted) {
          console.log('is Mounted, updated field: ', result);
        }
      });

    }

    log = (id) => {
      let todo = document.getElementById('todoBox').value;
      if(todo.length > 0){
        console.log('id ', this.state.tasks[this.state.tasks.length - 1].id);
          axios.post(baseUrl + '/postData', {task: todo, id: this.state.tasks[this.state.tasks.length - 1].id})
          .then(result => {
            let data = [...this.state.tasks]
            data.push(result.data.post);
            this.setState({
              tasks: data
            })
          }).catch(err => console.log(err));
      }
  }

    
    render(){

  
    return (
      <div className="App">
        <Header />
        <Time />
        <Input log={this.log} task={this.state.tasks}/>
        <Task task={this.state.tasks} markComplete={this.markComplete}
        delTodo={this.delTodo} update={this.update} log={this.log}/>
      </div>
    );
  }
}

export default App;
