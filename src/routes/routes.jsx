import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProfilePage from "../Pages/ProfilePage";
import Register from "../Pages/Register";
import ErrorPage from "../components/NotFoundPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
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
            element: <ProfilePage/>
        }
      ]
    },
  ]);