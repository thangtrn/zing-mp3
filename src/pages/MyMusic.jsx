import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 6945px;
    margin-top: ${({ theme }) => theme.headerHeight};
    padding-top: 300px;
    padding: 0 ${({ theme }) => theme.paddingSection};
`;

const MyMusic = () => {
    return <Container>My music</Container>;
};

export default MyMusic;
