import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.sass";
import React from "react";
import router from "./routes";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./sass/styles.sass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
