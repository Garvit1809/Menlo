import React from 'react'
import styled from "styled-components";

const Section = styled.div`
position: fixed;
bottom: 0;
/* height: 4rem; */
margin-bottom: 1rem;
/* border: 1px solid red; */

span{
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
}
`

const Footer = () => {
  return (
    <Section>By signing up, you agree to our<span> Terms & Conditions</span> and <span>Privacy Policy</span></Section>
  )
}

export default Footer