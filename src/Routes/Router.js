import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginSystem/Login";
import Register from "../Pages/LoginSystem/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])