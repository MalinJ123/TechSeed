import App from './App.jsx'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './RouteConfig'
import { ContextRoot } from './ContextRoot'
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextRoot>
      <RouterProvider router={Router} />
    </ContextRoot>
  </React.StrictMode>,
)