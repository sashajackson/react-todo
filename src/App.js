import React, { Component } from 'react'
import Task from './components/Todos'
import Header from './components/layout/header'
import Input from './components/layout/input'
import './App.css'
import axios from 'axios'
import Time from './components/layout/time'
import Alert from './components/layout/alert'
import SignIn from './components/layout/signIn'
import SignUp from './components/layout/signup'
import CreateGroup from './components/layout/createGroup'
import SUMaster from './components/layout/signinmaster'
import { Router, Route, Redirect, Switch, BrowserRouter } from 'react-router-dom'
import Routes from '../src/routes/index'
import history from '../src/services/history'
import Dashboard from './components/layout/dashboard'
import {createBrowserHistory } from 'history'



// let api = axios.create({
//   baseUrl: 'https://react-todo-17.herokuapp.com',
  
// })
// const base = 'http://localhost:4000';

class App extends Component {
  _isMounted = false;
  _history = createBrowserHistory({forceRefresh: true});
  _user;

  constructor(){
    super();

    this.state = {
        tasks: [
          // { id: 10, task: "wash car"},
        ],
        isAuth: true,
        user: [{username: 'Planning with friends, for fun.'}],

      }
  }



  componentDidMount() {
    this._isMounted = true;

      axios
        .get('/getData')
        .then((result, err) => {
          // console.log('this is result data ', result);
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

  // alert = () => {
  //     this.setState({
  //       user: { username: 'Planning with friends, for fun.'}
  //     })
  // }
    
 
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
      
      axios
        .post('/delete', { id: id})
          .then((response) => {
            console.log(response)
          })
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
          axios.post('/postData', {task: todo, id: this.state.tasks[this.state.tasks.length - 1].id})
          .then(result => {
            let data = [...this.state.tasks]
            data.push(result.data.post);
            this.setState({
              tasks: data
            })
          }).catch(err => console.log(err));
      }
  }

  submitSignIn = () => {
    if(this.isAuth()){
      this._history.push('/dashboard')
      return;
    }
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;
    let obj;

    if(e.length > 0 && p.length > 0){
        obj = {
            email: e,
            password: p,
        }
    } else {
        obj = {
            email: "na",
            password: "na"
        }
    }
      axios
        .post('/signInApp', {email: obj.email, password: obj.password})
          .then(response => {
            console.log(response.data.length)
            console.log('this is response.data ', response.data)
            console.log('this is obj password ', obj.password);
            if(response.data.length > 0){
              if(response.data[0].password === obj.password){
                localStorage.setItem('isAuth', 'true');
                // this.setState({
                //   user: response.data[0]
                // })
                this.user = response.data[0].username;
                this._history.push('/dashboard')
              } else {
                this._history.push('/');
              }
            } 
          })
 
  }

  isAuth = () => {
    let bool = localStorage.getItem('isAuth');
    if(bool){
      return true;
    }

    return false;
  }

  addUser = () => {
    let email = document.getElementById('saveEmail').value;
    let password = document.getElementById('savePassword').value;
    let username = document.getElementById('saveUsername').value;
    console.log('assigned user values..');

    if(email && password && username){
        let obj = {
            u: username,
            e: email,
            p: password,
        }
        axios
            .post('/signup', obj)
                .then(result => {
                    let data = [...this.state.user];
                    this.setState({
                      user: [ result.data.user ]
                    })

                    console.log('reslt ', result.data)
                    console.log('state ', this.state)
                    localStorage.setItem('isAuth', 'true');
                    this._history.push('/dashboard')
                  });
                  
    } else {
        console.log('must enter username, email and password');
    }

    console.log('user added..');
}

    
    render(){

  
    return (
      <div className="App">
        
          <Router history={history}>

          <Switch>
          
            {/* <Route exact path="/signIn" render={() => this.isAuth() ? <Dashboard/> : <Redirect to={{pathname="/signIn"}}}>
            <SignIn task={this.state.tasks} submitSignIn={this.submitSignIn} /> 
            </Route> */}

            <Route exact path="/creategroup">
              <CreateGroup />
            </Route>

            <Route exact path="/signup">
              <Header />
              <SUMaster addUser={this.addUser} />
            </Route>

            <Route exact path="/signIn">
              <Header />
              <SignIn submitSignIn={this.submitSignIn} /> 
            </Route>
        
            <Route exact path="/dashboard" render={() => (this.isAuth() ? <Dashboard user={this.state.user[0]} /> : <Redirect to="/signIn" /> )} >
            </Route>

            <Route exact path="/" >
              <Alert />
              <Header />
              <Input log={this.log} task={this.state.tasks}/>
              <Time />
              <Task task={this.state.tasks} markComplete={this.markComplete}
                  delTodo={this.delTodo} update={this.update} log={this.log}/>
            </Route>

            </Switch>

          </Router>
          {/* <Router history={history}>
            <Routes />
          </Router> */}

      </div>
    );
  }
}

export default App;
