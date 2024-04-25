import React from "react";
import { createHashRouter } from "react-router-dom";

// Root
import { Root } from "./routes/Root.jsx";

// Routes
import Start from "./routes/Start.jsx";
import Kontakt from "./routes/Kontakt.jsx";
import Login from "./routes/Login.jsx";
import Project from "./routes/Project.jsx";
import Cooperation from "./routes/Cooperation.jsx";


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
      {
        path: "/kontakt",
        element:<Kontakt/>,
      },
      {
        path: "/projektet-naturkraft",
        element:<Project/>,
      },
      {
        path: "/login",
        element:<Login/>,
      },
      {
        path: "/samarbetspartners",
        element:<Cooperation/>,
      }
    ],
  },
]);