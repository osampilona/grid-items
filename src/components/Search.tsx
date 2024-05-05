import { Input } from "@nextui-org/react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
  return (
    <Input
      startContent={<SearchIcon />}
      isClearable
      radius="lg"
      placeholder="Search for items..."
      size="md"
      // isInvalid={true}
      // errorMessage="Please enter a valid email"
      classNames={{
        base: [
          "lg:w-1/3",
          "flex",
          "flex-row",
          "items-center",
          "justify-center",
          "lg:justify-end",
        ],
        mainWrapper: "w-full",
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
