import React, { Component } from 'react'
import '../loader.css'

class Loader extends Component {


    render(){

        return (
            <div className='container'>
                <div className='loader'>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--dot'></div>
                <div className='loader--text'></div>
                </div>
            </div>
        )
    }
}

export default Loader