import React from "react";
import css from "../Component/icon.css";

const Icon = ({ icon, onIconSelection }) => {
  return (
    <div className="icons">
      <img
        src={icon.icon}
        className="onIconSelect"
        onClick={onIconSelection}
        id={icon.id}
      />
    </div>
  );
};

export default Icon;
