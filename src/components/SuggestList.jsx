import React from "react";
import styled from "styled-components";
import SuggestItem from "./SuggestItem";

const SuggestContainer = styled.div`
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    padding: 13px 10px;
    background-color: ${({ theme }) => theme.primaryBg};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 4px 6px 0 rgb(32 33 36 / 28%);
    line-height: 1.5;
`;

const SuggestTitle = styled.div`
    font-size: 14px;
    font-weight: 700;
    padding: 0 10px 8px;
`;

const SuggestListStyled = styled.ul`
    max-height: calc(100vh - 180px);
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset #fff;
        border-radius: 4px;
    }
`;

const SuggestList = ({ searchValue }) => {
    return (
        <SuggestContainer>
            <SuggestListStyled>
                <SuggestTitle>Đề xuất cho bạn</SuggestTitle>
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
                <SuggestItem />
            </SuggestListStyled>
        </SuggestContainer>
    );
};

export default SuggestList;
