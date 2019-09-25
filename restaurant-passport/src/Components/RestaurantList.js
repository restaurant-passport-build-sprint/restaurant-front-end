import React from "react";
import { data } from "../restaurant.js";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";

const CardList = styled.div`
  width: 50%;
  max-width: 1080px;
  min-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #F5F5F5;
`;

export default function RestaurantList() {
  return (
    <div>
      <h1>Visited Restaurants</h1>
      <CardList>
        {data.map(item => (
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
