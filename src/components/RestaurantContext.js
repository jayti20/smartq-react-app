import React from 'react'
const RestaurantContext=React.createContext();
const RestaurantProvider=RestaurantContext.Provider;
const RestaurantConsumer=RestaurantContext.Consumer;
export {RestaurantProvider,RestaurantConsumer}