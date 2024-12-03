import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/main.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.querySelector(".wrapper")).render(
  <BrowserRouter>
    <App />
    <ToastContainer position="top-center" />
  </BrowserRouter>
);
