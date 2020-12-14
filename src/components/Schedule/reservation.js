import React from "react";
import styled from "styled-components";

const ReservationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  width: 90vw;
  height: 80vh;
  left: 5vw;
  top: 10vh;
  position: relative;
  background-color: #262626;
  z-index: 600;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ReservationForm = styled.form`
  width: 90%;
  height: 90%;
  position: relative;
  top: 5%;
  left: 5%;
  border-right: 2px solid #0c283b;
`;

const FormInput = styled.input`
  position: relative;
  top: -5px;
  width: 50%;
  left: -10px;
  padding: 10px 10px 10px 10px;
  margin-top: 40px;
`;

const FormLabel = styled.label`
  position: absolute;
  font-size: 20px;
  color: #139ED0;
`;

const FormInpurContrainer = styled.div`
  position: relative;
  z-index: 800;
  height: 100px;
  left: 10%;
  top: 5%;
`;

const ReservationSubmit = styled.div`
    padding: 10px 10px 10px 10px;
    color: white;
    text-align: center;
    width: 200px;
    left: calc(50vw - 200px);
    border: none;
    background-color: #139ED0;
    border-radius: 5px;
    margin-top: 50px;
    margin-left: calc(32.5% - 100px);
    cursor: pointer;
`;

const FormHeader = styled.h1`
    margin-left: 10%;
    color: white;

`;

function Reservation(props) {
  return (
    <ReservationWrapper>
      <Wrapper>
        <ReservationForm>
          <FormHeader>Dane osobowe</FormHeader>
          <FormInpurContrainer>
            <FormLabel for="name">Imie</FormLabel>
            <FormInput id="name"></FormInput>
          </FormInpurContrainer>
          <FormInpurContrainer>
            <FormLabel for="surname">Nazwisko</FormLabel>
            <FormInput id="surname"></FormInput>
          </FormInpurContrainer>
          <FormInpurContrainer>
            <FormLabel for="email">E-Mail</FormLabel>
            <FormInput id="email"></FormInput>
          </FormInpurContrainer>
          <ReservationSubmit>Zarezerwuj</ReservationSubmit>
        </ReservationForm>
      </Wrapper>
    </ReservationWrapper>
  );
}

export default Reservation;
