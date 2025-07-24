import React from 'react'
import './App.css'
import {createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Menu from './Components/Menu/Menu'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'


const router = createHashRouter([
  {path: "" , element: <Layout/> , children: [
    {index: true , element:<Home/>} ,
    {path: "menu" , element:<Menu/>} ,
    {path: "about" , element:<About/>} ,
    {path: "contact" , element:<Contact/>} ,

    {path: "*" , element:<NotFound/>} 
  ]},
])


function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
