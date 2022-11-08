import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSystem/Login";
import Register from "../Pages/LoginSystem/Register";
import MyReviews from "../Pages/MyReviews/MyReviews";
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
                loader: ()=> fetch(`http://localhost:5000/services?size=${3}`)
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch(`http://localhost:5000/services?size=${6}`)
            },
            {
                path: '/serviceDetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params})=> fetch(`http://localhost:5000/serviceDetail/${params.id}`)
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
            }
        ]
    }
])