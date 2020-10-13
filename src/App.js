import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar';
import DisplayArea from './components/DisplayArea';
import Footer from './components/Footer';
import {arr,abcKeys,val1} from './restaurants'
import { RestaurantProvider } from './components/RestaurantContext';
const restaurantClone=JSON.parse(JSON.stringify(val1))

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       restaurantData:restaurantClone,
       nameOfTheRestaurants:abcKeys,
       clickedNameOfTheRestaurant:'false',
       nameOfTheRestaurantsId:'',
       nameOfTheRestaurantsClicked:'',
       searchVal:'',
       toggleVal:'false'
    }
  }
  
  display=(id)=>{
    const temp=this.state.nameOfTheRestaurants[0]
    const temprest=this.state.restaurantData
    const item=[];
    temprest[id].map((el,i)=>{
      if(i===id)
      {
        return item.push(el[i])
      }
    })

   
   this.setState({
     nameOfTheRestaurantsClicked:id,
     
   },()=>{console.log(this.state.nameOfTheRestaurants)
    console.log(item)})
 

  }
  changeAvailability=(event,restaurantChosenId, foodid)=>{
    event.preventDefault();
    console.log(restaurantChosenId)
    const temp=this.state.nameOfTheRestaurants[0]
    const temprest=this.state.restaurantData
    const item=temprest[restaurantChosenId].map((el,i)=>{
      console.log(el)
       if(el.foodid===foodid)
       {
         if(el.ofs===false)
         el.ofs=true
         else
         el.ofs=false
         
        
       }
     
    })
    console.log(item)
    this.setState({
      restaurantData:[...temprest,item]
    })
   
    
   
  }
 /* toggleButton=()=>{
    this.setState({
        toggleVal: !this.state.toggleVal, 
    });
}*/


  unavailableAll=(restaurantChosenId)=>{
    const temprest=this.state.restaurantData
    const item=temprest[restaurantChosenId].map((el,i)=>{
      console.log(el)
       
         el.ofs=false
         
        
       })
     
    
    console.log(item)
    this.setState({
      restaurantData:[...temprest,item]
    })

  }

  availableAll=(restaurantChosenId)=>{
    const temprest=this.state.restaurantData
    const item=temprest[restaurantChosenId].map((el,i)=>{
      console.log(el)
       
         el.ofs=true
         
        
       })
     
    
    console.log(item)
    this.setState({
      restaurantData:[...temprest,item]
    })

  }
  back=()=>{
    this.setState({
      restaurantData:restaurantClone,
      nameOfTheRestaurantsClicked:''
    })
  }
  render()
  {
    console.log(this.state.restaurantData)
    return (
      <div className="App">
    {/*<RestaurantProvider value={{state:this.state}}>*/}
    <NavBar restaurantData={this.state.restaurantData} nameOfTheRestaurants={this.state.nameOfTheRestaurants[0]} back={this.back}/>
    <SideBar restaurantData={this.state.restaurantData} nameOfTheRestaurants={this.state.nameOfTheRestaurants[0]} display={this.display}/>
    <DisplayArea restaurantData={this.state.restaurantData} nameOfTheRestaurantsClicked={this.state.nameOfTheRestaurantsClicked} nameOfTheRestaurants={this.state.nameOfTheRestaurants[0]} changeAvailability={this.changeAvailability}/>
    <Footer restaurantData={this.state.restaurantData} nameOfTheRestaurantsClicked={this.state.nameOfTheRestaurantsClicked} nameOfTheRestaurants={this.state.nameOfTheRestaurants[0]} unavailableAll={this.unavailableAll} availableAll={this.availableAll}/>
    {/*<Modal restaurantData={this.state.restaurantData} nameOfTheRestaurantsClicked={this.state.nameOfTheRestaurantsClicked} nameOfTheRestaurants={this.state.nameOfTheRestaurants[0]} closeToggle={this.closeToggle}/>*/}
    {/*</RestaurantProvider>*/}
      </div>
    );
  }
  
}

export default App;
