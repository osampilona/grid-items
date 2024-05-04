import Tile from "./components/Tile";

const App = () => {
  return (
    <div className="bg-cream h-screen w-screen">
      <h1 className="text-3xl font-bold text-center py-4 text-blue">
        Items Grid
      </h1>
      <Tile />
    </div>
  );
};

export default App;
