import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Statistic from "../components/Statistic";
import { quizData } from "./loadData";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: quizData,
        children: [
            { path: '/', element: <Home /> },
            { path: '/home', element: <Home /> },
            { path: '/Statistic', element: <Statistic /> },
            { path: '/blog', element: <Blog /> },
        ]
    },
])

export default router;