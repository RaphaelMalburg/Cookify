import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import Recipes from './pages/Recipes'
import RecipesDetails from './components/RecipesDetails'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Searched from './pages/Searched'
import CuisineSearch from './pages/CuisinesSearch'

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
        path:'login',
        element: <Login />,
      },
      //rotas aninhadas . nested routes - unique identifier
      {
        path:'recipes/:id',
        element:<Recipes />,
      },
      {
        path:'searched/:id',
        element:<Searched />,
      },
      {
        path:'searched/:id/recipes/:id',
        element:<Recipes />,
      },
      {
        path:'cuisinesearch/:id',
        element:<CuisineSearch />,
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
