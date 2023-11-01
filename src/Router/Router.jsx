import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/ErrorPage/Error";
import Home from "../Component/Home/Home";
import Login from "../Login/Login";
import Register from "../Component/RegisterPage/Register";
import CheckOut from "../Component/CheckOut/CheckOut";
import Booking from "../Component/Booking/Booking";

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
      {
        path: '/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({params})=> fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path: '/booked',
        element: <Booking></Booking>,
      },
    ],
    },
  ]);
  export default router;