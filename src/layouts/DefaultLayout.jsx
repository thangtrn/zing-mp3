import React, { useState } from "react";
import { CustomScrollBar } from "../components";
import { Header, Sidebar, PlayingBar } from "./components";
import { Layout, Container } from "../styles";
import styled from "styled-components";

const PlayingBox = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
`;

function DefaultLayout({ children }) {
    const [isShowBg, setIsShowBg] = useState(false);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop >= 20) {
            setIsShowBg(true);
        } else {
            setIsShowBg(false);
        }
    };

    return (
        <Layout>
            <Header showBg={isShowBg} />
            <Sidebar />
            <Container>
                <CustomScrollBar onScroll={handleScroll}>
                    {children}
                </CustomScrollBar>
            </Container>
            <PlayingBox>
                <PlayingBar />
            </PlayingBox>
        </Layout>
    );
}

export default DefaultLayout;
