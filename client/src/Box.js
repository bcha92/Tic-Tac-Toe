import React, { useState } from "react";
import styled from "styled-components";

// Tic Tac Toe Box
const Box = ({ value }) => {
    const [checked, setChecked] = useState(false);
    console.log(value)
    return <BoxWrap
        disabled={checked ? true : false}
        onClick={() => setChecked(true)}
    >
        {value === null ? "N" : value}
    </BoxWrap>
};

// Styled Component
const BoxWrap = styled.button`
    display: block;
    margin: 5%;
    padding: 10%;
    font-size: 500%;
    font-weight: bold;
`;

export default Box;