import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Icons from "./icons";
import styled from "styled-components";
import searchIcon from "../static/icons/search.png";

const TopDiv = styled.div`
  display: flex;
  margin-top: 0px;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgb(210, 210, 210);
`;

const TitleSpan = styled.span`
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-right: 5%;
  margin-bottom: 10px;
`;

const InputAreaDiv = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;
  margin-bottom: 10px;
`;

const InputStyleDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 20px;
  height: 40px;
`;

const Input = styled.input`
  background-color: rgb(241, 241, 241);
  border: none;
  border-radius: 10px;
  width: 250px;
  height: 35px;
`;

const InputText = styled.span`
  color: rgb(186, 186, 186);
`;

const SearchIcon = styled.img`
  color: rgb(186, 186, 186);
  margin-right: 10px;
  width: 20px;
  opacity: 30%;
  display: ${(props) => (props.searchIconVisible ? "inline-block" : "none")};
`;

const Top = () => {
  const [searchIconVisible, setSearchIconVisible] = useState(true);
  const inputImg = useRef(null);
  const searchInputFocus = useRef(null);
  const handleInputFocus = () => {
    setSearchIconVisible(false);
  };
  const handleInputBlur = () => {
    setSearchIconVisible(true);
  };
  const handleInputClick = () => {
    searchInputFocus.current.focus();
  };

  return (
    <TopDiv>
      <TitleSpan>Joonstagram</TitleSpan>
      <InputAreaDiv>
        <Input
          ref={searchInputFocus}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        ></Input>
        <InputStyleDiv ref={inputImg} onClick={handleInputClick}>
          <SearchIcon searchIconVisible={searchIconVisible} src={searchIcon} />
          {searchIconVisible ? <InputText>??????</InputText> : null}
        </InputStyleDiv>
      </InputAreaDiv>
      <Icons />
    </TopDiv>
  );
};

export default Top;
