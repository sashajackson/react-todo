import React , { Component } from 'react'
import axios from 'axios'

class GroupPage extends Component {
    _isMounted = false;
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
        // console.log('entered component did mount');

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
                            // console.log('state', this.state)
                            // console.log(this.state.groups[0])
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
                            console.log(this.state)
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
                                console.log(result.data);
                            }).catch(err => console.log(err))

                    // console.log('this is componentdidmount')
    }

    componentDidUpdate(prevProps) {
        console.log(this.state)
        // Typical usage (don't forget to compare props):
        if(this.state.groups.length !== 0){
            // console.log('time to change page contents');
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

                        // console.log('this is state in group ', this.state)
                    })
            // console.log('should console after update');
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
        // await axios
        //     .post('/getCompletedBy', obj)
        //         .then(result => {
        //             hi = result.data.username
        //         })
        return hi;
    }

    showSearch = (username) => {
        let flag = false;
        let usr;
        console.log('incoming username ', username);
        if(this.state.users.length > 0){
            this.state.users.forEach(val => {
                if(val.username === username){
                    console.log('found a match')
                    flag = true;
                    usr = val.username
                }
            })
        }

        if(flag){
            console.log('this is usr ', usr);
            let div = document.createElement('div');
            div.className = 'userSearch';
            div.innerHTML = usr;
            let modalBody = document.getElementById('modal-body');
            div.addEventListener('click', (e) => {
                console.log(this.state.clickedCard)
                let obj = {
                    id: this.state.clickedCard,
                    user: usr,
                }
                axios
                    .post('/updateMembers', obj)
                        .then(result => {
                            console.log(result.data)
                        })
            })
            modalBody.appendChild(div);
            return usr;
        }
        console.log('users is empty');
        return 'user does not exist'
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
                            <div style={cardHeader} className="card-header">{group.title}<i onClick={() => {
                                this.setState({
                                    groups: this.state.groups,
                                    userInfo: this.state.userInfo,
                                    users: this.state.users,
                                    requestComplete: this.state.requestComplete,
                                    clickedCard: group._id,
                                })
                            }} data-bs-toggle="modal" data-bs-target="#exampleModal" style={{color:"white", float:"right"}} class="fal fa-user-plus"></i></div>
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
                                                        {/* <span style={doneBlock}><i id={`icon_${index}`} style={circle} className="fas fa-circle"></i></span> */}
                                                        <h5 style={doneBlock} className="mb-0">

                                                        <span style={{fontFamily:"Trispace"}}> <i style={{color:"green"}} class="fal fa-check"></i>{val.completedBy}</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={index} className="row" style={this.undoneStyle()}>
                                                    <div className="col-12">
                                                        <h5 id={`${index}`} onClick={ () => {this.complete(`${index}`, val.task, group._id, index, i)} } style={undoneBlock}>{val.task}</h5>
                                                        <span style={displayBlock1}><i id={`icon_${index}`} style={circle1} className="fas fa-circle"></i></span>
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
                          {/** thinking about putting onclick on button */}
                        <button onClick={() => {
                            let el = document.getElementById('userSearchInput').value;
                            this.showSearch(el);
                            console.log('button clicked');
                        }} type="button" className="btn btn-primary">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
    
                </div>
                

            )
            
        } else {
            return (
                <div>
                    
                    <h4 style={{marginTop:"2em", textAlign:"center"}} >You have no groups, start one! <a href="/creategroup">here</a></h4>
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
    textDecoration: "line-through",
 
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