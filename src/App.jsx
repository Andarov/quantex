import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import News from './pages/News'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App