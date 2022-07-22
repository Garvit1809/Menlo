import React from "react";
import styled from "styled-components";
import LogoImg from "../../Assets/Menlo_logo_Red_BG.png";

const Section = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0 2rem 0;
  /* border: 1px solid blue; */

  img {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 46px;
    font-size: 2.8rem;
    text-align: center;
    /* border: 1px solid red; */
  }

  h5 {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #656565;
    line-height: 27px;
    text-align: center;

    @media only screen and (max-width: 1235px) {
      
    }
  }

  @media only screen and (max-width: 1235px) {
      width: 100%;
    }
`;

const Header = () => {
  return (
    <Section>
      <img src={LogoImg} alt="logo" />
      <h1>Welcome to Menlo</h1>
      <h5>Super effective prospecting is just one click away</h5>
    </Section>
  );
};

export default Header;
