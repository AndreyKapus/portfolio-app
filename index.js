import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import { Global, ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./src/Styles/GlobalStyles";
import { theme } from "./src/Styles/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
