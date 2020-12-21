import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu/menu";
import { Route, BrowserRouter } from "react-router-dom";
import Schedule from "./components/Schedule/schedule";
import FilmShow from "./components/FilmShow/filmshow";
import Reservation from "./components/Reservation/reservation";
const MainWrapper = styled.div`
  background-color: #292829;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  padding-top: 0.1px;
`;

function App() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Menu />
        <Route path="/schedule">
          <Schedule/>
        </Route>
        <Route path="/filmshow">
          <FilmShow/>
        </Route>
        <Route path="/Reservation">
          <Reservation/>
        </Route>
      </BrowserRouter>
    </MainWrapper>
  );
}

export default App;
