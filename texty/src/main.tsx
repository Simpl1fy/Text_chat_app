import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Navbar from './components/Navbar'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        index: true,
        element: <Navigate to="/home" replace />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
