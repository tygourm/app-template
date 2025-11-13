import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/app";
import { ThemeProvider } from "@/components/providers/theme";
import "@/index.css";
import "@/lib/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
