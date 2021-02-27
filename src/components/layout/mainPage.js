import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Main extends Component {
    _isMounted = false;
    displayProp = ['napkins', 'cups', 'soda'];
    count = 0;
    length = this.displayProp.length;
    display = this.displayProp[this.count];


    componentDidMount = () => {
        this._isMounted = true;
        if(this._isMounted){
            
        }
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render(){
        return (
            <div style={mainDiv}>
                <div className="container-fluid h-100 p-0">
                <div style={heroRow} className="row">
                    <div className="col-12 text-center">
                        <h5 style={{color:"#7f5fff", padding:"1.5em"}}>Planning in groups has never been easier.</h5>
                    </div>
                </div>
                <div style={{margin:"1em"}} className="row pt-3 pb-3">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center"><i class="far fa-glass-cheers"></i> Plan Events</h5>
                            <p className="card-text text-center">Organize group events with ease.</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center"><i class="far fa-lightbulb-on"></i> Group Projects</h5>
                            <p className="card-text text-center">Delegate task in group projects and keep track of who's doing what.</p>
                        </div>
                    </div>                     
                     </div>
                     <div className="col-lg-4 col-md-4 col-sm-12">
                     <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title text-center"><i class="fal fa-running"></i> Personal Goals</h5>
                            <p className="card-text text-center">Set some goals and stay on target with our easy planner.</p>
                        </div>
                    </div>                     
                     </div>
                </div>
                <div style={{background:"white"}} className="row p-3">
                    <div className="col-12 text-center">
                        <h1 style={{color:"rgb(127, 95, 255)"}}>Plan, delegate task and coordinate many different types of events, projects and personal goals with our easy planner.</h1>
                    </div>
                </div>
                <div style={{background:"black"}} className="row fixed-bottom">
                    <div className="col-12">
                    <nav style={{background:"black"}} class="navbar">
                        <form class="container-fluid justify-content-center">
                            <button class="btn btn-outline-primary me-2" type="button"><i class="fab fa-twitter"></i> Twitter</button>
                            <button class="btn btn-outline-primary me-2" type="button"><i class="fab fa-instagram"></i> Instagram</button>
                            <button class="btn btn-outline-primary" type="button"><i class="fas fa-dollar-sign"></i> Donate</button>
                        </form>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mainDiv = {
   
}
const heroRow = {
    background: "white",
}



export default Main