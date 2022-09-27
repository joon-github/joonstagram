import React, { useRef, useState } from "react";
import styled from "styled-components";
import dummyData from "../static/storyProfile";
import rightMoveIcon from "../static/icons/left.png";
import leftMoveIcon from "../static/icons/right.png";

const MoveIconRight = styled.img`
  height: 23px;
`;
const MoveIconLeft = styled.img`
  height: 23px;
`;
const MoveIconRightDiv = styled.div`
  position: fixed;
  display: "flex";
  align-items: center;
  justify-content: center;
  background-color: rgba(240, 240, 240, 50);
  border-radius: 50%;
  height: 23px;
`;

const ContentDiv = styled.div`
  border: 1px solid rgb(210, 210, 210);
  width: 430px;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  .rightMoveIcon {
    position: relative;
    top: 300px;
    left: 400px;
    display: "flex";
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 240, 240, 70%);
    border-radius: 50%;
    height: 23px;
    max-width: 23px;
  }
  .leftMoveIcon {
    position: relative;
    top: 300px;
    left: 10px;
    display: "flex";
    align-items: center;
    justify-content: center;
    background-color: rgba(240, 240, 240, 70%);
    border-radius: 50%;
    height: 23px;
    max-width: 23px;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 5px;
  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-clip: content-box, border-box;
`;

const HeaderProfile = styled.img`
  border: 1px solid white;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  object-fit: cover;
`;

const UserNameDiv = styled.div`
  display: flex;
  font-weight: bold;
  width: 330px;
  margin: 10px;
`;

const MoreIconImg = styled.img`
  width: 14px;
  height: 14px;
`;

const ContentMainDiv = styled.div`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ContentMainImg = styled.img`
  height: 430px;
  width: 430px;
  object-fit: cover;
`;
const ContentsMainImgContainer = styled.div`
  height: 430px;
  width: 430px;
`;
const MenusDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 430px;
  height: 46px;
`;
const MeneIconImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin-left: 3px;
  transition: all, 0.3s;
  &:hover {
    cursor: pointer;
  }
  img {
    width: 22px;
    &.heartIcon {
      filter: invert(25%) sepia(90%) saturate(5927%) hue-rotate(354deg)
        brightness(108%) contrast(127%);
      animation-name: scaleBounce;
      animation-duration: 0.15s;
      animation-duration: alternate;
      /* animation-duration: infinite; */
    }
    @keyframes scaleBounce {
      from {
        scale: 1;
      }
      to {
        scale: 1.3;
      }
    }
  }
`;

const ContentListIcon = styled.img`
  margin-top: 3px;
  margin: 3px;
  width: 5px;
  height: 5px;
  filter: invert(52%) sepia(65%) saturate(1370%) hue-rotate(195deg)
    brightness(100%) contrast(101%);
`;
const ContentBookMarkIcon = styled.img`
  margin-left: 150px;
  width: 22px;
`;

const MeneSectionDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
`;

const LikeConteiner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: medium;
  margin-left: 10px;
  div {
    font-weight: bold;
    margin-right: 5px;
    margin-left: 5px;
  }
  img {
    height: 20px;
    width: 20px;
    object-fit: cover;
    border-radius: 50%;
    margin: 5px;
  }
`;

const Content = (data) => {
  const [selectIcon, setSelectIcon] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const dotRendring = () => {
    const result = [];
    for (let i = 0; i < data.data.contents.length; i++) {
      result.push(
        <ContentListIcon src={data.data.icons.dotIcon}></ContentListIcon>
      );
    }
    return result;
  };
  const contentDIv = useRef(null);
  const handleCententsScroll = () => {
    if (contentDIv.current.scrollLeft === 1) {
      contentDIv.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    console.log(contentDIv.current.scrollLeft);
  };
  const handleLike = () => {
    setSelectIcon(!selectIcon);
    selectIcon ? setLikeCount(0) : setLikeCount(+1);
  };
  return (
    <ContentDiv>
      <HeaderDiv>
        <ProfileDiv>
          <HeaderProfile src={data.data.img} className="profile" />
        </ProfileDiv>
        <UserNameDiv>
          <div className="rightMoveIcon">
            <MoveIconLeft src={leftMoveIcon}></MoveIconLeft>
          </div>
          <div className="leftMoveIcon">
            <MoveIconLeft src={rightMoveIcon}></MoveIconLeft>
          </div>
          {data.data.name}
        </UserNameDiv>
        <MoreIconImg src={data.data.icons.moreIcon}></MoreIconImg>
      </HeaderDiv>
      <ContentMainDiv ref={contentDIv} onScroll={handleCententsScroll}>
        {data.data.contents.map((img) => (
          <ContentsMainImgContainer>
            <ContentMainImg src={img}></ContentMainImg>
          </ContentsMainImgContainer>
        ))}
      </ContentMainDiv>
      <MenusDiv>
        <MeneIconImgDiv>
          <img
            onClick={handleLike}
            className={selectIcon ? "heartIcon" : null}
            src={data.data.icons.heartIcon}
          ></img>
        </MeneIconImgDiv>
        <MeneIconImgDiv>
          <img src={data.data.icons.chatIcon}></img>
        </MeneIconImgDiv>
        <MeneIconImgDiv>
          <img src={data.data.icons.shareIcon}></img>
        </MeneIconImgDiv>
        <MeneSectionDiv>
          {dotRendring()}
          <ContentBookMarkIcon
            src={data.data.icons.bookMarkIcon}
          ></ContentBookMarkIcon>
        </MeneSectionDiv>
      </MenusDiv>
      <div className="하단영역">
        <div className="하단메뉴">
          <div className="좋아요 영역">
            {selectIcon ? (
              <LikeConteiner>
                <img src={dummyData[9].img}></img>
                <div>{dummyData[9].name}</div>님<div>{likeCount}명</div>이
                좋아합니다.
              </LikeConteiner>
            ) : null}
          </div>
          <div className="댓글 영역">
            <div className="최상위 댓글 영역">
              <div className="userNameDiv"></div>
              <div className="댓글내용"></div>
              <div className="더보기"></div>
            </div>
            <div className="댓글 모두 보기"></div>
            <div className="나머지 댓글 영역">
              <div className="댓글영역">
                <div className="나머지 상단댓글">
                  <div className="userNmae"></div>
                  <div className="댓글내용"></div>
                </div>
                <div className="댓글 좋아요"></div>
              </div>
            </div>
          </div>
          <div className="게시글 작성 일시">
            <div className="n일전"></div>
          </div>
          <div className="댓글달기 영역">
            <div className="댓글달기">
              <div className="이모티콘 고르기"></div>
              <div className="댓글달기 인풋"></div>
              <div className="게시 버튼"></div>
            </div>
          </div>
        </div>
      </div>
    </ContentDiv>
  );
};

export default Content;
