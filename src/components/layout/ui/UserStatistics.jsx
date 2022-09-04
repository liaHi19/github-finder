import React, { useContext } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

import GithubContext from "../../../context/github/GithubContext";

import UserStat from "./UserStat";

const UserStatistics = () => {
  const {
    user: { followers, following, public_repos, public_gists },
  } = useContext(GithubContext);

  const userStatistics = [
    { id: 1, icon: <FaUsers />, title: "Followers", value: followers },
    { id: 2, icon: <FaUserFriends />, title: "Following", value: following },
    { id: 3, icon: <FaCodepen />, title: "Public Repos", value: public_repos },
    { id: 4, icon: <FaStore />, title: "Public Gists", value: public_gists },
  ];
  return (
    <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {userStatistics.map((userStat) => (
          <UserStat key={userStat.id} {...userStat} />
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
