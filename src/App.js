import React, { Component } from 'react'
import Task from './components/Todos'
import Header from './components/layout/header'
import Input from './components/layout/input'
import './App.css'
import axios from 'axios'
import Time from './components/layout/time'

const api = axios.create({
  baseUrl: 'http://localhost:4000/'
})

class App extends Component {
  _isMounted = false;

  constructor(){
    super();
    // this.axiosStart();

    this.state = {
        tasks: []
      }
  }


  componentDidMount() {
    this._isMounted = true;
 
    api
      .get('http://react-todo-17.herokuapp.com/getData')
      .then(result => {
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
    //   async axiosStart () {
    //     const promise = await api.get('http://localhost:4000/getData');
    //     this.setState({
    //       tasks: promise.data
    //     })
    //     console.log('this is state ', this.state);
    // }
    
 
    markComplete = (id, completed) => {
      this.setState({
        tasks: this.state.tasks.map(todo => {
          if(todo.id === id){
            console.log('found id', todo.id)
            // this.setState({
            //   completed: !todo.complete
            // })
            // console.log('this is todo ', todo);
            todo.completed = !todo.completed;
            // console.log('this is todo change ', todo.completed);
            api
            .put('http://react-todo-17.herokuapp.com/updateComplete', {properties: {
              id: id,
              complete: todo.completed
            }})
            .then(result => {
              if (this._isMounted) {
                // console.log('is Mounted, updated field: ', result);
              }
            });
          }
          return todo;
        })
      })
    };

    delTodo = (id) => {
      // this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    update = (id, complete) => {

      api
      .put('http://react-todo-17.herokuapp.com/updateComplete', {properties: {
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
          api.post('http://react-todo-17.herokuapp.com/postData', {task: todo, id: this.state.tasks[this.state.tasks.length - 1].id})
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
