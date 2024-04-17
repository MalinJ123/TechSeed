import React from "react";
import { createHashRouter } from "react-router-dom";

// Root
import { Root } from "./routes/Root.jsx";

// Routes
import Start from "./routes/Start.jsx";
import Kontakt from "./routes/Kontakt.jsx";
import Organisation from "./routes/Organisation.jsx";


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
        path: "/organisation",
        element:<Organisation/>,
      }
    ],
  },
]);