import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import Tasks from "./pages/Tasks.jsx"
import Dashboard from "./pages/Dashboard.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<App/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/user/dashboard" element={<Dashboard/>} />
      <Route path="/user/tasks" element={<Tasks/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
