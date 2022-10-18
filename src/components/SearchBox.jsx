import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { SuggestList } from "./Suggest";
import { zingApi } from "../axios";
import { useDebounce } from "../hooks";

const Form = styled.form`
    width: 100%;
    max-width: 540px;
    position: relative;
    background-color: ${({ isFocus, theme }) =>
        isFocus ? theme.primaryBg : theme.alphaColor};
    border-radius: ${({ isFocus }) => (isFocus ? "20px 20px 0 0" : "20px")};
`;

const Container = styled.div`
    height: 40px;
    width: 100%;
    background-color: transparent;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 8px;
`;

const SearchBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    svg {
        color: ${({ theme }) => theme.searchText};
    }
`;

const Input = styled.input`
    margin: 0;
    display: inline-block;
    width: 95%;
    font-size: 14px;
    color: ${({ theme }) => theme.searchText};
    background-clip: padding-box;
    border: 0;
    height: 34px;
    padding: 5px 35px 5px 5px;
    line-height: 34px;
    background-color: transparent;
    &::placeholder {
        color: ${({ theme }) => theme.textPlaceholder};
    }
`;

const CloseBtn = styled(SearchBtn)`
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    height: 100%;
    width: 40px;
    cursor: pointer;

    svg {
        color: ${({ theme }) => theme.textPlaceholder};
    }
`;

const Spin = keyframes`
    100%{
        transform: translateY(-50%) rotate(360deg);
    }
`;

const LoadingStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 3px;
    top: 50%;
    transform: translateY(-50%) rotate(0);
    animation: ${Spin} 1s infinite linear forwards;
`;

const SearchBox = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debounceValue = useDebounce(searchValue, 500);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/tim-kiem/tat-ca?q=${searchValue}`);
        setIsFocus(false);
    };

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            setLoading(false);
            return;
        }

        const fetchSearchAll = async () => {
            try {
                setLoading(true);
                const response = await zingApi.searchAll(debounceValue);
                console.log(response.data);
                setSearchResult(response.data);
            } catch (error) {
                console.log(error.msg);
            }
            setLoading(false);
        };
        fetchSearchAll();
    }, [debounceValue]);

    return (
        <Form onSubmit={handleSubmit} isFocus={isFocus}>
            <Container>
                <SearchBtn>
                    <IoSearchOutline size={24} />
                </SearchBtn>

                <Input
                    type="text"
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
                {searchValue.length > 0 && (
                    <>
                        {loading ? (
                            <LoadingStyled>
                                <AiOutlineLoading3Quarters size={18} />
                            </LoadingStyled>
                        ) : (
                            <CloseBtn onClick={() => setSearchValue("")}>
                                <IoCloseOutline size={20} />
                            </CloseBtn>
                        )}
                    </>
                )}
            </Container>
            {/* Suggest List  */}
            {isFocus && (
                <SuggestList
                    searchValue={searchValue}
                    searchData={searchResult}
                />
            )}
        </Form>
    );
};

export default SearchBox;
