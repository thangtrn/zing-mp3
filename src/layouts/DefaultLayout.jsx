import React, { useState } from "react";
import { CustomScrollBar } from "../components";
import { Header, Sidebar, PlayingBar } from "./components";
import { Layout, Container } from "../styles";

function DefaultLayout({ children }) {
    const [isShowBg, setIsShowBg] = useState(false);

    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop >= 100) {
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
            <PlayingBar />
        </Layout>
    );
}

export default DefaultLayout;
