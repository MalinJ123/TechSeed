import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "./RouteConfig";
import { ContextRoot } from "./ContextRoot";
import { RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'Jura, sans-serif',
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <ContextRoot>
      <RouterProvider router={Router} />
    </ContextRoot>
    </ThemeProvider>
  </React.StrictMode>
);
