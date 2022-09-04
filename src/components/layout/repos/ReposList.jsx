import React, { useContext } from "react";

import GithubContext from "../../../context/github/GithubContext";

const ReposList = () => {
  const { repos } = useContext(GithubContext);

  return (
    <div className="rounded-lg shadow-lg card bg-base-1">
      {repos.length > 0 ? (
        <div className="card-body">
          <h2 className="text-3xl my-4 font-bold card-title">
            Latest Repositories
          </h2>
          {repos.map((repo) => (
            <h3>{repo.name}</h3>
          ))}
        </div>
      ) : (
        <h4>There are no repositories</h4>
      )}
    </div>
  );
};

export default ReposList;
