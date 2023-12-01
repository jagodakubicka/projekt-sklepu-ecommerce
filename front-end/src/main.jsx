
import "./styles/theme.css";
import "./styles/globals.css";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { MainPage } from "./views/MainPage/MainPage.jsx"
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { Cart } from "./views/Cart/Cart.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { productListLoader } from "./api/productListLoader.js";
//import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      { path: '/koszyk',
      element: <Cart/>
      },
      { path: '/ulubione',
        element: <Favourites/>
      },
      {
        path:'/:gender?',
        element:<MainPage/>,
        loader:mainPageLoader,
         
        
      },
      {
        path:'/:gender/:category/:subcategory?',
        element:<ProductsList/>,
        loader: productListLoader,
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
