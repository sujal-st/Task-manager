import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes, Navigate } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Tasks from "./pages/Tasks.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import GetStarted from './pages/GetStarted.jsx'
import FormPage from './FormPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />}>
        <Route index element={<Navigate to="/get-started" />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
        <Route path="/user/tasks" element={<Tasks />} />
      </Route>
      <Route path='/' element={<FormPage/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
