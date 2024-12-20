import styled from "styled-components";
import {
  CommonWrap,
  GuideRow,
  ProfileContainer,
  ProfileNameTag,
} from "../assets/styles/CommonStyled";
import profileImg from "../assets/images/증명사진.jpg";
import { useEffect, useState } from "react";
import { NotionIcon } from "../assets/icons/CommonIcons";
import { FaArrowLeft } from "react-icons/fa";
import { GradientWrap } from "./SkillView";

const ProfileView = () => {
  const [displayCount, setDisplayCount] = useState(0);
  useEffect(() => {
    if (displayCount < 2500) {
      setTimeout(() => {
        setDisplayCount((pre) => pre + 100);
      }, 100);
    }
  }, [displayCount]);

  const onNotion = () =>
    window.open(
      "https://trapezoidal-secure-931.notion.site/158d746ce5ce8006a665c4db2df94fff"
    );

  return (
    <GradientWrap>
      <ProfileContainer>
        <img alt="profile" src={profileImg} />
        <div className="text-box">
          <ProfileNameTag $on={displayCount >= 500}>
            안녕하세요 개발자 강인호입니다.
          </ProfileNameTag>

          <ProfileNameTag $on={displayCount >= 1500}>
            항상 끊임없이 새로운 것을 탐구합니다.
          </ProfileNameTag>

          <ProfileNameTag className="guide" $on={displayCount >= 2500}>
            <i onClick={onNotion}>
              <NotionIcon />
            </i>
            <GuideRow>
              <FaArrowLeft />
              모든 문서 보러가기
            </GuideRow>
          </ProfileNameTag>
        </div>
      </ProfileContainer>
    </GradientWrap>
  );
};

export default ProfileView;
