import React, { useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";

import UserInfo from "./UserInfo";

const UserInfoContainer = () => {
  const { user } = useContext(GithubContext);
  const { location, blog, twitter_username } = user;

  const userInfo = [
    { id: 1, title: "Location", value: location },
    { id: 2, title: "Website", value: blog },
    { id: 3, title: "Twitter", value: twitter_username },
  ];
  return (
    <div className="w-full rounded-lg shadow-md bg-base-100 stats">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {userInfo.map((info) => {
          if (info.value) {
            return <UserInfo key={info.id} {...info} />;
          }
        })}
      </div>
    </div>
  );
};

export default UserInfoContainer;
