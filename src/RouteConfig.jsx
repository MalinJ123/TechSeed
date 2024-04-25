import React from "react";
import { createHashRouter } from "react-router-dom";

// Root
import { Root } from "./routes/Root.jsx";

// Routes
import Start from "./routes/Start.jsx";
import Contact from "./routes/Kontakt.jsx";
import Login from "./routes/Login.jsx";
import Project from "./routes/Project.jsx";
import Cooperation from "./routes/Cooperation.jsx";
import FindOutMore from "./routes/FindOutMore.jsx"


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
        element:<Contact/>,
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
      },
      {
        path: "/vill-du-veta-mer",
        element:<FindOutMore/>,
      }
    ],
  },
]);