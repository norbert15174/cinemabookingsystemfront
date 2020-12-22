import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RouteItem = styled(NavLink)`
  font-size: 20px;
  color: white;
  text-decoration: none;
  min-width: 150px;
  font-weight: 500;
`;

const RouterItemContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  top: 50%;
  padding-top: 10px;
  border-right: 1px #69c8ff dotted;
  &:nth-child(4) {
    width: 200px;
    left: calc(50vw - 200px);
    border: none;
    background: -webkit-radial-gradient(top right, #0CDDEB, #702B61);
background: -moz-radial-gradient(top right, #0CDDEB, #702B61);
background: radial-gradient(to bottom left, #0CDDEB, #702B61);
    border-radius: 20px;
  }
`;

const MenuContainer = styled.div`
  width: 98vw;
  position: fixed;
  top: 0;
  height: 50px;
  padding-bottom: 40px;
  padding-left: 1vw;
  padding-right: 1vw;
  z-index: 1000;
  background-color: #1c1b1c;
  display: grid;
  grid-template-columns: 15vw 15vw 15vw 20vw;
`;

function Menu() {



  return (
    <MenuContainer>
      <RouterItemContainer>
        <RouteItem to="/schedule" activeStyle={{ color: "#69c8ff" }}>
          Schedule
        </RouteItem>
      </RouterItemContainer>

      <RouterItemContainer>
        <RouteItem to="/reservation" activeStyle={{ color: "#69c8ff" }}>
          Reservation
        </RouteItem>
      </RouterItemContainer>

      <RouterItemContainer>
        <RouteItem to="/movies" activeStyle={{ color: "#69c8ff" }}>
          New Movies
        </RouteItem>
      </RouterItemContainer>
      
      <RouterItemContainer>
      <RouteItem to="/login" activeStyle={{ color: "#69c8ff" }}>
        Login
      </RouteItem>
    </RouterItemContainer>
      
      
    </MenuContainer>
  );
}

export default Menu;
