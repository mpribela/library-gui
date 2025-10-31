import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import LibraryContextProvider from "./contexts/LibraryContextProvider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { createRouter } from "@tanstack/react-router";

const queryClient = new QueryClient();
// const queryRouter = createRouter({routeTree, context: { queryClient }})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <LibraryContextProvider> */}
      <App />
      {/* </LibraryContextProvider> */}
    </BrowserRouter>
  </StrictMode>
);
