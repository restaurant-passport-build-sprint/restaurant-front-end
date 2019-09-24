import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 1vw;
  background-color: #F5F5F5;
  height: 7vh;
  position:absolute;
  bottom:0;
  width:100%;

  .fas{
      font-size: 2.2rem;
      color: black;
      opacity: 0.5;
      margin-left: 10px;
  }
  .fas:hover{
      transform: scale(1.3);
      transition: 0.4s;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <div>
        
        <p>Need Help? 24/7 Live Chat Available <a href="#"><i className="fas fa-comment"></i></a></p>
      </div>
      <p>&copy;2019 FoodiePass</p>
    </FooterContainer>
  );
}
