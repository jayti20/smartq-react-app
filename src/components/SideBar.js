import React, { Component } from 'react'
import DisplayArea from './DisplayArea'
import { RestaurantConsumer, RestaurantProvider } from './RestaurantContext'

import './sideBar.css'
const styleWidth={width:'25%',
backgroundColor:'white'}
class SideBar extends Component {
    render() {
        
        return (
            <div className="sidenav">
            <span>
            <div style={styleWidth}>
         
            
             
             {this.props.nameOfTheRestaurants?<div>
                {this.props.nameOfTheRestaurants.map((name,index)=>{ return (<button key={index} type="button" className="btn btn-light" onClick={()=>{this.props.display(index)}}>{name}</button>)
                })}</div>:null}
               </div>
             {/*<RestaurantConsumer>
             {(value)=>{
                console.log(value.state)
                {value.state.nameOfTheRestaurants[0].forEach((nameOfRestro,index)=>{
                    console.log(nameOfRestro)
                    
                    return <div><button value={nameOfRestro}>{nameOfRestro}</button></div>
                })}
            }}
             
        </RestaurantConsumer>*/}
        </span>
        
            </div>
        )
    }
}

export default SideBar
