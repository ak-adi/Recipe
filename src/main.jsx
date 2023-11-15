import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import Home from './components/Home/Home'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AllReceipes from './components/Recipes/AllReceipes'
import RecipeDetail from './components/Recipes/RecipeDetail'
import Contact from './components/ContactUs/Contact'
import {Provider} from 'react-redux'
import store from './app/store'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route
        path='allrecipes'
        element={<AllReceipes />} />
      <Route
        path='recipeDetail/:id'
        element={<RecipeDetail />} />
      <Route
        path='contact'
        element={<Contact />}
      />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
