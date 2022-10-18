import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { useHistoryStack } from "../../hooks";
import { Actions, SearchBox } from "../../components";

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
    const navigate = useNavigate();
    const [stack, active, setActive] = useHistoryStack();

    const handleGoBack = () => {
        if (active > 0) {
            navigate(-1);
            setActive(active - 1);
        }
    };
    const handleGoForward = () => {
        if (active < stack.length) {
            navigate(1);
            setActive(active + 1);
        }
    };

    return (
        <Container show={showBg}>
            <Box>
                <Left>
                    <Btn onClick={handleGoBack} disabled={active === 0}>
                        {<BsArrowLeft size={22} className="icon-left" />}
                    </Btn>
                    <Btn
                        onClick={handleGoForward}
                        disabled={active === stack.length}
                    >
                        {<BsArrowRight size={22} className="icon-right" />}
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
