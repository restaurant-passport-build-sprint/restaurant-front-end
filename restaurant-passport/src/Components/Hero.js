import React from "react";
import "../App.css";
import styled from "styled-components";
const HeroDiv = styled.header`
  div {
   height: 100px;
   width: 350px;
   display:flex;
   flex-direction: column;
   position: relative;
   z-index: 2;
   align-items:center;
   justify-content: center;
  }

  div::after{
    content: "";
    background: url("#") black;
    opacity: 0.6;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: -1;
    border-radius: 5px;
  }

  h1, p{
    color: #f5f5f5;
  }

  button{
    border-radius: 3px;
    border:none;
    padding: 5px 30px;
    background-color: #c9c4c3;

    &:hover{
      cursor: pointer;
      background-color: #f5f5f5;
      transition: 0.2s;
    }
  }
`;

export default function Hero(props) {
  const handleClick = () => {
    props.history.push("/signup")
  }
  console.log(props)
  return (
    <HeroDiv className="defaultHero">
      <view style={{ justifyContent: "center", alignItems: "center" }}>
        <div>
          <p>Explore new restaurants near you.</p>
          <button onClick={handleClick}>Join Today</button>
        </div>
      </view>
    </HeroDiv>
  );
}
