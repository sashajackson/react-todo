import React , { Component } from 'react'
import axios from 'axios'

class GroupPage extends Component {
    _isMounted = false;
    count = 0;


    constructor(props){
        super(props);
        this.state = {
            groups: [],
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


    myGroupsCall = async () => {

            let obj = {
                id: localStorage.getItem('fx')
            }

           await axios
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
        icon.style.color = 'green';
        this.updateRecord(groupId, task, index);
       
    }


    updateRecord = (_id, _task, _index) => {
        let obj = {
            id: _id,
            task: _task,
            index: _index,
        }

        axios
            .put('/updateTask', obj)
                .then(result => {
                    console.log('updateTask result data ', result.data)
                }).catch(err => console.log(err));
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
                            <div style={cardHeader} className="card-header">{group.title}</div>
                                <div className="card-body">
                                    {group.groupTask.map((val, index) => {

                                        if(this.state.groups[i].groupTask[index].completed){
                                            console.log(this.state.groups[1].groupTask[index]);
                                            return (
                                                <div key={index} className="row" style={this.doneStyle()}>
                                                    <div className="col-12">
                                                        <h5 id={`${index}`} onClick={ () => {this.complete(`${index}`, val.task, group._id, index)} } style={displayBlock}>{val.task}</h5>
                                                        <span style={doneBlock}><i id={`icon_${index}`} style={circle} className="fas fa-circle"></i></span>
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
                                            if(user.username){
                                                return (
                                                    
                                                    <h6 key={ind}>{user.username}</h6>

                                                )
                                            } else {
                                                return (
                                                    <h6 key={ind}>No members in this group, add them!</h6>
                                                )
                                            } 
                                        })}

                                </div>
                                </div>                               

                    )}
                    </div>
                    </div>
                    </div>
    
                </div>
            )
        } else {
            return (
                <div>
                    
                    <h1>You have no groups, start one <a href="/creategroup">here</a></h1>
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
export default GroupPage