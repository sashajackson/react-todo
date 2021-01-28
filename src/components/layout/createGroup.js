import React, { Component } from 'react'

class CreateGroup extends Component {




    render(){
        return (
            <div style={{padding: "20px"}} className="row">

                <div style={{paddingTop: "45px"}} className="col-12">
                <div style={{padding: "20px"}} className="card">
                    <h5 style={{padding: "20px", textAlign: "center", fontFamily: 'Trispace',}} className="card-title">Invite your friends!</h5>
                <div className="input-group">
                    <span className="input-group-text">Group Name</span>
                    <input type="text" aria-label="First name" className="form-control"/>
                </div>
                <div style={{marginTop: "1em"}} className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Add Member</label>
                    <select defaultValue="1" className="form-select" id="inputGroupSelect01">
                        <option value="1">Choose..</option>
                        <option value="2">John</option>
                        <option value="3">Lisa</option>
                        <option value="4">Debrah</option>
                    </select>
                </div>

                <h5 style={{padding: "20px", textAlign: "center", fontFamily: 'Trispace',}} className="card-title">Add Task</h5>
                <div className="input-group mb-3">
                    {/* <span className="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>              
                </div>
                <div className="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" className="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <button type="button" className="btn btn-primary">Create Group</button>
        </div>
    </div>
     
</div>
        )
    }
}

export default CreateGroup