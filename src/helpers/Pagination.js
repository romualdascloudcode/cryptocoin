import { useState } from "react";

function Pagination({ items }) {
  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 3;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return { pagesVisited, itemsPerPage, pageCount, changePage };
}

export default Pagination;
