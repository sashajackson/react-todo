import React , { Component } from 'react'
import { CreateBrowserHistory } from 'history'
import ProtectedNav from './protectedNav'
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


    componentDidMount = async () => {
        this._isMounted = true;
        console.log('entered component did mount');

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
                            console.log('state', this.state)
                            console.log(this.state.groups[0])
                        }
                    })
                    console.log('this is componentdidmount')
    }

    componentDidUpdate(prevProps) {
        console.log('entered componentdid update')
        // Typical usage (don't forget to compare props):
        if(this.state.groups.length !== 0){
            console.log('time to change page contents');
        }
      }

    componentWillUnmount() {
        this._isMounted = false;
      }

    addCount = () => {
        this.count = this.count++;
        return this.count;
    }

    test = () => {
        console.log()
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

                        console.log('this is state in group ', this.state)
                    })
            console.log('should console after update');
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
                                    
                                        return (
                                            <h5 key={index}>{val.task}</h5>
                                        )
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
    background: "linear-gradient(to right, #7f5fff, #f4f4f4)",
    background: "#7f5fff",
    color: "white",
    fontSize: "20px",
    textAlign: "left",
    fontFamily: "Trispace"
}

export default GroupPage