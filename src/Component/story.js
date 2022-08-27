import React from "react";
import styled from "styled-components";

const ProfileImg = styled.img`
  width: 50px;
`;
const ProfileDiv = styled.div`
  overflow: hidden;
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const UserName = styled.div`
  font-size: small;
  position: relative;
`;
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 5px;
`;
const Story = ({ key, img, name }) => {
  return (
    <Profile>
      <ProfileDiv>
        <ProfileImg src={img} id={key} alt="profile" />
      </ProfileDiv>
      <UserName>{name}</UserName>
    </Profile>
  );
};

export default Story;
