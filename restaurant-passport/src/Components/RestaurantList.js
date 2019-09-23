import React from 'react'
import { data } from "../restaurant.js"
import RestaurantCard from "./RestaurantCard"

export default function RestaurantList() {
    return (
        <div>
            {data.map(item => 
            <RestaurantCard id={item.id} name={item.name} address={item.address} city={item.city} state={item.state} zip={item.zip} rating={item.rating} type={item.type} />
            )}
        </div>
    )
}
