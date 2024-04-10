import React from "react";
import { createHashRouter } from "react-router-dom";

// Root
import { Root } from "./routes/Root.jsx";
import Start from "./routes/Start";


export const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
         // Använd Outlet för att rendera barnkomponenter
        path: "/start",
        element: <Start/>,
      },
    ],
  },
]);