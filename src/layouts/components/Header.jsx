import React, { memo, useState } from "react";
import styled from "styled-components";

import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

import SearchBox from "../../components/SearchBox";
import { Actions } from "../../components";

const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: ${({ theme }) => theme.headerHeight};
    width: ${({ theme }) => `calc(100% - ${theme.sidebarWidth})`};
    padding: ${({ theme }) => `0 ${theme.paddingSection}`};
    background-color: ${({ theme, show }) =>
        show ? theme.layoutBg : "transparent"};
    box-shadow: ${({ show, theme }) =>
        show && `0 3px 5px ${theme.headerBoxShadow}`};
    z-index: 99;
`;

const Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Right = styled.div``;

const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: none;
    font-weight: 400;
    padding: 1px 0;
    padding-right: 22px;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    &:disabled {
        opacity: 0.3;
    }
`;

const Header = ({ showBg }) => {
    const [{ prev, next }, setDisable] = useState({
        prev: true,
        next: true,
    });

    return (
        <Container show={showBg}>
            <Box>
                <Left>
                    <Btn disabled={prev}>
                        {<HiOutlineArrowLeft size={22} className="icon-left" />}
                    </Btn>
                    <Btn disabled={next}>
                        {
                            <HiOutlineArrowRight
                                size={22}
                                className="icon-right"
                            />
                        }
                    </Btn>

                    <SearchBox />
                </Left>
                <Right>
                    <Actions />
                </Right>
            </Box>
        </Container>
    );
};

export default memo(Header);
