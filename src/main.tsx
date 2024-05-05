// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    </React.StrictMode>
  );
}
