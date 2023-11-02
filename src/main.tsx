import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import LocationPage from './pages/locationPage/LocationPage.tsx'
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
import CharacterPage from './pages/characterPage/CharacterPage.tsx'


const router = createBrowserRouter([
  {
    // path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hackatoon-j2d",
        element: <App />,
      },
      {
        path: "/character/:id",
        element: <CharacterPage />,
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

    <RouterProvider router={router} />

  </React.StrictMode>,
)
