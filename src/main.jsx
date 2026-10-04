import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import siteConfig from "./config/siteConfig.js";
import { applyTheme } from "./utils/helpers.js";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/responsive.css";

applyTheme(siteConfig.colors);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
