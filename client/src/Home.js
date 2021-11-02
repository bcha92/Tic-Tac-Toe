import React from "react";
import styled from "styled-components";

// Home Component
const Home = ({ difficulty, setDifficulty }) => {
    return <HomeWrapper>
        <h2>Select Difficulty and Press Start to Begin</h2>

        <Difficulty>
        <label>Game Difficulty: {
            difficulty === "1" ? "Easy" : difficulty === "2" ?
            "Normal" : "Hard"
        }</label>
        <input // Game Difficulty Slider
            onChange={(e) => setDifficulty(e.target.value)}
            type="range"
            min="1"
            max="3"
            defaultValue="1"
            />
        </Difficulty>

        <button>START</button>
    </HomeWrapper>
};

// Styled Components
const HomeWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    h2 {text-transform: uppercase};

    button {
        cursor: pointer;
        padding: 20px 30px;
        font-weight: bold;
        font-size: 30px;
    };
`;

const Difficulty = styled(HomeWrapper)`
    margin: 50px;
    min-width: 350px;

    label {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 20px;
    };

    input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 50px;
        background: #eee;
        outline: none;
        opacity: 0.7;
        transition: 200ms ease-in-out;
        -webkit-transition: 200ms;
        cursor: pointer;

        &:hover {opacity: 1};
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 100px;
            height: 50px;
            background: yellowgreen;
        };
    };
`;

export default Home;