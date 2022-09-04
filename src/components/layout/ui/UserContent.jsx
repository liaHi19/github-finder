import React from "react";
import { Link } from "react-router-dom";

import UserImage from "./UserImage";
import UserTop from "./UserTop";
import UserInfoContainer from "./UserInfoContainer";
import UserStatistics from "./UserStatistics";

const UserContent = () => {
  return (
    <>
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
    </>
  );
};

export default UserContent;
