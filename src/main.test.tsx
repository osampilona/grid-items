import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";

describe("Root Rendering", () => {
  let rootElement: HTMLDivElement;

  beforeAll(() => {
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  });

  afterAll(() => {
    if (document.body.contains(rootElement)) {
      document.body.removeChild(rootElement);
    }
  });
  it("renders without crashing when root element exists", () => {
    createRoot(rootElement).render(
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    );

    expect(document.getElementById("root")).not.toBeNull();
  });

  it("does not render when root element does not exist", () => {
    document.body.removeChild(rootElement);

    createRoot(rootElement).render(
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    );

    expect(document.body.contains(rootElement)).toBe(false);
  });
});
