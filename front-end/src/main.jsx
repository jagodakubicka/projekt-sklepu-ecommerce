
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
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { productLoader } from "./api/productLoader.js";
import { addProductToFavourites } from "./api/addProductsToFavouritesAction.js";
import { favouritesLoader } from "./api/favouritesLoader.js";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js";

const router = createBrowserRouter([
  {
    path:'/add-to-favourites/:productId',
    action: addProductToFavourites
  },
  {
        path: "/delete-from-favourites/:favouriteId",
        action: deleteFavouriteAction,
    },
  {
    path:'',
    element:<Layout/>,
    children:[
      { path: '/koszyk',
      element: <Cart/>
      },
      { path: '/ulubione',
        element: <Favourites/>,
        loader: favouritesLoader
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
      },
      {
         path:'/:gender/:category/:subcategory/:productId',
         element:<ProductDetails/>,
         loader: productLoader,
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
