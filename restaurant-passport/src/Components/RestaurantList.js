import React from "react";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";


const CardList = styled.div`
  width: 50%;
  max-width: 1080px;
  min-width: 400px;
  margin: 1vh auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f5f5f5;
`;

export default function RestaurantList(props) {
  console.log("props for restaurant list", props);
  if (!props.items){
    return (
      <div><h1>Loading Items...</h1></div>
    )
  }
  return (
    <div>
      <h1>Visited Restaurants</h1>
      <CardList>
        {props.items.map(item => (
          <RestaurantCard
            id={item.user_id}
            name={item.restaurant_name}
            rating={item.food_rating}
            type={item.restaurant_type}
            comments={item.comments}
            date={item.date_of_visit}
            price={item.price}
            photo={item.photo_of_order}
          />
        ))}
      </CardList>
    </div>
  );
}
