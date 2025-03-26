import { StrictMode, Suspense, lazy } from "react";
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
import { AuthLayout } from "./layout/Auth/AuthLayout.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { RequireAuth } from "./helpers/RequireAuth.tsx";

const Menu = lazy(()=> import ("./pages/menu/Menu"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><Layout /></RequireAuth>,
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
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },

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
