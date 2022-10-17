import React from "react";

import styled from "styled-components";
import { IoTrendingUpSharp } from "react-icons/io5";

import SuggestItem from "./SuggestItem";
import { suggestForYou } from "../constants";

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

const SuggestList = ({ searchValue, searchData }) => {
    return (
        <SuggestContainer>
            <SuggestListStyled>
                <SuggestTitle>
                    {searchValue.length > 0
                        ? "Từ khóa liên quan"
                        : "Đề xuất cho bạn"}
                </SuggestTitle>

                {searchValue.length <= 0 ? (
                    // Default suggest
                    suggestForYou.map(({ title, link }, idx) => (
                        <SuggestItem
                            key={idx}
                            text={title}
                            link={link}
                            icon={<IoTrendingUpSharp size={16} />}
                        />
                    ))
                ) : (
                    <>
                        {/* {searchData && (
                            <SuggestItem
                                text={searchData.top?.alias}
                                link={searchData.top?.alias}
                            />
                        )} */}
                        {searchData &&
                            searchData.songs?.map((item) => (
                                <SuggestItem
                                    key={item.encodeId}
                                    text={item.title}
                                    link={item.title}
                                />
                            ))}
                        {searchData &&
                            searchData.artists?.map((item) => (
                                <SuggestItem
                                    key={item.id}
                                    text={item.name}
                                    link={item.name}
                                />
                            ))}
                        <SuggestItem
                            text={`Tìm kiếm "${searchValue}"`}
                            link={searchValue}
                        />
                    </>
                )}
            </SuggestListStyled>
        </SuggestContainer>
    );
};

export default SuggestList;
