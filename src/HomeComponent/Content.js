import React, { useRef } from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  border: 1px solid rgb(210, 210, 210);
  width: 430px;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
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
`;
const MeneIconImg = styled.img`
  width: 22px;
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

const Content = (data) => {
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
    if (contentDIv.current.scrollLeft < 645) {
      contentDIv.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };
  return (
    <ContentDiv>
      <HeaderDiv>
        <ProfileDiv>
          <HeaderProfile src={data.data.img} className="profile" />
        </ProfileDiv>
        <UserNameDiv>{data.data.name}</UserNameDiv>
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
          <MeneIconImg src={data.data.icons.heartIcon}></MeneIconImg>
        </MeneIconImgDiv>
        <MeneIconImgDiv>
          <MeneIconImg src={data.data.icons.chatIcon}></MeneIconImg>
        </MeneIconImgDiv>
        <MeneIconImgDiv>
          <MeneIconImg src={data.data.icons.shareIcon}></MeneIconImg>
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
            <div className="좋아요 누른사람1"></div>
            <div className="좋아요 누른사람2"></div>
            <div className="좋아요 누른사람3"></div>
            <div className="~외 n명이 좋아합니다.">좋아요 212개</div>
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
