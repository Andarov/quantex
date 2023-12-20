import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import About from './pages/About'
import Bot from './pages/Bot'
import Contact from './pages/Contact'
import Home from './pages/Home'
import News from './pages/News'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/how-it-work' element={<Bot/>} />
          <Route path='/contact' element={<Contact/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App