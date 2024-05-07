import CustomPagination from "./components/CustomPagination";
import Navigation from "./components/Navigation";
import Tiles from "./components/Tiles";

const App = () => {
  return (
    <div className="bg-cream min-h-screen w-screen flex flex-col items-center justify-between px-8 py-2 lg:py-4">
      <Navigation />
      <Tiles />
      <CustomPagination />
    </div>
  );
};

export default App;
