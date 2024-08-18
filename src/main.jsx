import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import "./index.css"; // Any custom CSS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
