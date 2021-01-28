import React, { Component } from 'react'

class CreateGroup extends Component {




    render(){
        return (
            <div style={{padding: "20px"}} className="row">

                <div className="col-12">
                <div style={{padding: "20px"}} className="card">
                    <h5 style={{padding: "20px", textAlign: "center"}} className="card-title">Invite your friends!</h5>
                <div className="input-group">
                    <span className="input-group-text">Group Name</span>
                    <input type="text" aria-label="First name" className="form-control"/>
                </div>
                <div style={{marginTop: "1em"}} class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Add Member</label>
                    <select class="form-select" id="inputGroupSelect01">
                        <option selected>Choose..</option>
                        <option value="1">John</option>
                        <option value="2">Lisa</option>
                        <option value="3">Debrah</option>
                    </select>
                </div>

                <h5 style={{padding: "20px", textAlign: "center"}} className="card-title">Add Task</h5>
                <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" class="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" class="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>              
                </div>
                <div class="input-group mb-3">
                    {/* <span class="input-group-text" id="basic-addon1">Task 1</span> */}
                    <input type="text" class="form-control" placeholder="Enter task.." aria-label="Username" aria-describedby="basic-addon1"/>               
                </div>
                <button type="button" class="btn btn-primary">Create Group</button>
        </div>
    </div>
     
</div>
        )
    }
}

export default CreateGroup