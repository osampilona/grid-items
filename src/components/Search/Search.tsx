import { Input } from "@nextui-org/react";
import SearchIcon from "../../icons/SearchIcon";
import { RootState } from "../../state/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilteredItems,
  setSearchTerm,
  setIsSearching,
} from "../../state/search/searchSlice";
import { useEffect } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const items = useSelector((state: RootState) => state.data.items);
  const currentPageItems = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  useEffect(() => {
    if (searchTerm.length === 0) {
      dispatch(setFilteredItems(currentPageItems));
      dispatch(setIsSearching(false));
    } else {
      const filteredItem = items.filter((item) =>
        item.title.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
      );
      dispatch(setFilteredItems(filteredItem));
      dispatch(setIsSearching(true));
    }
  }, [searchTerm, dispatch, items, currentPageItems]);

  const handleSearchTermChange = (newSearchTerm: string) => {
    if (newSearchTerm.length === 0) {
      dispatch(setFilteredItems(currentPageItems));
      dispatch(setIsSearching(false));
    }
    dispatch(setSearchTerm(newSearchTerm));
  };

  const handleClearSearch = () => {
    dispatch(setSearchTerm(""));
    dispatch(setFilteredItems(currentPageItems));
    dispatch(setIsSearching(false));
  };

  return (
    <Input
      role="search"
      startContent={<SearchIcon />}
      isClearable
      data-testId="clear-button"
      radius="lg"
      placeholder="Search for items..."
      size="md"
      value={searchTerm}
      onChange={(e) => handleSearchTermChange(e.target.value)}
      onClear={handleClearSearch}
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
  );
};

export default Search;
