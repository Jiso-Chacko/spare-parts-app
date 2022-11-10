import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyledEngineProvider } from "@mui/material/styles";
import ScrollToTop from "./components/Utils/ScrollToTop";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StyledEngineProvider injectFirst>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  </StyledEngineProvider>
);
