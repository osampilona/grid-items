import { Pagination } from "@nextui-org/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setShowAllItems,
} from "../state/pagination/paginationSlice";
import { RootState } from "../state/store";
import { Button } from "@nextui-org/react";

const CustomPagination = () => {
  const dispatch = useDispatch();
  const totalPagesNumber = useSelector(
    (state: RootState) => state.pagination.totalPages
  );
  const initialPage = useSelector(
    (state: RootState) => state.pagination.inititalPage
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

  return (
    <div className="flex flex-col items-center">
      {isSearching && filteredItems.length === 0 ? (
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl text-hot font-bold">
            Oh no, no items found in search.
          </h1>
          <h3 className="text-xl text-red font-semibold">
            Please try again with a different search term.
          </h3>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {!showAllItems && (
            <Pagination
              total={totalPagesNumber}
              initialPage={initialPage}
              showControls
              onChange={(page) => dispatch(setCurrentPage(page))}
              className="mx-auto my-4 place-content-center w-max"
              classNames={{
                item: "bg-white text-blue",
              }}
              radius="full"
            />
          )}
          <Button
            className="m-4 border-2 py-2 px-4 cursor-pointer rounded-3xl border-cream text-cream bg-blue hover:bg-skyBlue"
            onPress={() => dispatch(setShowAllItems())}
          >
            {!showAllItems ? "Show All Items" : "Collaps All Items"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomPagination;
