import { Home, ZingChart, MyMusic } from "../pages";
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/zing-chart",
        element: <ZingChart />,
    },
    {
        path: "/mymusic",
        element: <MyMusic />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export default routes;
