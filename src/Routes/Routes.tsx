import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../constants/routes";
import { Home } from "../Screen/Home";
import { Login } from "../Screen/Login";

import { BrowserRouter, Routes as Switch, Route, Link } from "react-router-dom";

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: routes.HOME,
      element: <Home />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
      path: routes.LOGIN,
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};
