import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProfilePage from "../Pages/ProfilePage";
import Register from "../Pages/Register";
import ErrorPage from "../components/NotFoundPage/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <PrivetRoutes><Home/></PrivetRoutes>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/profile',
            element: <PrivetRoutes> <ProfilePage/></PrivetRoutes>
        }
      ]
    },
  ]);