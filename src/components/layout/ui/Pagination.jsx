import React, { useContext, useEffect, useState } from "react";
import GithubContext from "../../../context/github/GithubContext";

const Pagination = () => {
  const { nextPage, prevPage, page, perPage, repos } =
    useContext(GithubContext);
  const [lastPage, setLastPage] = useState(false);

  useEffect(() => {
    repos.length < perPage ? setLastPage(true) : setLastPage(false);
  }, [repos.length, perPage]);

  return (
    <div className="flex items-center justify-center pb-3">
      <button className="btn mr-1" onClick={prevPage} disabled={page === 1}>
        Prev
      </button>
      <button className="btn" onClick={nextPage} disabled={lastPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
