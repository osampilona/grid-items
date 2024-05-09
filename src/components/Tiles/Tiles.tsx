import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { RootState } from "../../state/store";

const selectItemData = (state: RootState) => {
  const { items } = state.data;
  const { totalPages, currentPage, showAllItems } = state.pagination;
  const { filteredItems, isSearching } = state.search;

  return {
    items,
    totalPages,
    currentPage,
    showAllItems,
    filteredItems,
    isSearching,
  };
};

const Tiles = () => {
  const {
    items,
    totalPages,
    currentPage,
    showAllItems,
    filteredItems,
    isSearching,
  } = useSelector(selectItemData);
  const totalNumberOfItems = items.length;
  const itemsPerPage = Math.ceil(totalNumberOfItems / totalPages);

  const getCurrentPageItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage, items]);

  const allItems = useMemo(() => {
    if (filteredItems.length > 0) {
      return filteredItems;
    } else if (isSearching) {
      return [];
    } else if (!showAllItems) {
      return getCurrentPageItems;
    } else {
      return items;
    }
  }, [filteredItems, isSearching, showAllItems, getCurrentPageItems, items]);

  return (
    <div className="grid w-full lg:grid-cols-responsive gap-4 gap-4 z-10">
      {allItems.map((item, index) => (
        <Card
          data-testid="card"
          className="bg-white p-2 flex flex-row items-start space-x-4"
          key={index}
        >
          <Image
            alt={`${item.title} image`}
            height={100}
            radius="sm"
            src={item.imagePath}
            width={100}
            className="w-24 h-24 object-cover rounded-lg max-w-none"
          />
          <div className="flex flex-col gap-2 text-blue">
            <CardHeader className="text-l font-semibold py-0 px-0 hover:text-skyBlue">
              {item.title}
            </CardHeader>
            <CardBody className="text-sm py-0 px-0 text-grey">
              {item.description}
            </CardBody>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Tiles;
