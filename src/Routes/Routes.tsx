import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "../Screen/Home";
import { Login } from "../Screen/Login";

import { SignUp } from "../Screen/SignUp";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: routes.HOME,
      element: <Home />,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
    {
      path: routes.REGISTER,
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
};
