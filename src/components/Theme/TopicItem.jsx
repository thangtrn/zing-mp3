import React from "react";
import styled from "styled-components";

import { FiCheck } from "react-icons/fi";

const Wrapper = styled.div`
    width: 16.6667%;
    margin-bottom: 20px;
`;

const Card = styled.div`
    padding: 0 7px;
`;
const ImageContainer = styled.div`
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid
        ${({ active, theme }) => (active ? theme.purplePrimary : "transparent")};
    position: relative;
    cursor: pointer;

    &:hover > img {
        transform: scale(1.1);
    }
    &:hover > .topic-overlay {
        display: block;
    }
`;
const Img = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s linear;
`;
const Title = styled.h4`
    padding: 5px 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.36;
    color: ${({ theme }) => theme.color};
    text-transform: capitalize;
`;
const Overlay = styled.div`
    display: none;
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.darkAlpha50};
    justify-content: center;
    transition: all 0.3s linear;
`;
const BtnWrapper = styled.div`
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Button = styled.button`
    width: 100%;
    display: block;
    color: ${({ theme }) => theme.color};
    font-size: 8px;
    font-weight: 500;
    padding: 5px 0;
    background-color: ${({ theme, primary }) =>
        primary ? theme.purplePrimary : "transparent"};
    border: 1px solid ${({ theme }) => theme.purplePrimary};
    border-radius: 50px;
    &:first-child {
        margin-bottom: 10px;
    }
`;
const IconWrapper = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.purplePrimary};
    border-radius: 50px;
`;

const TopicItem = ({ title, src, active = false }) => {
    return (
        <Wrapper>
            <Card>
                <ImageContainer active={active}>
                    <Img src={src} />
                    {active && (
                        <IconWrapper>
                            <FiCheck size={12} />
                        </IconWrapper>
                    )}
                    <Overlay className="topic-overlay">
                        <BtnWrapper>
                            <Button primary>Áp dụng</Button>
                            <Button>Xem trước</Button>
                        </BtnWrapper>
                    </Overlay>
                </ImageContainer>
                <Title>{title}</Title>
            </Card>
        </Wrapper>
    );
};

export default TopicItem;
