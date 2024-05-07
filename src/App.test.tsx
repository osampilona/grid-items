import { render, screen } from "./utils/test-utils";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App";

describe("App", () => {
  it("Testing if App has component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
  });
});
