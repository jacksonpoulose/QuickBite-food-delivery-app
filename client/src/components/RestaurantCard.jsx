import React from 'react'

const RestaurantCard = () => {

  return (
    <div>
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
        <h3>{restaurant.name}</h3>
        <p>{restaurant.address}</p>
        <p>{restaurant.rating}</p>
        <p>{restaurant.cuisines}</p>
    </div>
  )
}

export default RestaurantCard