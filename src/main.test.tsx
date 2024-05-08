import { describe, it, expect, beforeAll } from "vitest";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { NextUIProvider } from "@nextui-org/react";

describe("Root Rendering", () => {
  let rootElement: HTMLDivElement;

  beforeAll(() => {
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);

    createRoot(rootElement).render(
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    );
  });

  it("renders without crashing", () => {
    expect(document.getElementById("root")).not.toBeNull();
  });
});
