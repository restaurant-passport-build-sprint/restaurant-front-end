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
            id={item.id}
            name={item.name}
            address={item.address}
            city={item.city}
            state={item.state}
            zip={item.zip}
            rating={item.rating}
            type={item.type}
          />
        ))}
      </CardList>
    </div>
  );
}
