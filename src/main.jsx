import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom"
import Layout from './Components/Layout'
import Certificates from './Components/certificates/Certificates'
import Home from './Components/Home'
import {loader as certificatesLoader} from './Components/certificates/Certificates'

import Resume from './Components/resume/Resume'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"",
        element:<Home />,

      },
      {
        path:"certificates",
        element: <Certificates />,
        loader: certificatesLoader
        
      }
    ]
  }
])

function App(){
  return(<RouterProvider router={router} />)
}


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
