import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Button } from "@nextui-org/react";
import {
  setCurrentPage,
  setShowAllItems,
} from "../../state/pagination/paginationSlice";
import { RootState } from "../../state/store";

const selectPaginationState = (state: RootState) => ({
  totalPagesNumber: state.pagination.totalPages,
  initialPage: state.pagination.initialPage,
  showAllItems: state.pagination.showAllItems,
});

const selectSearchState = (state: RootState) => ({
  filteredItems: state.search.filteredItems,
  isSearching: state.search.isSearching,
});

const CustomPagination = () => {
  const dispatch = useDispatch();
  const { totalPagesNumber, initialPage, showAllItems } = useSelector(
    selectPaginationState
  );
  const { filteredItems, isSearching } = useSelector(selectSearchState);

  const paginationControl = useMemo(
    () => (
      <Pagination
        data-testid="pagination-controls"
        total={totalPagesNumber}
        initialPage={initialPage}
        showControls
        onChange={(page) => dispatch(setCurrentPage(page))}
        className="mx-auto my-4 place-content-center w-max"
        classNames={{ item: "bg-white text-blue" }}
        radius="full"
      />
    ),
    [totalPagesNumber, initialPage, dispatch]
  );

  const handleShowAllItems = () => dispatch(setShowAllItems());

  return (
    <div className="flex flex-col items-center">
      {isSearching && filteredItems.length === 0 ? (
        <div className="flex flex-col gap-4 text-center h-screen items-center justify-center">
          <h1 className="text-4xl text-hot font-bold" data-testid="no-found">
            Oh no, no items found in search.
          </h1>
          <h3 className="text-xl text-red font-semibold" data-testid="no-found">
            Please try again with a different search term.
          </h3>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {!showAllItems && paginationControl}
          <Button
            className="m-4 border-2 py-2 px-4 cursor-pointer rounded-3xl border-cream text-cream bg-blue hover:bg-skyBlue"
            onPress={handleShowAllItems}
          >
            {!showAllItems ? "Show All Items" : "Collapse All Items"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CustomPagination;
