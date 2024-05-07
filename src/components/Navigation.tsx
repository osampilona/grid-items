import Form from "./Form";
import Search from "./Search";

const Navigation = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between w-full gap-4 py-8 lg:py-0 mb-4">
      <h1 className="text-3xl font-bold text-blue w-full flex items-center justify-center lg:justify-start">
        Items Grid
      </h1>
      <div className="flex flex-col lg:flex-row-reverse gap-4 w-full justify-start">
        <Search />
        <Form />
      </div>
    </nav>
  );
};

export default Navigation;
