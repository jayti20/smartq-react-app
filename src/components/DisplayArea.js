import React, { Component } from 'react'
import './sideBar.css'
class DisplayArea extends Component {
    render() {
        console.log(this.props.nameOfTheRestaurantsClicked)
        return (
            <div className='main'>
              
               {this.props.nameOfTheRestaurantsClicked!==''?<div>{this.props.restaurantData[this.props.nameOfTheRestaurantsClicked].map((el,i)=>{
                   console.log(el)
                   

                  
                  if(el.ofs){ return <button key={i} type="button" className="btn btn-success" style={{
                    width: '150px',
                    height: '150px',
                    marginTop:'20px',
                    marginLeft:'20px',
                    marginRight:'20px',
                    padding:'20px'
                    }} onClick={(e)=>{
                      this.props.changeAvailability(e,this.props.nameOfTheRestaurantsClicked,el.foodid) 
                     /*this.props.toggleButton()*/}}>{el.foodname}</button>}
                  else
                  {
                    return <button key={i} type="button" className="btn btn-danger" style={{
                      width: '150px',
                      height: '150px',
                     
                      marginTop:'20px',
                    marginLeft:'20px',
                    marginRight:'20px',
                      padding:'20px'
                      }} onClick={(e)=>{this.props.changeAvailability(e,this.props.nameOfTheRestaurantsClicked, el.foodid)
                        /*this.props.toggleButton()*/}}>{el.foodname}</button>  
                  }
               })}</div>:null}

             </div>
        )
    }
}

export default DisplayArea
