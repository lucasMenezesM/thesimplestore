import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home/page/Home";
import ProductsPage from "./routes/productsPage/ProcutsPage";
import Error from "./routes/Error/Error";
import ProductDetails from "./routes/productDetails/ProductDetails";
import Contact from "./routes/contact/page/Contact";
import About from "./routes/about/page/About";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    // index: true, // Define a rota "/home" como página inicial
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
