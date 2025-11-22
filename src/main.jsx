import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Hakkimizda from "./Hakkimizda";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/Hakkimizda",
    element: <Hakkimizda />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
