import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { Theme } from "./styles";
import GlobalStyles from "./styles/GlobalStyle";

import routes from "./routes";
import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";

let theme = new Theme();

function App() {
    const [themeValue, setThemeValue] = useState("zingMusicAwards");

    return (
        <ThemeProvider theme={theme[themeValue]()}>
            <GlobalStyles />
            <DefaultLayout>
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </DefaultLayout>
        </ThemeProvider>
    );
}

export default App;
