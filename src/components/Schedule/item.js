import React from "react";
import styled from "styled-components";

const ItemContrainer = styled.div`

    width: 80%;
    position: relative;
    left: 10%;
    height: 40vw;
    min-height: 500px;
    background-color: #1c1b1c;
    margin-bottom: 20px;
    padding: 20px 20px 20px 20px;
    top: 50px;
    display: grid;
    grid-template-columns: 30% 70%;

`;

const LeftContainer = styled.div`

    width: 100%;
    height: 100%;
    border-right: 2px solid #0c283b;

`;
const RightContainer = styled.div`

    margin-left: 5%;
    width: 95%;
    height: 100%;
    color: white;

`;

const Image = styled.img`

    width: 80%;
    height: 80%;
    margin-top: 10%;
    margin-left: 10%;

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

const Reservation = styled.div`

    width: 90%;
    position: absolute;
    bottom: -20px;
    height: 100px;

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

function Item(props){
    return(
        <ItemContrainer>
           <LeftContainer><Image alt="asd" src={props.schedule.movie.Poster} /></LeftContainer>
           <RightContainer>
               <Title>Tytul: <TitleProps>{props.schedule.movie.Title}</TitleProps></Title>
               <h3>{props.schedule.movie.Plot}</h3>
               <Titleh3>Państwo: <TitleProps>{props.schedule.movie.Country}</TitleProps></Titleh3>
               <Titleh3>Język: <TitleProps>{props.schedule.movie.Language}</TitleProps></Titleh3>
               <Titleh3>Czas: <TitleProps>{props.schedule.movie.Runtime}</TitleProps></Titleh3>
               <Titleh3>Obsada: <TitleProps>{props.schedule.movie.Actors}</TitleProps></Titleh3>
               <Titleh3>Reżyser: <TitleProps>{props.schedule.movie.Director}</TitleProps></Titleh3>
               <Titleh3>Data seansu: <TitleProps>{props.schedule.dateStart}</TitleProps></Titleh3>
               <Titleh3>Sala: <TitleProps>{props.schedule.room.id}</TitleProps></Titleh3>
               <Rate>Oceny: {props.schedule.movie.Ratings[0].Value ? props.schedule.movie.Ratings[0].Value : "NA"}</Rate>
                <Reservation><ReservationButton>Zarezerwuj bilet</ReservationButton></Reservation>
           </RightContainer>
           
        </ItemContrainer>
    )
}

export default Item;
