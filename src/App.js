import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu/menu";
import { Route, BrowserRouter } from "react-router-dom";
import Schedule from "./components/Schedule/schedule";
const MainWrapper = styled.div`
  background-color: #292829;
  min-height: 100vh;
  min-width: 100vw;
  position: relative;
  padding-top: 0.1px;
  min-width: 600px;
`;

function App() {
  return (
    <MainWrapper>
      <BrowserRouter>
        <Menu />
        <Route path="/schedule">
          <Schedule/>
        </Route>
      </BrowserRouter>
    </MainWrapper>
  );
}

export default App;
