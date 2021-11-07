import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
// Child Component
import Box from "./Box";

// Main Game Component
const Game = () => {
    let history = useHistory(); // Return Home
    const TicTacToe = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    return <GameWrap>
        <TabWrap>{/* Left Side Tab */}
            <button
                onClick={() => history.push("/")}
            >HOME</button>
        </TabWrap>

        <GameWrapper>{/* Game Tab // Right Side Tab */}
            {TicTacToe.map((value, index) => <Box
                key={index}
                value={value}
                id={index}
            />)}
        </GameWrapper>
    </GameWrap>
};

// Styled Components
const GameWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
`;
// Left Side Tab
const TabWrap = styled(GameWrap)`
    flex-direction: column;
    padding: 10px;

    button {
        padding: 10px 20px;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 3px #555;
        transition: 200ms ease-out;

        &:hover {
            transition: 100ms ease-in;
        };
        &:active {
            transform: translateY(2px);
            box-shadow: 0 1px #555;
        };
    };
`;
// Main GameWrapper
const GameWrapper = styled(GameWrap)`
    justify-content: center;
    align-items: center;
    padding: 50px;
    flex: 1;
`;

export default Game;