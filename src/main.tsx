import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import "./index.css"
import ErrorPage from './pages/errorPage/ErrorPage.tsx'
import RootLayout from './layouts/RootLayout.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'


const router = createBrowserRouter([
  {
    // path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      }, {}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <RouterProvider router={router} />
    {/* <App /> */}
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
