import { Home, ZingChart, MyMusic } from "../pages";

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
        path: "/",
        element: <MyMusic />,
    },
];

export default routes;
