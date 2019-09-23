import React from 'react'

export default function RestaurantCard(props) {
    return (
        <div id={props.id}>
            <h2>Name: {props.name}</h2>
            <p>Address: {props.address}, {props.city}, {props.state}, {props.zip}</p>
            <p>Rating: {props.rating}</p>
            <p>Type: {props.type}</p>
        </div>
    )
}
