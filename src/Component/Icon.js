import React, { useState, useRef } from "react";
import styled from "styled-components";
import icons from "../static/icons";

const IconImg = styled.img`
  width: 25px;
  opacity: ${(props) => (props.selectIconEfect ? "100%" : "30%")};
`;
const IconDiv = styled.div`
  margin-left: 10%;
`;

const Icon = ({ icon, selectIconEffect, setSelectIconEffect }) => {
  const onIconSelection = (e) => {
    if (!selectIconEffect[Number(icon.id)]) {
      const newSelectIconEffect = [...selectIconEffect.fill(false)];
      newSelectIconEffect[Number(e.target.id)] = true;
      setSelectIconEffect(newSelectIconEffect);
    }
  };
  return (
    <IconDiv>
      <IconImg
        src={icon.icon}
        className="onIconSelect"
        onClick={onIconSelection}
        id={icon.id}
        selectIconEfect={selectIconEffect[Number(icon.id)]}
      />
    </IconDiv>
  );
};

export default Icon;
