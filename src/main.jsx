import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/_reset.css";
import "./styles/_fonts.css";
import "./styles/_base.css";
import "./styles/_layout.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
