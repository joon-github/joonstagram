import React from "react";
import storyData from "../static/storyProfile";
import Story from "./story";
import styled from "styled-components";
import rightMoveIcon from "../static/icons/left.png";
import leftMoveIcon from "../static/icons/right.png";

const StorysDiv = styled.div`
  display: flex;
  align-items: center;
  table-layout: fixed;
  overflow: scroll;
  background-color: white;
  width: 430px;
  height: 100px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  margin-top: 25px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const MoveIconRight = styled.img`
  height: 23px;
`;
const MoveIconLeft = styled.img`
  height: 23px;
`;
const MoveIconRightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 50);
  border-radius: 50%;
  height: 23px;
`;
const MoveIconleftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 50);
  position: absolute;
  border-radius: 50%;
  height: 23px;
  width: 23px;
  margin-left: 400px;
`;
const MoveIconDiv = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  table-layout: fixed;
  height: 1px;
  width: 430px;
`;

const leftBtn = () => {
  console.log("a");
};
const rightBtn = () => {
  console.log("a");
};
const Storys = () => {
  return (
    <StorysDiv>
      {storyData.map((profile) => {
        return (
          <Story key={profile.id} img={profile.img} name={profile.name}></Story>
        );
      })}
      <MoveIconDiv>
        <MoveIconleftDiv>
          <MoveIconRight src={leftMoveIcon} onClick={rightBtn} />
        </MoveIconleftDiv>
        <MoveIconRightDiv>
          <MoveIconLeft src={rightMoveIcon} onClick={leftBtn} />
        </MoveIconRightDiv>
      </MoveIconDiv>
    </StorysDiv>
  );
};

export default Storys;
