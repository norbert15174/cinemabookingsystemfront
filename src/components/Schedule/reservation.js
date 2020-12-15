import React, { useState } from "react";
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
  color: #139ed0;
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
  background-color: #139ed0;
  border-radius: 5px;
  margin-top: 50px;
  margin-left: calc(32.5% - 100px);
  cursor: pointer;
`;

const FormHeader = styled.h1`
  margin-left: 10%;
  color: white;
`;

const RoomWrapper = styled.div`
  width: 90%;
  left: 5%;
  top: 10%;
  height: 40%;
  position: relative;
  display: grid;
  grid-template-columns: 10% 10% 10% 10% 20% 10% 10% 10% 10%;
  top: 30%;
`;

const PlaceWraper = styled.div`
  width: 40px;
  height: 30px;
  background-color: ${(props) =>
    props.placeSelected};
  cursor: pointer;
  border-radius: 2px;
  text-align: center;
  padding-top: 10px;
  font-weight: 700;
`;

const Screen = styled.div`
  width: 80%;
  height: 40px;
  font-size: 25px;
  text-align: center;
  background-color: black;
  position: relative;
  left: 10%;
  top: 20%;
  color: white;
  padding: 10px 10px 10px 10px;
`;

function Reservation(props) {
  const [placeSelect, setPlaceSelect] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [keyEmail, setEmailKey] = useState("");
  var check = 0;
  const place = [];
  const spectSeat = [];
  var filmShowId;
  

  function checkValue() {
    check = check === 0 ? 1 : 0;
  }
  function setSeatAmount(e){
    for (let i = 1; i <= e.room.numberOfSeats; i++) place.push(i);
    filmShowId = e.id;
  }

  async function reserv(){
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if(!re.test(email)){
    alert("Zły email");
    return 1;
    }
    if(name.length===0){
      alert("Wprowadz imie");
      return 1;
    };
    if(surname.length===0){
      alert("Wprowadz nazwisko");
      return 1;
    }
    placeSelect === "" ? alert('Wybierz miejsce') : handleItemUpdate();
    
  }

  async function handleItemUpdate() {
    await fetch("http://localhost:8010/filmshow/seatreservation/" + filmShowId, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        surname: surname,
        name: name,
        seat: placeSelect, 
      },)

      
    }).then(response => {if(response.status===200){
        alert('Kod został wysłany na Email');
        setKey('true');
    }});
 //   window.location.reload();
  }

  async function setReservation(){
    await fetch("http://localhost:8010/filmshow/confimation/" + keyEmail, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      }}).then(response => {if(response.status===200){
        window.location.reload();
    }})
  }

  return (
    <ReservationWrapper>
      {props.data.schedule.spectators.map((s) => spectSeat.push(s.seat))}
      {setSeatAmount(props.data.schedule)}
      <Wrapper>
        <ReservationForm>
          <FormHeader>Dane osobowe</FormHeader>
          <FormInpurContrainer>
            <FormLabel for="name">Imie</FormLabel>
            <FormInput id="name" onChange={e => setName(e.target.value)}></FormInput>
          </FormInpurContrainer>
          <FormInpurContrainer>
            <FormLabel for="surname" >Nazwisko</FormLabel>
            <FormInput id="surname" onChange={e => setSurname(e.target.value)}></FormInput>
          </FormInpurContrainer>
          <FormInpurContrainer>
            <FormLabel for="email">E-Mail</FormLabel>
            <FormInput id="email"  onChange={e => setEmail(e.target.value)}></FormInput>
          </FormInpurContrainer>
          <ReservationSubmit onClick={e => reserv()}>Zarezerwuj</ReservationSubmit>
          {key === 'true' ? <h1><br/>Kod <br/><FormInput id="key"  onChange={e => setEmailKey(e.target.value)}></FormInput></h1> : null}
          {key === 'true' ? <ReservationSubmit onClick={e => setReservation()}>Zarezerwuj</ReservationSubmit> : null}
        </ReservationForm>
        <div>
          <Screen>Screen</Screen>
          <RoomWrapper>
            {place.map((p) => (
              <>
                {spectSeat.map((s) =>
                  s === p ? (
                    <PlaceWraper key={p} placeSelected={"red"}>
                      {p}
                      {checkValue()}
                    </PlaceWraper>
                  ) : null
                )}
                {check === 0 ? (
                  <PlaceWraper
                    onClick={(e) => setPlaceSelect(p)}
                    id={p}
                    placeSelected={p === placeSelect ? "yellow" : "green"}
                  >
                    {p}
                  </PlaceWraper>
                ) : (
                  checkValue()
                )}
              </>
            ))}
          </RoomWrapper>
        </div>
      </Wrapper>
    </ReservationWrapper>
  );
}

export default Reservation;
