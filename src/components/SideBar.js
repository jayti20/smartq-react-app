import React, { Component } from 'react'
import { RestaurantConsumer } from './RestaurantContext'
import './sideBar.css'
const styleWidth={width:'25%',
backgroundColor:'white'}
class SideBar extends Component {
    render() {
        console.log(this.props)
        return (
            <div>

            <div className="w3-sidebar w3-light-grey w3-bar-block" style={styleWidth}>
   <h3 className="w3-bar-item">Menu</h3>
 
   
  
 
</div>
    
            </div>
        )
    }
}

export default SideBar
