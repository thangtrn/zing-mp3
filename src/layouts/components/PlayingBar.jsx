import React from "react";
import styled from "styled-components";
import Media from "../../components/Media";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${({ theme }) => theme.playingBarHeight};
    border-top: 1px solid ${({ theme }) => theme.borderPrimary};
    padding: 0 20px;
    width: 100%;
`;

const PlayingBar = () => {
    return (
        <Container>
            <Media />
        </Container>
    );
};

export default PlayingBar;
