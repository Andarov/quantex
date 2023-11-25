import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/' element={<Home/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App