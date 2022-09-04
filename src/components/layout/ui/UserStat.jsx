import React from "react";

const UserStat = ({ icon, title, value }) => {
  return (
    <div className="stat">
      <div className="stat-figure text-secondary">
        <span className="text-3xl md:text-5xl">{icon}</span>
      </div>
      <div className="stat-title pr-5">{title}</div>
      <h4 className="stat-value pr-5 text-3xl md:text-4xl">{value}</h4>
    </div>
  );
};

export default UserStat;
