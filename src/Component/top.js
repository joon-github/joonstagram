import css from "./top.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../Component/icons";
import { AiOutlineSearch } from "react-icons/ai";
const Top = () => {
  const [topMenu, setTopMenu] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [search, setSearch] = useState("");
  const [isOn, setIsOn] = useState(true);
  //const [Rander, setRander] = useState(false);
  const iconSize = 25;

  const inputClick = () => {
    setIsOn(false);
  };

  const inputChange = (e) => {
    setSearch(e.target.value);
  };

  const onIconSelection = (e) => {
    const newTopMenu = [...topMenu];
    newTopMenu.fill(false);
    newTopMenu[Number(e.target.id)] = true;
    setTopMenu(newTopMenu);
  };
  return (
    <div className="top">
      <span className="title">Joonstagram</span>
      <div className="inputArea">
        <input
          className="input"
          type={"text"}
          onClick={inputClick}
          onChange={inputChange}
        ></input>
        <div className={isOn ? "inputStyle" : "hide"} onClick={inputClick}>
          <AiOutlineSearch className="serchIcon" size={30} color="lightgray" />
          <span className="inputText">검색</span>
        </div>
      </div>
      <Icons />
    </div>
  );
};

export default Top;
