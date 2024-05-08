import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";

describe("App Component", () => {
  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </Provider>
    );
  });
});
