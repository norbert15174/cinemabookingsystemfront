import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RouteItem = styled(NavLink)`
  font-size: 20px;
  color: white;
  text-decoration: none;
  min-width: 150px;
  font-weight: 500;
  @media (max-width: 800px){
    font-size: 14px;
  }
`;

const RouterItemContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
  top: 50%;
  padding-top: 10px;
  border-right: 1px #b5224e dotted;
  &:nth-child(4) {
    width: 200px;
    left: calc(50vw - 200px);
    border: none;
    background-color: #b5224e;
    border-radius: 20px;
  }
  @media (max-width: 800px){
    &:nth-child(4) {
    left: 10px;
    width: 100px;
    border: none;
    height: 30px;
    padding-bottom: 5px;
  }
  border: none;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
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
  @media (max-width: 800px){
    grid-template-columns: 22vw 22vw 22vw 25vw;
  }
`;

function Menu() {



  return (
    <MenuContainer>
      <RouterItemContainer>
        <RouteItem to="/schedule" activeStyle={{ color: "#b5224e" }}>
          Schedule
        </RouteItem>
      </RouterItemContainer>

      <RouterItemContainer>
        <RouteItem to="/reservation" activeStyle={{ color: "#b5224e" }}>
          Reservation
        </RouteItem>
      </RouterItemContainer>

      <RouterItemContainer>
        <RouteItem to="/movies" activeStyle={{ color: "#b5224e" }}>
          New Movies
        </RouteItem>
      </RouterItemContainer>
      
      <RouterItemContainer>
      
      <RouteItem  to={localStorage.getItem('Bearer') !== null ? '/filmshow' : '/login'} activeStyle={{ color: "white" }}>
      {localStorage.getItem('Bearer') !== null ? 'FilmShow' : 'Login'}
      </RouteItem>
    </RouterItemContainer>
      
      
    </MenuContainer>
  );
}

export default Menu;
