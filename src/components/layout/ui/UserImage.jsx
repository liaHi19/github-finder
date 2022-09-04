import React, { useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";

const UserImage = () => {
  const {
    user: { name, login, avatar_url },
  } = useContext(GithubContext);
  return (
    <div className="custom-card-image mb-6 md:mb-0">
      <div className="rounded-lg shadow-xl card image-full">
        <figure>
          <img src={avatar_url} alt={login} />
        </figure>
        <div className="card-body justify-end">
          <h2 className="card-title mb-0">{name ? name : login}</h2>
          <p className="flex-grow-0">{name && login}</p>
        </div>
      </div>
    </div>
  );
};

export default UserImage;
