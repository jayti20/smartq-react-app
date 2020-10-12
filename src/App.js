import React from 'react';

import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar';
import DisplayArea from './components/DisplayArea';
import Footer from './components/Footer';
import {restaurant} from './restaurants'
import { RestaurantProvider } from './components/RestaurantContext';
const restaurantClone=JSON.parse(JSON.stringify(restaurant))

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       restaurantData:restaurantClone[0]['menuDetails']
    }
  }
  
  render()
  {
    console.log(this.state.restaurantData)
    return (
      <div className="App">
      
    <NavBar/>
    <SideBar restaurantData={this.state.restaurantData}/>
    <DisplayArea/>
    <Footer/>
  
      </div>
    );
  }
  
}

export default App;
