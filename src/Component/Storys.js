import React, { useRef, useState } from "react";
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
const MoveIconLeftDiv = styled.div`
  display: ${(props) => (props.IsDisplay ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 50);
  border-radius: 50%;
  height: 23px;
`;
const MoveIconRightDiv = styled.div`
  display: ${(props) => (props.IsDisplay ? "flex" : "none")};
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

const Storys = () => {
  const sotorys = useRef(null);
  const [leftBtnDisplay, SetLeftBtnDisplay] = useState(false);
  const [rightBtnDisplay, SetRightBtnDisplay] = useState(true);
  const leftBtn = () => {
    sotorys.current.scrollTo({ left: 0, behavior: "smooth" });
    if (sotorys.current.scrollLeft === 0) {
      SetLeftBtnDisplay(true);
    }
  };
  const rightBtn = () => {
    sotorys.current.scrollTo({ left: 1000, behavior: "smooth" });
    console.log(sotorys.current.scrollLeft);
  };
  const storysDivScroll = () => {
    if (sotorys.current.scrollLeft === 0) {
      SetLeftBtnDisplay(false);
    } else {
      SetLeftBtnDisplay(true);
      SetRightBtnDisplay(true);
    }
    if (sotorys.current.scrollLeft === 260) {
      SetRightBtnDisplay(false);
    }
  };
  return (
    <StorysDiv ref={sotorys} onScroll={storysDivScroll}>
      {storyData.map((profile) => {
        return (
          <Story key={profile.id} img={profile.img} name={profile.name}></Story>
        );
      })}
      <MoveIconDiv>
        <MoveIconRightDiv IsDisplay={rightBtnDisplay}>
          <MoveIconRight src={leftMoveIcon} onClick={rightBtn} />
        </MoveIconRightDiv>
        <MoveIconLeftDiv IsDisplay={leftBtnDisplay}>
          <MoveIconLeft src={rightMoveIcon} onClick={leftBtn} />
        </MoveIconLeftDiv>
      </MoveIconDiv>
    </StorysDiv>
  );
};

export default Storys;
