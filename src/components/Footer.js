import React, { Component } from 'react'
import './footer.css'
export class Footer extends Component {
    render() {
        return (
            <div>
           
            
            <div className="footer">
              <span>
              <button disabled={this.props.nameOfTheRestaurantsClicked===''} type="button" className="btn btn-style" onClick={()=>{this.props.unavailableAll(this.props.nameOfTheRestaurantsClicked)}}>All Unavailable</button>
              <button disabled={this.props.nameOfTheRestaurantsClicked===''} type="button" className="btn btn-style" onClick={()=>{this.props.availableAll(this.props.nameOfTheRestaurantsClicked)}}>All Available</button>
              </span>
            </div>
            </div>
        )
    }
}

export default Footer
