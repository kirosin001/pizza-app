import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Cart } from "./pages/cart/Cart.tsx";
import { Error } from "./pages/error/Error.tsx";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";

const Menu = lazy(()=> import ("./pages/menu/Menu"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>, 
        loader: async ({ params })=> {
          
          return axios.get(`${PREFIX}/products/${params.id}`)
          
        }
      }
    ],
  },
  {
    path: "/auth",
    element: <></>,
    children: [
      {
        path: "login",
        element: <></>
      },
      {
        path: "register",
        element: <></>
      }
    ]
  }

  {
    path: "*",
    element: <Error />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* <BrowserRouter> */}

    {/* </BrowserRouter> */}
  </StrictMode>
);
