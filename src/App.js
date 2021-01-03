import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu/menu";
import { Route, BrowserRouter } from "react-router-dom";
import Schedule from "./components/Schedule/schedule";
import FilmShow from "./components/FilmShow/filmshow";
import Reservation from "./components/Reservation/reservation";
import Main from "./components/Main/main";
import Login from "./components/Login/login";
import Movie from "./components/Movies/movie";
const MainWrapper = styled.div`
  background-color: #292829;
  min-height: 100vh;
  width: 100vw;
  position: relative;
  padding-top: 0.1px;
`;

function App() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/schedule">
          <Schedule/>
        </Route>
        <Route path="/filmshow">
          <FilmShow/>
        </Route>
        <Route path="/Reservation">
          <Reservation/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/movies">
          <Movie/>
        </Route>
        
      </BrowserRouter>
    </MainWrapper>
  );
}

export default App;
