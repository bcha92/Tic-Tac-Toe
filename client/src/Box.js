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
const BoxWrap = styled.button`display: flex;`;

export default Box;