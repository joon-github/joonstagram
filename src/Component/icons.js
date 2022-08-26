import React, { useState } from "react";
import icons from "../static/icons";
import Icon from "../Component/Icon";
import styled from "styled-components";

const IconsDiv = styled.div`
  display: flex;
  margin-left: 100px;
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
