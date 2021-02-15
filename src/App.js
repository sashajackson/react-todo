import React, { Component } from 'react'
import Task from './components/Todos'
import Header from './components/layout/header'
import Input from './components/layout/input'
import './App.css'
import axios from 'axios'
import { storage } from './firebase/fbconfig'
import Time from './components/layout/time'
import Alert from './components/layout/alert'
import SignIn from './components/layout/signIn'
import CreateGroup from './components/layout/createGroup'
import SUMaster from './components/layout/signinmaster'
import GroupPage from './components/layout/groupPage'
import Main from './components/layout/mainPage'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import history from '../src/services/history'
import Dashboard from './components/layout/dashboard'
import {createBrowserHistory } from 'history'
import Loader from './components/layout/loader'


class App extends Component {
  _isMounted = false;
  _history = createBrowserHistory({forceRefresh: true});
  _user;

  constructor(){
    super();

    this.state = {
        tasks: [],
        isAuth: true,
        user: [{username: 'Planning with friends, for fun.'}],

      }
  }



  componentDidMount() {
    this._isMounted = true;

      axios
        .get('/getData')
        .then((result, err) => {
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
            // console.log(response)
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
          // console.log('is Mounted, updated field: ', result);
        }
      });

    }

    log = (id) => {
      let todo = document.getElementById('todoBox').value;
      if(todo.length > 0){
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
            if(response.data.length > 0){
              if(response.data[0].password === obj.password){
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('fx', response.data[0]._id);
                this.user = response.data[0].username;
                return this._history.push('/dashboard')
              } else {
                return this._history.push('/');
              }
            } 
          })
         return (
           <Loader />
         )
 
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

    if(email && password && username){
        let obj = {
            u: username,
            e: email,
            p: password,
        }
        axios
            .post('/signup', obj)
                .then(result => {
                    this.setState({
                      user: [ result.data.user ]
                    })

                    localStorage.setItem('isAuth', 'true');
                    localStorage.setItem('fx', this.state.user[0]._id);
                    this._history.push('/dashboard')
                  });
                  
    } else {
        console.log('must enter username, email and password');
    }

    console.log('user added..');
}

createGroup = (pic) => {
  let task1 = document.getElementById("task1").value;
  let task2 = document.getElementById("task2").value;
  let task3 = document.getElementById("task3").value;
  let title = document.getElementById("groupTitle").value;

  if(task1 && task2 && task3){

    if(pic !== null){
      const uploadTask = storage.ref(`images/${pic.name}`).put(pic);
      uploadTask.on('state_changed', snapshot => {}, err => { console.log(err) }, () => {
        storage
        .ref("images")
        .child(pic.name).getDownloadURL().then(url => { 
  
          let obj = {
            title: title,
            oneTask: task1,
            twoTask: task2,
            threeTask: task3,
            storageId: localStorage.getItem('fx'),
            upload: url,
          }
          
            axios
              .post('/createGroup', obj)
                .then(result => {
                  this._history.push('/dashboard');
                })
          });
      })

    } else if(pic === null){
      let obj = {
        title: title,
        oneTask: task1,
        twoTask: task2,
        threeTask: task3,
        storageId: localStorage.getItem('fx'),
        upload: null,
      }
      
        axios
          .post('/createGroup', obj)
            .then(result => {
              this._history.push('/dashboard');
            })      
    }
    
  } else {
    console.log('must enter tasks')
  }










}
    
    render(){

  
    return (
      <div className="App">
        
          <Router history={history}>

          <Switch>
            <Route exact path="/creategroup">
              <CreateGroup createGroup={this.createGroup} />
            </Route>

            <Route exact path="/loader">
              <Loader />
            </Route>

            <Route exact path="/signup" render={() => (
              this.isAuth() ? <Dashboard user={this.state.user[0]} /> : <SUMaster addUser={this.addUser} /> 
              )}>
            </Route>

            <Route exact path="/signIn" render={() => (
              this.isAuth() ? <Dashboard user={this.state.user[0]} /> : <SignIn submitSignIn={this.submitSignIn} /> 
              )}>

            </Route>
        
            <Route exact path="/dashboard" render={() => (
              this.isAuth() ? <Dashboard user={this.state.user[0]} /> : <Redirect to="/signIn" /> 
              )} >
            </Route>

            <Route exact path="/groups" render={() => (
              this.isAuth() ? <GroupPage /> : <Redirect to="/signIn" />
              )}>
            </Route>

            <Route exact path="/" >
              <Main />
            </Route>

            </Switch>

          </Router>
      </div>
    );
  }
}

export default App;


