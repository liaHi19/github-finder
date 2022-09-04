import React, { useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";

const UserTop = () => {
  const { user } = useContext(GithubContext);
  const { name, login, html_url, hireable, type, bio } = user;

  return (
    <div className="mb-6">
      <h1 className="text-3xl card-title">
        {name ? name : login}
        <div className="ml-2 mr-1 badge badge-success">{type}</div>
        {hireable && <div className="mx-1 badge badge-info">Hireable</div>}
      </h1>
      {bio && <p>{bio}</p>}
      <div className="mt-4 card-actions">
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          Visit Github Profile
        </a>
      </div>
    </div>
  );
};

export default UserTop;
