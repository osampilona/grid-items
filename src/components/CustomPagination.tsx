import { Pagination } from "@nextui-org/pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../state/pagination/paginationSlice";
import { RootState } from "../state/store";

const CustomPagination = () => {
  const dispatch = useDispatch();
  const totalPagesNumber = useSelector(
    (state: RootState) => state.pagination.totalPages
  );
  const initialPage = useSelector(
    (state: RootState) => state.pagination.inititalPage
  );

  return (
    <Pagination
      total={totalPagesNumber}
      initialPage={initialPage}
      onChange={(page) => dispatch(setCurrentPage(page))}
      className="mx-auto my-4 place-content-center w-max"
    ></Pagination>
  );
};

export default CustomPagination;
