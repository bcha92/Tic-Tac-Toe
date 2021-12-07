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
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 20px;
`;

export default Box;