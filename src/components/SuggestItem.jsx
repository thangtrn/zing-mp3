import React, { memo } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

import styled from "styled-components";

const SuggestItemStyled = styled.li`
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.2s ease;

    .suggest-link {
        display: flex;
        align-items: center;
        padding: 8px 10px;
        width: 100%;
    }

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

const SuggestItem = ({
    text,
    link = "",
    icon = <IoSearchOutline size={18} />,
}) => {
    return (
        <SuggestItemStyled>
            <Link to={`/tim-kiem/tat-ca?q=${link}`} className="suggest-link">
                <Icon>{icon}</Icon>
                <Text>{text}</Text>
            </Link>
        </SuggestItemStyled>
    );
};

export default memo(SuggestItem);
