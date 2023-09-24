import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Main/Mainlayout';
import Home from './Pagesall/Home';
import Favourites from './Pagesall/Favourites';
import Login from './Pagesall/Login';
import Phone from './Pagesall/phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('/phones.json'),
      },
      {
        path:'/favourites',
        element:<Favourites></Favourites>,
      },
      {
        path:'/login',
        element:<Login></Login>,
      },
      {
        path:'phone/:id',
        element:<Phone></Phone>,
        loader:()=> fetch('/phones.json'),
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
