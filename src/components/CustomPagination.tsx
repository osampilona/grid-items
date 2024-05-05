import { Pagination } from "@nextui-org/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setShowAllItems,
} from "../state/pagination/paginationSlice";
import { RootState } from "../state/store";

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

  return (
    <>
      {!showAllItems && (
        <Pagination
          total={totalPagesNumber}
          initialPage={initialPage}
          onChange={(page) => dispatch(setCurrentPage(page))}
          className="mx-auto my-4 place-content-center w-max"
          classNames={{
            item: "bg-white text-blue",
          }}
          radius="full"
        />
      )}
      <button
        className="m-4 border-2 py-2 px-4 cursor-pointer rounded-3xl border-cream text-cream bg-blue hover:bg-skyBlue"
        onClick={() => dispatch(setShowAllItems())}
      >
        {!showAllItems ? "Show All Items" : "Show Paginated Items"}
      </button>
    </>
  );
};

export default CustomPagination;
