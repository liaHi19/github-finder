import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import GithubContext from "../context/github/GithubContext";

import ReposList from "../components/layout/repos/ReposList";
import UserContent from "../components/layout/ui/UserContent";
import Spinner from "../components/layout/Spinner";

const User = () => {
  const { login } = useParams();
  const { loading, getUser, getUserRepos } = useContext(GithubContext);

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mx-auto lg:w-10/12">
          <UserContent />
          <ReposList />
        </div>
      )}
    </>
  );
};

export default User;
