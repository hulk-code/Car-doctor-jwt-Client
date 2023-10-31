import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/ErrorPage/Error";
import Home from "../Component/Home/Home";
import Login from "../Login/Login";
import Register from "../Component/RegisterPage/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
    },
  ]);
  export default router;