import React from "react";
import styled from "styled-components";
import Footer from "../Components/RegisterComp/Footer";
import Header from "../Components/RegisterComp/Header";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightcoral;
  background-color: black;
  display: flex;
`;

const MainPage = styled.div`
  width: 98vw;
  height: 96vh;
  background-color: white;
  margin: auto;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  position: relative;
`;

const SignUps = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  /* border: 2px solid green; */

  form {
    display: flex;
    flex-direction: column;

    input{
        border: 1px solid #C5C5C5;
        /* color: #C5C5C5; */
        border-radius: 9px;
        padding: 0.7rem 0 0.7rem 1rem;
        margin-bottom: 1rem;
        font-size: 20px;
        
        &:focus{
            border: 1px solid #C5C5C5;
            outline: none;
        }
    }
  }

  button{
    color: white;
    background-color: #2B2A35;
    font-size: 20px;
    padding: 0.7rem 0;
    border-radius: 9px;
    border: none;
    cursor: pointer;
  }
`;

const Orrrr = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* border: 1px solid red; */
  
  hr {
    width: 43%;
    height: 2px;
    background: #d9d9d9;
    border-radius: 2px;
    border: none;
  }
  
  p {
      /* border: 1px solid red; */
      padding-bottom: 0.2rem;
    color: #A6A4A4;
    font-size: 20px;
  }
`;

const Register = () => {
  return (
    <Section>
      <MainPage>
        <Header />
        <SignUps>
          <button>Continue with Google</button>
          <Orrrr>
            <hr />
            <p>or</p>
            <hr />
          </Orrrr>
          <form>
            <input type="email" name="" id="" placeholder="jon@menlo.com" />
            <button>Continue with Email</button>
          </form>
        </SignUps>
        <Footer />
      </MainPage>
    </Section>
  );
};

export default Register;
