import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSystem/Login";
import Register from "../Pages/LoginSystem/Register";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ReviewEdit from "../Pages/MyReviews/ReviewEdit";
import NotFound from "../Pages/NotFound";
import Services from "../Pages/Services/Services";
import ServiceDetail from "../Pages/Shared/ServiceDetail";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch(`https://crumb-cooking-server-nasar06.vercel.app/services?size=${3}`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch(`https://crumb-cooking-server-nasar06.vercel.app/services?size=${100}`)
            },
            {
                path: '/serviceDetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`https://crumb-cooking-server-nasar06.vercel.app/serviceDetail/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <PrivetRoute><AddServices></AddServices></PrivetRoute>
            },
            {
                path: '/myReviews',
                element: <PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviewEdit/:id',
                element: <ReviewEdit></ReviewEdit>,
                loader: ({params}) => fetch(`https://crumb-cooking-server-nasar06.vercel.app/reviewEdit/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])