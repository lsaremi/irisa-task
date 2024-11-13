import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider, Theme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { faIR } from "@mui/material/locale";
// import theme from "./themes/theme";

const rootElement = document.getElementById("root");

if (rootElement) {
  const theme = (outerTheme: Theme) =>
    createTheme(
      {
        direction: "rtl",

        typography: {
          fontFamily: "iranyekan, Arial, sans-serif",
        },
        palette: {
          mode: outerTheme?.palette?.mode,
        },
      },
      faIR
    );

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>
  );
}
