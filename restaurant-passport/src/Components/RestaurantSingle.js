import React from "react";
import styled from "styled-components";

const SingleContainer = styled.div`
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-top: 10%;
  }

  .descriptions{
      align-self:flex-start;
      align-items:flex-start;
      text-align:left;
  }

  .imagedesc{
      align-self: flex-start;
  }

  img{
      max-height:50%;
  }

  p {
    width: 30%;
  }
`;

export default function RestaurantSingle(props) {
  console.log("restaurant single", props);
  const restaurant = props.items.find(
    thing => thing.user_id === Number(props.match.params.id)
  );
  console.log("restaurant", restaurant);
  return (
    <SingleContainer>
      <div className="imagedesc">
        <img src={restaurant.photo_of_order} />
      </div>
      <div className="descriptions">
        <h1>{restaurant.restaurant_name}</h1>
        <h2>{restaurant.restaurant_type}</h2>
        <h2>Your Rating: {restaurant.food_rating}/5</h2>
        <h2>You paid ${restaurant.price} on your last visit on {restaurant.date_of_visit}</h2>
        <h2>After the last visit, you said "{restaurant.comments}"</h2>
      </div>
    </SingleContainer>
  );
}
