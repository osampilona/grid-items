import { Card, CardHeader, CardBody } from "@nextui-org/card";
import items from "../data/grid-items.json";
import { Image } from "@nextui-org/react";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";

const Tiles = () => {
  const totalNumberOfItems = items.length;
  const totalPagesNumber = useSelector(
    (state: RootState) => state.pagination.totalPages
  );
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );

  const showAllItems = useSelector(
    (state: RootState) => state.pagination.showAllItems
  );

  const filteredItems = useSelector(
    (state: RootState) => state.search.filteredItems
  );

  const isSearching = useSelector(
    (state: RootState) => state.search.isSearching
  );
  const itemsPerPage = Math.ceil(totalNumberOfItems / totalPagesNumber);

  const getCurrentPageItems = (currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };
  const currentPageItems = getCurrentPageItems(currentPage);

  let allItems: {
    title: string;
    description: string;
    imagePath: string;
  }[] = [];

  if (filteredItems.length > 0) {
    allItems = filteredItems;
  } else if (isSearching && filteredItems.length === 0) {
    allItems = [];
  } else if (!showAllItems && !filteredItems.length) {
    allItems = currentPageItems;
  } else {
    allItems = items;
  }

  return (
    <>
      <div className="grid w-full lg:grid-cols-responsive gap-4 gap-4 z-10">
        {allItems.map((item, index) => (
          <Card
            className="bg-white p-2 flex flex-row items-start space-x-4"
            key={index}
          >
            <Image
              alt="nextui logo"
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
      {isSearching && filteredItems.length === 0 ? (
        <div className="flex flex-col gap-4 text-center mb-32">
          <h1 className="text-4xl text-hot font-bold">
            Oh no, no items found in search.
          </h1>
          <h3 className="text-xl text-red font-semibold">
            Please try again with a different search term.
          </h3>
        </div>
      ) : null}
    </>
  );
};

export default Tiles;
