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
        <p>
          {restaurant.restaurant_name} is a {restaurant.restaurant_type}{" "}
          restaurant. It has an average rating of {restaurant.food_rating}/5
          stars. You last visited this restaurant on {restaurant.date_of_visit}.
        </p>
      </div>
    </SingleContainer>
  );
}
