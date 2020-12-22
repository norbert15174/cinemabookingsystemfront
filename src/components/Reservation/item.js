import React from "react";
import styled from "styled-components";


const ItemContainer = styled.div`
  top: -20px;
  position: relative;
  width: 100%;
  padding: 20px 20px 20px 20px;
  background-color: #212121;
  margin-top: 50px;
  border-radius: 10px;
  display: grid;
  opacity: 1;
  grid-template-columns: 50% 50%;
  animation: mymove 1.5s ease-out;
  @keyframes mymove {
    from {
      opacity: 0;
      top: 100px;
    }
    to {
      top: -20px;
      opacity: 1;
    }
  }
`;

const ItemParagraph = styled.p`
  color: white;
  font-size: 18px;
  font-weight: 700;
`;

const ItemSpan = styled.span`
  color: #702b61;
  font-size: 20px;
  font-weight: 600;
`;

const ItemRightParagraph = styled.p`
  color: white;
  font-size: 45px;
  font-weight: 700;
  margin-left: 10%;
  font-style: italic;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const ItemRightSpan = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-size: 25px;
  left: 50%;
  position: relative;
`;

const Thanks = styled.div`
  width: 100%;
  height: 100%;
  background: -webkit-radial-gradient(top right, #0cddeb, #702b61);
  background: -moz-radial-gradient(top right, #0cddeb, #702b61);
  background: radial-gradient(to bottom left, #0cddeb, #702b61);

  border-radius: 20px;
  padding: 30px 30px 30px 30px;
  position: relative;
  top: -30px;

  &:before {
    width: 300px;
    left: 0;
    border-top-right-radius: 100%;
    height: 50%;
    top: 50%;
    display: block;
    background-color: white;
    position: absolute;
    z-index: 500px;
    fill: white;
    content: "";
  }
`;

function Item(props) {
  return (
    <ItemContainer>
      <div>
        <ItemParagraph>
          <ItemSpan>Imie: </ItemSpan>
          {props.info.name}
        </ItemParagraph>
        <ItemParagraph>
          <ItemSpan>Nazwisko: </ItemSpan>
          {props.info.surname}
        </ItemParagraph>
        <ItemParagraph>
          <ItemSpan>Data seansu: </ItemSpan>
          {props.info.startDate}
        </ItemParagraph>
        <ItemParagraph>
          <ItemSpan>Sala: </ItemSpan>
          {props.info.room}
        </ItemParagraph>
        <ItemParagraph>
          <ItemSpan>Film: </ItemSpan>
          {props.info.movie}
        </ItemParagraph>
        <ItemParagraph>
          <ItemSpan>Miejsce: </ItemSpan>
          {props.info.seat}
        </ItemParagraph>
      </div>
      <Thanks>
        <ItemRightParagraph>Cinema Booking System</ItemRightParagraph>
        <ItemRightSpan>Thank you for your reservation</ItemRightSpan>
      </Thanks>
    </ItemContainer>
  );
}

export default Item;
