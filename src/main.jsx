import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ This is the missing import
import App from "./App";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter basename="/bookleaf">
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
  <BrowserRouter  basename="/bookleaf">
    <App />
  </BrowserRouter>
);
