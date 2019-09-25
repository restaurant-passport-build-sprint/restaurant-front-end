import React, {useState, useEffect} from "react";
import  data  from "../restaurant.js";
import RestaurantCard from "./RestaurantCard";
import styled from "styled-components";
import axiosWithAuth from './AxiosWithAuth';
const CardList = styled.div`
  width: 50%;
  max-width: 1080px;
  min-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #F5F5F5;
`;

 const List = ()=>{
  const [restList, setRestList] = useState([]);

  useEffect(()=>{
    axiosWithAuth()
    .get('https://foodie-pass.herokuapp.com/auth/api')
    .then (res=>{
      console.log (res);
      // const data = res.data
      setRestList(res.data)
    })
    .catch(err=>{
      console.log(err.response)
      // localStorage.removeItem('token')
      // history.push('/signup')
    })
  },[])
 console.log(restList);
// export default function RestaurantList() {
  return (
    <div>
      <h1>Visited Restaurants</h1>
       {/* <CardList >
        {restList.map(item => (
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
      </CardList>  */}
    </div>
  );
  }

export default List;