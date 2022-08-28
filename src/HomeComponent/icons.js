import React, { useState } from "react";
import icons from "../static/icons";
import Icon from "./Icon";
import styled from "styled-components";

const IconsDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 50px;
`;

const Icons = () => {
  const [selectIconEffect, setSelectIconEffect] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <IconsDiv>
      {icons.map((icon) => (
        <Icon
          key={icon.id}
          icon={icon}
          selectIconEffect={selectIconEffect}
          setSelectIconEffect={setSelectIconEffect}
        />
      ))}
    </IconsDiv>
  );
};

export default Icons;
