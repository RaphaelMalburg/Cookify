import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Recipes from './pages/Recipes'
import RecipesDetails from './pages/RecipesDetails'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'

const router = createBrowserRouter([
  {
    element:<App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:'/',
        element: <Home />,
      },
      {
        path:'recipes',
        element: <Recipes />,
      },
      {
        path:'login',
        element: <Login />,
      },
      //rotas aninhadas . nested routes - unique identifier
      {
        path:'recipes/:id',
        element:<RecipesDetails />,
      },

    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
