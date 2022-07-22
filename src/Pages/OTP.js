import React, { useState } from "react";
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

const Check = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* border: 2px solid black; */

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 100%;
      color: white;
      background-color: #2b2a35;
      font-size: 20px;
      padding: 0.8rem 0;
      margin-bottom: 0.4rem;
      border-radius: 9px;
      border: none;
      cursor: pointer;
    }

    h5{
      /* border: 1px solid red; */
      font-size: 16px;
      color: #4D4D4D;
      margin: 1rem 0;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border: 1px solid red; */

    h5 {
      margin: 0;
      font-size: 16px;
      font-weight: 400;
      color: #4D4D4D;
    }

    h5.resend{
      color: #2B2A35;
      text-decoration: underline;
      font-weight: 500;
    }

  }
`;

const OtpInput = styled.div`
/* border: 1px solid red; */
display: flex;

input{
  width: 72px;
  height: 72px;
  border: 1px solid #C5C5C5;
  border-radius: 9px;
  font-size: 20px;
  text-align: center;

  &:focus{
    outline: none;
  }
}
`

const OTP = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) {
      return false;
    }
    setOtp([...otp.map((data, idx) => (idx === index ? element.value : data))]);

    if (element.nextSibling) {
      element.nextSibling.focus()
    }
  };

  const handleSubmit = (e) => {
    alert(`OTP entered :- ${otp}`);
    e.preventDefault();
  };

  return (
    <Section>
      <MainPage>
        <Header />
        <Check>
          <form onSubmit={(e) => handleSubmit(e)}>
            <OtpInput>
              {otp.map((data, index) => {
                return (
                  <input
                    type="text"
                    name="otp"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={e => handleChange(e.target, index)}
                    onFocus={e => e.target.select()}
                  />
                );
              })}
            </OtpInput>
            <h5>Enter the code we sent on your email</h5>
            <button>Continue</button>
          </form>
          <div>
            <h5>Use different email</h5>
            <h5 className="resend">Resend Code</h5>
          </div>
        </Check>
        <Footer />
      </MainPage>
    </Section>
  );
};

export default OTP;
