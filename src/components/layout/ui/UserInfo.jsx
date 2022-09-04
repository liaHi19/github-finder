import React from "react";

const UserInfo = ({ title, value }) => {
  const blog = `https://${value}`;
  const twitter = `https://twitter.com/${value}`;
  return (
    <div className="stat">
      <div className="stat-title text-md">{title}</div>
      {title === "Location" ? (
        <h4 className="text-lg stat-value">{value}</h4>
      ) : (
        <div className="text-lg stat-value">
          <a
            href={title === "Website" ? blog : twitter}
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
