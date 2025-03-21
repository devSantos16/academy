import { StrictMode } from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DetailsPage  from "./components/pages/details.jsx";
import "./index.css";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
    },
    {
      path: '/details',
      element: <DetailsPage/>
    }
  ],
)


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
