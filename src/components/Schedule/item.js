import React,{ useState } from "react";
import styled from "styled-components";
import Reservation from "./reservation";

const ItemContrainer = styled.div`
  width: 80%;
  position: relative;
  left: calc(10% - 80px);

  background-color: #1c1b1c;
  margin-bottom: 50px;
  padding: 20px 20px 20px 20px;
  padding-bottom: 80px;
  padding-right: 80px;
  top: 50px;
  display: grid;
  grid-template-columns: 30% 70%;
  @media screen and (max-width: 1000px){
    grid-template-columns: calc(100% - 40px);
    padding: 0;
      width: 98vw;
      left: 1vw;
  }
  -webkit-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.75);
box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.75);
`;

const LeftContainer = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid #0c283b;
  @media screen and (max-width: 1000px){
    border: none;
  }
`;
const RightContainer = styled.div`
  margin-left: 5%;
  width: 100%;
  height: 100%;
  color: white;
  @media screen and (max-width: 1000px){
    margin-left: none;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  margin-top: 10%;
  margin-left: 10%;
  @media screen and (max-width: 1000px){
    margin-top: 70px;
  }
`;

const Title = styled.h1`
  color: #69c8ff;
`;
const TitleProps = styled.span`
  color: white;
`;

const Titleh3 = styled.h3`
  color: #69c8ff;
`;

const Rate = styled.h3`
  position: absolute;
  top: 10px;
  right: 50px;
  color: #69c8ff;
`;

const ReservationContainer = styled.div`
  width: 90%;
  position: absolute;
  bottom: -20px;
  height: 100px;
  @media screen and (max-width: 1000px){
    position: static;
  }

`;

const ReservationButton = styled.button`
  width: 250px;
  border-radius: 50px;
  background-color: #0c283b;
  padding: 15px 15px 15px 15px;
  font-size: 20px;
  color: white;
  font-size: 700;
  outline: none;
  font-style: italic;
  border: none;
  cursor: pointer;
`;

const Exit = styled.button`
    width: 50px;
  border-radius: 50px;
  background-color: #0c283b;
  padding: 15px 15px 15px 15px;
  font-size: 20px;
  color: white;
  font-size: 700;
  outline: none;
  border: none;
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 1000;
  cursor: pointer;
`;

function Item(props) {

  const [reserv,setReserv] = useState('no');


  return (
    <>
    {reserv === 'yes' ? <Reservation data={props}></Reservation> :  null}
      {reserv === 'yes' ? <Exit onClick={e => setReserv('no')} >X</Exit> :  null}
    <ItemContrainer>
      
      
      <LeftContainer>
        <Image alt="asd" src={props.schedule.movie.Poster} />
      </LeftContainer>
      <RightContainer>
        <Title>
          Tytul: <TitleProps>{props.schedule.movie.Title}</TitleProps>
        </Title>
        <h3>{props.schedule.movie.Plot}</h3>
        <Titleh3>
          Państwo: <TitleProps>{props.schedule.movie.Country}</TitleProps>
        </Titleh3>
        <Titleh3>
          Język: <TitleProps>{props.schedule.movie.Language}</TitleProps>
        </Titleh3>
        <Titleh3>
          Czas: <TitleProps>{props.schedule.movie.Runtime}</TitleProps>
        </Titleh3>
        <Titleh3>
          Obsada: <TitleProps>{props.schedule.movie.Actors}</TitleProps>
        </Titleh3>
        <Titleh3>
          Reżyser: <TitleProps>{props.schedule.movie.Director}</TitleProps>
        </Titleh3>
        <Titleh3>
          Data seansu: <TitleProps>{props.schedule.dateStart}</TitleProps>
        </Titleh3>
        <Titleh3>
          Sala: <TitleProps>{props.schedule.room.id}</TitleProps>
        </Titleh3>
        <Rate>
          Oceny:{" "}
          {props.schedule.movie.Ratings[0].Value
            ? props.schedule.movie.Ratings[0].Value
            : "NA"}
        </Rate>
        <ReservationContainer>
           <ReservationButton onClick={e => setReserv('yes')} >Zarezerwuj bilet</ReservationButton> 
        </ReservationContainer>
      </RightContainer>
    </ItemContrainer>
    </>
  );
}

export default Item;
