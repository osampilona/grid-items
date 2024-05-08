import { Provider } from "react-redux";
import CustomPagination from "./components/CustomPagination";
import Navigation from "./components/Navigation";
import Tiles from "./components/Tiles";
import { store } from "./state/store";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="bg-cream min-h-screen w-screen flex flex-col items-center justify-between px-8 py-2 lg:py-4"
        data-testid="app"
      >
        <Navigation />
        <Tiles />
        <CustomPagination />
      </div>
    </Provider>
  );
};

export default App;
