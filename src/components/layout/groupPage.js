import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loader from './loader'
import {createBrowserHistory } from 'history'
import './gp.css'

class GroupPage extends Component {
    _isMounted = false;
    _history = createBrowserHistory({forceRefresh:true})
    count = 0;


    constructor(props){
        super(props);
        this.state = {
            groups: [],
            userInfo: [],
            users: [],
            requestComplete: false,
        }
    }

    undoneStyle = () => {
        return {
            background: 'white',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            fontSize: '20px',
            margin: "0 20px 20px 20px",
            borderRadius: "30px"
        }
      }
    doneStyle = () => {
        return {
            background: 'white',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            fontSize: '20px',
            margin: "0 20px 20px 20px",
            borderRadius: "30px"
        }
      }


    componentDidMount = async () => {
        this._isMounted = true;

            let obj = {
                id: localStorage.getItem('fx')
            }

            await axios
                .post('/mygroups', obj)
                    .then(res => {
                        if(this._isMounted){
                            this.setState({
                                groups: res.data,
                                requestComplete: true,
                            })
                        }
                    })
            let obj1 = {
                id: localStorage.getItem('fx')
            }
            await axios
                    .post('/getUserData', obj1)
                        .then(result => {
                            this.setState({
                                groups: this.state.groups,
                                userInfo: result.data,
                                requestComplete: true,
                            })
                           
                        })
            await axios 
                        .get('/getUsers')
                            .then(result => {
                                let newArray = [];
                                result.data.forEach(obj => {
                                    let newObj = {};
                                    newObj.username = obj.username;
                                    newObj.id = obj._id
                                    newArray.push(newObj);
                                })
                                this.setState({
                                    groups: this.state.groups,
                                    userInfo: this.state.userInfo,
                                    users: newArray,
                                    requestComplete: true,
                                })
                            }).catch(err => console.log(err))
    }

    componentDidUpdate(prevProps) {
        if(this.state.groups.length !== 0){
        }
      }

    componentWillUnmount() {
        this._isMounted = false;
      }

    addCount = () => {
        this.count = this.count++;
        return this.count;
    }


    myGroupsCall = () => {

            let obj = {
                id: localStorage.getItem('fx')
            }

            axios
                .post('/mygroups', obj)
                    .then(res => {
                        if(this._isMounted){
                            this.setState({
                                groups: [res.data],
                                requestComplete: true,
                            })
                            console.log('res ', res)
                        }
                    })
    }

    complete = (id, task, groupId, index, groupIndex) => {

        let complete = this.state.groups[groupIndex].groupTask.filter(v => v.task === task)
        complete.completed = true;
        let elem = document.getElementById(id);
        let icon = document.getElementById(`icon_` + id)
        elem.style.textDecoration = 'line-through';
        elem.style.color = '#f4f4f4';
        console.log(groupIndex);
        this.updateRecord(groupId, task, index);
        this._history.push('/dashboard');
       
    }


    updateRecord = (_id, _task, _index) => {
        let obj = {
            id: _id,
            task: _task,
            index: _index,
            completedBy: localStorage.getItem('fx')
        }

        axios
            .put('/updateTask', obj)
                .then(result => {
                    console.log('updateTask result data ', result.data)
                }).catch(err => console.log(err));
    }

    getUser = async () => {
        let ls = localStorage.getItem('fx');
        let obj = {
            id: ls,
        }
        let hi = 'hi';
        return hi;
    }

    showSearch = (username) => {
        let flag = false;
        let usr;
        let uId;
        console.log('incoming username ', username);
        if(this.state.users.length > 0){
            this.state.users.forEach(val => {
                if(val.username === username){
                    console.log('found a match')
                    flag = true;
                    usr = val.username;
                    uId = val.id;
                }
            })
        }

        if(flag){
            console.log('this is usr ', usr);
            let div = document.createElement('div');
            let span = document.createElement('span');
            div.className = 'spanDiv';
            span.className = 'userSearch';
            span.innerHTML = usr;
            let modalBody = document.getElementById('modal-body');
            div.addEventListener('click', (e) => {
                console.log(this.state.clickedCard)
                let obj = {
                    id: this.state.clickedCard,
                    user: usr,
                    userId: uId
                }
                axios
                    .post('/updateMembers', obj)
                        .then(result => {
                            this.setState({
                                groups: this.state.groups,
                                userInfo: this.state.userInfo,
                                users: this.state.users,
                                requestComplete: true,
                            })
                        })
                        this._history.push('/dashboard')
            })
            div.appendChild(span);
            modalBody.appendChild(div);
            return usr;
        }
        console.log('users is empty');
        return 'user does not exist'
    }

    deleteGroup = (id) => {
        let obj = {
            id: id,
        }
        axios.post('/deleteGroup', obj);
        console.log('item deleted');
        this._history.push('/dashboard')
    }

    addGroupTask = (e) => {
        let g = localStorage.getItem('g');
        let createTask = document.getElementById('taskToGroup').value;
        console.log(createTask.length);

        if(createTask.length !== 0 && g){
            let obj = {
                id: g,
                storageId: localStorage.getItem('fx'),
                task: createTask,
            }
    
            axios.post('/createGroupTask', obj);
            this._history.push('/dashboard');
            localStorage.removeItem('g')

        } else {
            alert('You must enter a task before submitting');
        }
    }


    render(){

        if(this.state.groups.length !== 0){

            return(
                <div className="">
    
                    
                    
                    <div className="row">
                    <div className="col-12">
                    <div className="card-group">
                    {this.state.groups.map((group, i) => 
                        <div key={i} className="card text-dark bg-light m-3" style={{}}>
                            <div style={cardHeader} className="card-header">{group.title}
                            <i onClick={() => {
                                this.setState({
                                    groups: this.state.groups,
                                    userInfo: this.state.userInfo,
                                    users: this.state.users,
                                    requestComplete: this.state.requestComplete,
                                    clickedCard: group._id,
                                })
                                }} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:"white", float:"right", marginTop:"5px"}} className="fal fa-user-plus"></i>
                                <i onClick={() => {
                                    this.deleteGroup(group._id);
                                }} style={{color:"white", float:"right", marginRight:"30px", marginTop:"5px"}} className="fal fa-trash-alt"></i>
                                <i onClick={() => {
                                    localStorage.setItem('g', group._id)
                                }} data-bs-toggle="modal" data-bs-target="#modal2" style={{color:"white", float:"right", marginRight:"30px", marginTop:"5px"}} className="fal fa-plus"></i>
                            </div>
                                <div className="card-body">
                                    {group.groupTask.map((val, index) => {

                                        if(this.state.groups[i].groupTask[index].completed && this.state.groups[i].groupTask[index].completedBy === []){
                                            
                                            return (
                                                <div key={index} className="row" style={this.doneStyle()}>
                                                    <div className="col-12">
                                                        <h5 id={`${index}`} onClick={ () => {this.complete(`${index}`, val.task, group._id, index)} } style={displayBlock}>{val.task}</h5>
                                                        <span style={doneBlock}><i id={`icon_${index}`} style={circle} className="fas fa-circle"></i></span>
                                                    </div>
                                                </div>
                                            )
                                        } else if(this.state.groups[i].groupTask[index].completed && this.state.groups[i].groupTask[index].completedBy !== []){
                                            return (
                                                <div key={index} className="row" style={this.doneStyle()}>
                                                    <div className="col-12">
                                                        <h5 id={`${index}`} onClick={ () => {this.complete(`${index}`, val.task, group._id, i)} } style={displayBlock}>{val.task}</h5>
                                                        <h5 style={doneBlock} className="mb-0">

                                                        <span style={{fontFamily:"Trispace", fontSize:"13px"}}> <i style={{color:"green"}} className="fal fa-check"></i> @{val.completedBy}</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={index} className="row" style={this.undoneStyle()}>
                                                    <div className="col-12">
                                                        <h5 id={`${index}`} onClick={ () => {this.complete(`${index}`, val.task, group._id, index, i)} } style={undoneBlock}>{val.task}</h5>
                                                    </div>
                                                </div>
                                            )                                            
                                        }

                                    })}

                                       

                                        {group.members.map((user, ind) => {
                                            
                                            if(user.member){
                                               
                                                return (
                                                

                                                        <h6 style={memberStyle} key={ind}>{user.member}</h6>
                                              

                                                )
                                            }
                                        })}

                                </div>
                                </div>                               


/**end of group map */
                    )}
                    </div>
                    </div>
                    </div>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Find friends</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div id="modal-body" className="modal-body">
                      <input id="userSearchInput" className="form-control me-2" type="search" placeholder="Search by username" aria-label="Search"/>
                      
                      </div>
                      
                      <div className="modal-footer">
                        <Link to="/dashboard" onClick={() => {
                            let el = document.getElementById('userSearchInput').value;
                            this.showSearch(el);
                            
                        }} type="button" className="btn searchBtn">Search</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal" tabIndex="-1" id="modal2">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create a group task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <input id="taskToGroup" type="text" class="form-control" placeholder="enter task" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => {
                                this.addGroupTask();
                            }} type="button" className="btn btn-primary">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
    
                </div>
                

            )
            
        } else {
            return (
                <div>
                    
                    <h6 className="p-3 text-center mt-2">Hey, you don't have any groups. Add some!</h6>
                </div>
            )
        }
        
    }

    
}

const cardHeader = {
    background: "#7f5fff",
    color: "white",
    fontSize: "20px",
    textAlign: "left",
    fontFamily: "Trispace"
}

const displayBlock = {
    display: "inline-block",
    fontFamily:"Trispace",
    color: "#dbdbdb",
 
}
const doneBlock = {
    display: "inline-block",
    float: "right",
}
const displayBlock1 = {
    display: "inline-block",
    float: "right"

}
const undoneBlock = {
    display: "inline-block",
}
const circle = {
    color: "green",
}
const circle1 = {
    color: "red",
}
const memberStyle = {
    display: "inline-block",
    background: "white",
    borderRadius: "20px",
    color: "#7f5fff",
    margin: "10px",
    padding: "15px",
}
export default GroupPage