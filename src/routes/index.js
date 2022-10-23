import { Home, ZingChart, MyMusic } from "../pages";
import { Navigate } from "react-router-dom";
import routesPath from "./routesPath";

const { home, myMusic, zingChart } = routesPath;

const routes = [
    {
        path: home,
        element: <Home />,
    },
    {
        path: zingChart,
        element: <ZingChart />,
    },
    {
        path: myMusic,
        element: <MyMusic />,
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
];

export default routes;
