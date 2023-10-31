import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Component/ErrorPage/Error";
import Home from "../Component/Home/Home";

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
    ],
    },
  ]);
  export default router;