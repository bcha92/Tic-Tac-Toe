import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
// GlobalStyles CSS via styled-components
import GlobalStyles from "./GlobalStyles";

// Main App Component
const App = () => {
  return <AppWrapper>
    <GlobalStyles />
    <BrowserRouter>
    <Header>
      <h1>TIC TAC TOE</h1>
    </Header>

    <Switch>
      <Route exact path="/">Hello</Route>
      <Route path="/test">Test</Route>
    </Switch>
    </BrowserRouter>
  </AppWrapper>
}

// Styled Components
const AppWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Header = styled.header`
  top: 0;
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export default App;