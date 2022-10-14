import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: ${({ theme }) => theme.playingBarHeight};
`;

const PlayingBar = () => {
    return <Container>PlayingBar</Container>;
};

export default PlayingBar;
