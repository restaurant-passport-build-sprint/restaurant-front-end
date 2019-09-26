import React from "react";
import styled from "styled-components";

const SingleContainer = styled.div`
  height: 86vh;
  display: flex;
  align-items: center;
  margin-top: 10%;
  width: 100%;

  @media (max-width: 1600px){
    flex-direction:column;
    text-align:left;
    img{
      width: 90%;
      margin: 0 auto;
      height: 100%;
    }
    div{
      width: 100%;
    }
    .descriptions{
      align-self:center;
    }
    .imagedesc{
      align-self:center;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
  }

  img{
      max-height:50%;
  }

`;

export default function RestaurantSingle(props) {
  console.log("restaurant single", props);
  const restaurant = props.items.find(
    thing => thing.user_id === Number(props.match.params.id)
  );
  console.log("restaurant", restaurant);
  return (
    <SingleContainer className="single-container">
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
