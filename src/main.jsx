import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"
import Layout from './Components/Layout'
import Certificates from './Components/certificates/Certificates'
import Home from './Components/Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home />

      },
      {
        path:"certificates",
        element: <Certificates />
      }
    ]
  }
])

function App(){
  return(<RouterProvider router={router} />)
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
