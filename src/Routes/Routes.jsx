import { createBrowserRouter } from "react-router-dom";
import MainLayous from "../MainLayous/MainLayous";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayous />,
    },
]);