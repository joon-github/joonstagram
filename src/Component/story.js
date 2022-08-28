import React from "react";
import styled from "styled-components";

const ProfileImg = styled.img`
  border: 3px solid white;
  border-radius: 100%;
  width: 45px;
  height: 45px;
  object-fit: cover;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
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
