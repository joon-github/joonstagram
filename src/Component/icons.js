import React, { useState } from "react";
import icons from "../static/icons";
import Icon from "../Component/Icon";
import css from "../Component/icons.css";

const Icons = () => {
  const onIconSelection = (e) => {
    e.target.class = "a";
    console.log(e.target);
  };
  return (
    <div className="icons">
      {icons.map((icon) => (
        <Icon key={icon.id} icon={icon} onIconSelection={onIconSelection} />
      ))}
    </div>
  );
};

export default Icons;
