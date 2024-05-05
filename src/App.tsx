import CustomPagination from "./components/CustomPagination";
import Tiles from "./components/Tiles";

const App = () => {
  return (
    <div className="bg-cream h-screen w-screen flex flex-col items-center justify-between">
      <h1 className="text-3xl font-bold text-center py-4 text-blue">
        Items Grid
      </h1>
      <Tiles />
      <CustomPagination />
    </div>
  );
};

export default App;
