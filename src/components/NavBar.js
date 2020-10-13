import React, { Component } from 'react'
import './stylingNav.css'
class NavBar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <button className='Button' onClick={this.props.back}>
            ⬅️
            </button>
           
           <input className="form-control mr-sm-2" style={{marginLeft:'200px'}} type="search" placeholder="Search" aria-label="Search"/>
        </nav>
        )
        
    }
}

export default NavBar;
