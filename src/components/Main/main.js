import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Thanks = styled.div`
  width: calc(100vw);
  height: 100vh;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  position: relative;

  &:before {
    width: 50%;
    left: 0;
    border-top-right-radius: 100%;
    height: 50%;
    top: 50%;
    display: block;
    background-color: white;
    position: absolute;
    z-index: 500px;
    fill: white;
    opacity: 1;
    content: "";
    box-shadow: 6px -8px 12px 12px rgba(255, 255, 255, 1);
    -webkit-box-shadow: 6px -8px 12px 12px rgba(255, 255, 255, 1);
    -moz-box-shadow: 6px -8px 12px 12px rgba(255, 255, 255, 1);
    animation: mymove2 1s;
    @keyframes mymove2 {
      from {
        transform: translateX(-50%);
        transform: translateY(150%);
      }
      to {
        transform: translateX(0%);
        transform: translateY(0%);
      }
    }
  }
`;

const Cinema = styled.p`
  position: relative;
  top: 20%;
  font-weight: 700;
  height: 100px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 50px;
  font-style: italic;
  width: 50%;
  text-align: center;
  padding-top: 40px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.6);
  border-top-right-radius: 50px;
  -webkit-box-shadow: -2px 3px 15px 5px rgba(255, 255, 255, 0.54);
  box-shadow: -2px 3px 15px 5px rgba(255, 255, 255, 0.54);
  animation: mymove3 2s;
  @keyframes mymove3 {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

const MenuList = styled.p`
  position: relative;
  top: 10%;
  left: calc(100% - 30%);
  font-weight: 700;
  height: 80px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 40px;
  font-style: italic;
  width: 30%;
  text-align: center;
  padding-top: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  background-color: rgba(255, 255, 255, 0.6);
  border-top-left-radius: 50px;
  -webkit-box-shadow: -2px 3px 15px 5px rgba(255, 255, 255, 0.54);
  box-shadow: -2px 3px 15px 5px rgba(255, 255, 255, 0.54);
  animation: mymove4 2s;
  @keyframes mymove4 {
    from {
      transform: translateX(150%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }
`;

const Nav = styled(NavLink)`

  text-decoration: none; 
  color: rgba(0, 0, 0, 0.7);

`;

function Main() {
  return (
    <Thanks>
      <Cinema>Cinema Booking System</Cinema>
      <MenuList><Nav to="/schedule">Schedule</Nav></MenuList>
      <MenuList><Nav to="/reservation">Reservation</Nav></MenuList>
      <MenuList><Nav to="/movies">New Movie</Nav></MenuList>
    </Thanks>
  );
}

export default Main;
