import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 10px;
`;
const TopicContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -7px;
`;

const Topic = ({ title, children }) => {
    return (
        <>
            <Title>{title}</Title>
            <TopicContainer>{children}</TopicContainer>
        </>
    );
};

export default Topic;
