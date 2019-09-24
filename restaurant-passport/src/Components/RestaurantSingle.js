import React from 'react'

export default function RestaurantSingle(props) {
    const restaurant = props.items.find(thing => thing.id === Number(props.match.params.id))
    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.name} is a {restaurant.type} restaurant located at {restaurant.address} in {restaurant.city}, {restaurant.state}. It has an average rating of {restaurant.rating}</p>
        </div>
    )
}
