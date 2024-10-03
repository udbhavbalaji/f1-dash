import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@styles/tailwind.css";
import ErgastDataProvider from "@services/ErgastDataProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErgastDataProvider>
      <App />
    </ErgastDataProvider>
  </StrictMode>
);
