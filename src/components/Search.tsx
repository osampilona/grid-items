import { Input } from "@nextui-org/react";
import items from "../data/grid-items.json";
import SearchIcon from "../icons/SearchIcon";
import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredItems, setSearchTerm } from "../state/search/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const filteredItem = items.filter((item) => {
    const regex = new RegExp(`(?:^|\\s)${searchTerm.toLowerCase()}`, "i");
    return regex.test(item.title.toLowerCase());
  });

  return (
    <>
      <Input
        startContent={<SearchIcon />}
        isClearable
        radius="lg"
        placeholder="Search for items..."
        size="md"
        value={searchTerm}
        onChange={(e) => {
          dispatch(setSearchTerm(e.target.value));
          dispatch(setFilteredItems(filteredItem));
        }}
        onClear={() => {
          dispatch(setSearchTerm(""));
          dispatch(setFilteredItems([]));
        }}
        classNames={{
          base: [
            "lg:w-1/3",
            "flex",
            "flex-row",
            "items-center",
            "justify-center",
            "lg:justify-end",
          ],
          mainWrapper: "w-full items-center justify-center",
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-white",
          inputWrapper: [
            "shadow-xl",
            "bg-white",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-white",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-white",
            "group-data-[hover=true]:bg-white",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
      />
    </>
  );
};

export default Search;
