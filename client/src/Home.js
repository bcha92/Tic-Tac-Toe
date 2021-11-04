import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Home Page Component
const Home = ({ difficulty, setDifficulty }) => {
    return <HomeWrapper>
        <h2>Select Difficulty and Press Start to Begin</h2>

        <label>Game Difficulty: {
            difficulty === "1" ? "Easy" : difficulty === "2" ?
            "Normal" : "Hard"
        }</label>
        <input // Game Difficulty Slider
            onChange={(e) => setDifficulty(e.target.value)}
            type="range"
            min="1"
            max="3"
            defaultValue={difficulty}
            style={{background: difficulty === "1" ? "darkseagreen" :
            difficulty === "2" ? "lemonchiffon" : "lightsalmon"
            }}
        />

        <Link to="/game">
        <button
            style={{background: difficulty === "1" ? "darkseagreen" :
            difficulty === "2" ? "lemonchiffon" : "lightsalmon"
            }}
        >START</button>
        </Link>
    </HomeWrapper>
};

// Styled Components
const HomeWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    margin: 100px;

    h2 {
        text-transform: uppercase;
        margin-bottom: 50px;
    };

    label {
        font-weight: bold;
        font-size: 24px;
        margin-bottom: 20px;
    };

    input {
        -webkit-appearance: none;
        appearance: none;
        width: 80%;
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
            width: 60px;
            height: 50px;
            background: skyblue;
        };
    };

    button {
        margin-top: 50px;
        cursor: pointer;
        padding: 20px 30px;
        font-weight: bold;
        font-size: 30px;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 4px #555;
        transition: 200ms ease-out;

        &:hover {
            background: skyblue;
            transition: 100ms ease-in;
        };
        &:active {
            transform: translateY(3px);
            box-shadow: 0 1px #555;
        }
    };
`;

export default Home;