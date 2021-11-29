import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

// GlobalStyles CSS via styled-components
import GlobalStyles from "./GlobalStyles";
// Child Components
import Home from "./Home";
import Game from "./Game";

// Main App Component
const App = () => {
  const [difficulty, setDifficulty] = useState("2");

  return <AppWrapper>
    <GlobalStyles />
    <BrowserRouter>
    <Header>
      <h1>TIC TAC TOE</h1>
    </Header>

    <Routes>
      <Route path="/" element={<Home
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </BrowserRouter>
  </AppWrapper>
};

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