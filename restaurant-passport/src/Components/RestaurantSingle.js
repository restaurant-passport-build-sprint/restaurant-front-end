import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "./AxiosWithAuth"

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
  const [restList, setRestList] = useState([]);
  useEffect(()=>{
    axiosWithAuth()
    .get(`https://foodie-pass.herokuapp.com/auth/api/${props.match.params.id}`)
    .then (res=>{
      setRestList(res.data.data)
    })
    .catch(err=>{
      console.log(err.response)
    })
  },[])
  return (
    <SingleContainer className="single-container">
      <div className="imagedesc">
        <img src={restList.photo_of_order} />
      </div>
      <div className="descriptions">
        <h1>{restList.restaurant_name}</h1>
        <h2>{restList.restaurant_type}</h2>
        <h2>Your Rating: {restList.food_rating}/5</h2>
        <h2>You paid ${restList.price} on your last visit on {restList.date_of_visit}</h2>
        <h2>After the last visit, you said "{restList.comments}"</h2>
      </div>
    </SingleContainer>
  );
}
