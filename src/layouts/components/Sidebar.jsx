import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar";
import { Horizontal } from "../../styles";

const Container = styled.div`
    height: ${({ theme }) => `calc(100% - ${theme.playingBarHeight})`};
    width: ${({ theme }) => theme.sidebarWidth};
    background-color: ${({ theme }) => theme.sibarBg};
`;

const BrandContainer = styled.div`
    width: 100%;
    height: ${({ theme }) => theme.headerHeight};
    display: flex;
    align-items: center;
    padding: 0 25px 0 28px;
    a {
        display: inline-block;
        line-height: 0;
    }
`;

const Brand = styled.div`
    display: inline-block;
    width: 120px;
    height: 40px;
    background-image: ${({ theme }) => theme.logo};
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    line-height: 0;

    &:hover {
        filter: brightness(0.9);
    }
`;

function Sidebar() {
    return (
        <Container>
            <BrandContainer>
                <Link to="/" tabIndex={-1}>
                    <Brand />
                </Link>
            </BrandContainer>

            {/* Navbar section */}
            <Navbar />
            <Horizontal style={{ width: "80%", margin: "0 auto" }} />
        </Container>
    );
}

export default Sidebar;
