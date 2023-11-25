import "./styles/theme.css";
import "./styles/globals.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
//import { MainPage } from "./views/MainPage/MainPage.jsx"
//import { Favourites } from "./views/Favourites/Favourites.jsx";
//import { Cart } from "./views/Cart/Cart.jsx";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<ProductsList/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
