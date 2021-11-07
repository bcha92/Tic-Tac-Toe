import React from "react";
import styled from "styled-components";

// Tic Tac Toe Box
const Box = ({ value, id }) => {
    console.log(id, value)
    return <BoxWrap>X</BoxWrap>
};

// Styled Component
const BoxWrap = styled.div`display: flex;`;

export default Box;