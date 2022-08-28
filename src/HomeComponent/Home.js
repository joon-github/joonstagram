import React from "react";
import Storys from "./Storys";
import styled from "styled-components";
import Contents from "./Contents";

const Homediv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(245, 245, 245);
  height: 100%;
  width: 100vw;
`;

const Home = () => {
  return (
    <Homediv>
      <Storys />
      <Contents />
    </Homediv>
  );
};

export default Home;
