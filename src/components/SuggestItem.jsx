import React from "react";
import styled from "styled-components";
import { IoTrendingUpSharp } from "react-icons/io5";

const SuggestItemStyled = styled.li`
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 8px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: ${({ theme }) => theme.alphaBg};
        color: ${({ theme }) => theme.linkTextHover};
    }
`;

const Icon = styled.span`
    display: flex;
    align-items: center;
    margin-right: 10px;
    color: ${({ theme }) => theme.textSecondary};
`;

const Text = styled.div`
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SuggestItem = () => {
    return (
        <SuggestItemStyled>
            <Icon>
                <IoTrendingUpSharp size={16} />
            </Icon>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                beatae ipsam id expedita cupiditate temporibus harum corporis
                doloribus a aperiam quos, itaque necessitatibus nemo libero,
                eveniet tempora rem, culpa facilis.
            </Text>
        </SuggestItemStyled>
    );
};

export default SuggestItem;
