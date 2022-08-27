import React from "react";
import Storys from "./Storys";
import styled from "styled-components";

const Homediv = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(245, 245, 245);
  height: 100vw;
  width: 100vw;
`;

const Home = () => {
  return (
    <Homediv>
      <Storys />
    </Homediv>
  );
};

export default Home;
