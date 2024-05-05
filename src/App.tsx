import CustomPagination from "./components/CustomPagination";
import Search from "./components/Search";
import Tiles from "./components/Tiles";

const App = () => {
  return (
    <div className="bg-cream min-h-screen w-screen flex flex-col items-center justify-between px-8 py-4">
      <nav className="flex flex-col lg:flex-row justify-between w-full gap-4">
        <h1 className="text-3xl font-bold text-blue w-full flex items-center justify-center lg:justify-start">
          Items Grid
        </h1>
        <Search />
      </nav>
      <Tiles />
      <CustomPagination />
    </div>
  );
};

export default App;
