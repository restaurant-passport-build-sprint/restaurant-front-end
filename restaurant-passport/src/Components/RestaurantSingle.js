import React from 'react'

export default function RestaurantSingle(props) {
    console.log("restaurant single", props)
    const restaurant = props.items.find(thing => thing.id === props.match.params.id)
    console.log("restaurant", restaurant)
    return (
        <div className="restaurant-single">
            <h1>{restaurant.name}</h1>
            <p>{restaurant.name} is a {restaurant.type} restaurant located at {restaurant.address} in {restaurant.city}, {restaurant.state}. It has an average rating of {restaurant.rating}</p>
        </div>
    )
}
