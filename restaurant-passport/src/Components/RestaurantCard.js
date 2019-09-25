import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
const Restaurant = styled.div`
  width: 30%;
  height: 400px;
  background-color: #F5F5F5;
  position: relative;
  border-radius: 5px;
  border: 4px solid #39491c;
  margin: 1%;

  @media (max-width: 850px){
    width: 47.5%;
    margin: 1% auto;
  }

  @media (max-width: 630px){
    width: 85%
  }

  .card-header{
    background-color: #39491c
  }

  .card-text {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: #39491c;

    h2 {
      font-size: 2.2rem;
      color:#f5f5f5;
    }

    p {
      text-align: left;
      padding-left: 3%;
      font-size: 1.1rem;
    }

    .fas {
      position: absolute;
      font-size: 6rem;
      opacity: 0.2;
      right: 5%;
      bottom: 8%;
      color: red;
    }
  }
`;

export default function RestaurantCard(props) {
  return (
    <Restaurant>
    <Link to={`/restaurant-list/${props.id}`}>
      <div id={props.id}>
        <div className="card-text">
          <i class="fas fa-pepper-hot"></i>
          <h2>{props.name}</h2>
          <p>
            Cuisine: {props.type}
          </p>
          <p>Visited On: {props.date}</p>
          <p>You Rated It: {props.rating} / 5</p>
          <p>You Spent: ${props.price}</p>
          <p>Your Review: {props.comments}</p>
        </div>
      </div>
      </Link>
    </Restaurant>
  );
}
