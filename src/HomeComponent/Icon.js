import React from "react";
import styled from "styled-components";

const IconImg = styled.img`
  width: 20px;
  margin-left: 5px;
  opacity: ${(props) => (props.selectIconEfect ? "100%" : "30%")};
  transform: ${(props) =>
    props.selectIconEfect ? "scale(1.2)" : "scale(1.0)"}; ;
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
        onClick={onIconSelection}
        id={icon.id}
        selectIconEfect={selectIconEffect[Number(icon.id)]}
      />
    </IconDiv>
  );
};

export default Icon;
