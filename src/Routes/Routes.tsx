import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "../Screen/Home";
import { Login } from "../Screen/Login";

import { useLoader } from "../helpers/loader";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: routes.HOME,
      loader: useLoader,
      element: <Home />,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};
