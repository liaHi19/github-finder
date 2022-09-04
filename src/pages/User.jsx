import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { FaAvianex } from "react-icons/fa";

import GithubContext from "../context/github/GithubContext";

import Spinner from "../components/layout/Spinner";
import UserTop from "../components/layout/ui/UserTop";
import UserImage from "../components/layout/ui/UserImage";
import UserInfoContainer from "../components/layout/ui/UserInfoContainer";
import UserStatistics from "../components/layout/ui/UserStatistics";

const User = () => {
  const { getUser, loading } = useContext(GithubContext);
  const { login } = useParams();

  useEffect(() => {
    getUser(login);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <UserImage />
          <div className="col-span-2">
            <UserTop />
            <UserInfoContainer />
          </div>
        </div>
        <UserStatistics />
      </div>
    </>
  );
};

export default User;
