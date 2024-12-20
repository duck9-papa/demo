import styled from "styled-components";
import {
  CategoryContainer,
  CommonWrap,
  ImgFilm,
  ImgMono,
  MobileCategoryContainer,
  MobileSkillItem,
  SkillContainer,
  SkillItem,
} from "../assets/styles/CommonStyled";
import profile1 from "../assets/images/프로필사진_1x1.jpg";
import profile2 from "../assets/images/프로필사진2_1x1.jpg";
import profile3 from "../assets/images/프로필사진3_1x1.jpg";
import { useEffect, useState } from "react";
import { icons } from "../assets/icons/CommonIcons";

import { PC, Mobile } from "../assets/Responsive";

export const GradientWrap = styled(CommonWrap)`
  background: linear-gradient(90deg, #a2c1f8, #977ced);
`;

const PCWrap = styled(CommonWrap)`
  background-color: #b3c0ef;
  flex-direction: column;
  gap: 32px;
  padding: 32px 0;
  .box {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title {
      font-weight: 700;
      font-size: 32px !important;
      color: #977ced;
    }
  }
  .profile {
    display: flex;

    gap: 16px;
    align-items: center;
    img {
      width: 400px;
      height: 400px;
      border: 1px solid #d9d9d9;
      border-radius: 30px;
      object-fit: contain;
    }
  }
  .text-area {
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-weight: 500;
    font-size: 16px;
  }

  .tag-row {
    display: flex;
    span {
      width: 80px;
      font-size: 18px;
      text-align: start;
    }
  }
`;

const MobileWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;
  padding: 16px;
  background-color: #b3c0ef;
  overflow-x: hidden;
  .profile {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .profile-info {
      display: flex;
      flex-direction: column;

      gap: 8px;

      span {
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
`;

const SkillView = () => {
  const [displayImg, setDisplayImg] = useState(0);
  const srcs = [profile1, profile2, profile3];

  const rowItems = [
    { label: "이름:", value: "강인호" },
    { label: "나이:", value: "27세" },
    { label: "경력:", value: "3년차" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setDisplayImg(() => {
        const value = displayImg + 1;
        if (!srcs[value]) {
          return 0;
        }
        return value;
      });
    }, 5000);
  }, [displayImg]);

  const skils = [
    { category: "FrontEnd", list: ["HTML/CSS", "Javascript", "React", "Vue"] },
    { category: "CI/CD", list: ["Github", "CentOs", "Jenkins"] },
    { category: "DB", list: ["Firebase"] },

    { category: "Comunication", list: ["Figma", "Notion", "Slack"] },
  ];

  return (
    <>
      {/* mobile */}
      <Mobile>
        <MobileWrap>
          <div className="profile">
            <ImgMono>
              <ImgFilm $displayImg={displayImg}>
                {srcs.map((i, index) => (
                  <img key={`${index}imgKey`} src={i} />
                ))}
              </ImgFilm>
            </ImgMono>
            <div className="profile-info">
              {rowItems.map((i) => (
                <div key={`${i.value}`} className="tag-row">
                  <span>{i.label}</span>
                  <span>{i.value}</span>
                </div>
              ))}
            </div>
            {skils.map((category) => (
              <MobileCategoryContainer key={category.category}>
                <div className="name">{category.category}</div>
                <div className="item-container">
                  {category.list.map((skill) => (
                    <MobileSkillItem key={skill}>
                      {icons[`${skill}Icon`]?.()}
                    </MobileSkillItem>
                  ))}
                </div>
              </MobileCategoryContainer>
            ))}
          </div>
        </MobileWrap>
      </Mobile>

      {/* pc */}
      <PC>
        <PCWrap>
          <div className="box">
            <div className="title">Profile</div>
            <div className="profile">
              <ImgMono>
                <ImgFilm $displayImg={displayImg}>
                  {srcs.map((i, index) => (
                    <img key={`${index}imgKey`} src={i} />
                  ))}
                </ImgFilm>
              </ImgMono>
              <div className="text-area">
                <h2>안녕하세요. 동물을 사랑하는 개발자 강인호입니다.</h2>
                {rowItems.map((i) => (
                  <div key={`${i.value}`} className="tag-row">
                    <span>{i.label}</span>
                    <span>{i.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="box">
            <div className="title">Skill</div>
            <SkillContainer>
              {/* frontend */}
              {skils.map((category) => (
                <CategoryContainer key={category.category}>
                  <div className="name">{category.category}</div>
                  {category.list.map((skill) => (
                    <SkillItem key={skill}>
                      {icons[`${skill}Icon`]?.()}
                      <span> {skill}</span>
                    </SkillItem>
                  ))}
                </CategoryContainer>
              ))}
            </SkillContainer>
          </div>
        </PCWrap>
      </PC>
      <Mobile></Mobile>
    </>
  );
};

export default SkillView;
