import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import QuizOption from "../components/QuizOption";
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
            {
                path: '/statistic',
                element: <Statistic />,
            },
            { path: '/blog', element: <Blog /> },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                },
                element: <QuizOption />
            },
        ]
    },
])

export default router;