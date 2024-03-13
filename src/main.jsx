import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client"

// Import your App component here
import App from "./App"; // Adjust the path according to your file structure
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
