import React from 'react'
import { RestaurantConsumer } from './RestaurantContext'

function GenerateButtons() {
    
    return (
        <div>
            <RestaurantConsumer>
            {(value)=>{
                console.log(value.state)
                {value.state.nameOfTheRestaurants[0].forEach((nameOfRestro,index)=>{
                    console.log(nameOfRestro)
                    
                    return <button>{nameOfRestro}</button>
                })}
            }}
            </RestaurantConsumer>
        </div>
    )
}

export default GenerateButtons
