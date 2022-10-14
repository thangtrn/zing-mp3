import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { Theme } from "./styles";
import GlobalStyles from "./styles/GlobalStyle";
import { Layout, Container } from "./styles";

import routes from "./routes";
import { CustomScrollBar, Header, Sidebar, PlayingBar } from "./components";
import { useState } from "react";

let theme = new Theme();

function App() {
    const [isShowBg, setIsShowBg] = useState(false);
    const [themeValue, setThemeValue] = useState("zingMusicAwards");
    const handleScroll = (e) => {
        const scrollTop = e.target.scrollTop;
        if (scrollTop >= 100) {
            setIsShowBg(true);
        } else {
            setIsShowBg(false);
        }
    };

    return (
        <ThemeProvider theme={theme[themeValue]()}>
            <GlobalStyles />
            <Layout>
                <Header showBg={isShowBg} />
                <Sidebar />
                <Container>
                    <CustomScrollBar onScroll={handleScroll}>
                        <Routes>
                            {routes.map(({ path, element }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            ))}
                        </Routes>
                    </CustomScrollBar>
                </Container>
                <PlayingBar />
            </Layout>
        </ThemeProvider>
    );
}

export default App;
