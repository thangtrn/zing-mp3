import React from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import SearchBox from "./SearchBox";

import styled from "styled-components";

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
const Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 1px 0;
    padding-right: 22px;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
`;

const Header = ({ showBg }) => {
    return (
        <Container show={showBg}>
            <Box>
                <Left>
                    <Btn>
                        {<HiOutlineArrowLeft size={22} className="icon-left" />}
                    </Btn>
                    <Btn>
                        {
                            <HiOutlineArrowRight
                                size={22}
                                className="icon-right"
                            />
                        }
                    </Btn>

                    <SearchBox />
                </Left>
            </Box>
        </Container>
    );
};

export default Header;
