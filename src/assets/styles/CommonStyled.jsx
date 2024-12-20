import styled, { keyframes } from "styled-components";
import { device } from "../Responsive";
import commonStyles from "/src/utils/commonStyles.json";

const scrollStyle = commonStyles.SCROLLBAR_STYLE;
const { pc, mobile } = device;

const mobileQuery = `@media screen and ${mobile}`;
const pcQuery = `@media screen and ${pc}`;

const displaySpread = keyframes`

  to{
    opacity: 1;
    translate: 0 0;
  }

`;

export const CommonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

// eslint-disable-next-line react/prop-types
export const CommonModal = ({ children }) => {
  return (
    <CommonModalBackground>
      <CommonModalWrap>{children}</CommonModalWrap>
    </CommonModalBackground>
  );
};

const CommonModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CommonModalWrap = styled.div`
  padding: 32px;
  border-radius: 16px;
  background-color: #fff;
`;

/** 프로필 뷰 */
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  font-weight: 500;
  img {
    width: 300px;
    height: 400px;
    border-radius: 30px;
  }
`;
export const GuideRow = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ProfileNameTag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
  opacity: 0;
  translate: 0 -100%;
  animation-name: ${({ $on }) => $on && displaySpread};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  i {
    scale: 0.5;
    cursor: pointer;
  }
`;
export const ImgMono = styled.div`
  display: flex;
  overflow: hidden;

  margin: 0;
  padding: 0;
  img {
    border-radius: 30px;
  }
  ${pcQuery} {
    width: 400px;
    height: 400px;
  }

  ${mobileQuery} {
    width: 60vw;
    height: 60vw;
    margin: 0 auto;
  }
`;

export const ImgFilm = styled.div`
  display: flex;

  transition: 1s;
  ${pcQuery} {
    translate: -${({ $displayImg, $value }) =>
        $displayImg * ($value || 401.6)}px 0;
    img {
      width: 400px;
      height: 400px;
      object-fit: cover; /* 이미지가 요소 크기에 맞게 조정되도록 설정 */
    }
  }

  ${mobileQuery} {
    transform: ${({ $displayImg }) =>
      `translateX(calc(-${$displayImg} * var(--viewport-width-60)))`};
    img {
      width: 60vw;
      height: 60vw;
    }
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  gap: 32px;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  ${pcQuery} {
    width: 250px;
    height: 150px;
    padding: 16px;
  }

  border-radius: 16px;
  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  :first-child {
    width: 100px;
    height: 100px;
  }
  :last-child {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    color: #000;
    font-weight: 600;
    font-size: 20px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;

  background-color: #977ced;
  .name {
    font-weight: 600;
    font-size: 20px !important;
    color: #fff;
  }
`;

export const MobileCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px;
  border-radius: 16px;
  background-color: #977ced;
  .name {
    font-weight: 600;
    font-size: 16px !important;
    color: #fff;
  }
  .item-container {
    display: flex;

    flex-wrap: wrap;
    gap: 8px;

    width: 100%;
  }
`;

export const MobileSkillItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(50% - 4px);
  height: 50%;

  border-radius: 16px;
  padding: 8px;
  background-color: #fff;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  span {
    color: #000;
  }
`;

export const PresentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 32px 16px;
  padding-top: 0;
  color: #fff;
`;

export const PresentTitle = styled.h2`
  font-size: 24px;
  margin-top: 32px;
  margin-bottom: 0;
`;

export const PresentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
  opacity: 0;
  translate: -50% 0;
  width: 100%;
  max-width: 910px;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  animation-name: ${({ $on }) => $on && displaySpread};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  text-align: start;
  color: #000;
`;

export const PresentItemTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  h2 {
    margin: 0;
    margin-bottom: 4px;
  }
  span {
    font-weight: 500;
  }
`;

export const PresentContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  .title {
    font-size: 16px !important;
    font-weight: 700;
  }
  span {
    padding-left: 16px;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  max-width: 1296px;
  margin-top: 32px;
`;

export const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 16px;
  padding: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    scale: 1.02;
  }
  ${pcQuery} {
    width: 300px;
    height: 300px;
  }
`;

export const ProjectItemImg = styled.img.attrs({ alt: "title" })`
  width: 100%;
  height: 80%;
  border-radius: 8px;
`;

export const ProjectDescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
  .period {
    font-size: 12px;
    color: #d9d9d9;
  }
  .title {
    font-size: 16px;
    font-weight: 700;
    color: #222;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 500;
  input,
  textarea {
    min-width: 300px;
    min-height: 30px;
    background-color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    color: #000;
    padding: 0 12px;
    font-family: NotoSans;

    &[type="submit"] {
      margin-top: 24px;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        background-color: #f9f9f9;
      }
    }
  }

  textarea {
    height: 92px;
    padding: 8px;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  ${mobileQuery} {
    flex-direction: column;
  }
`;

export const AvailableArea = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 1088px;
  height: 728px;
  background-color: #fff;
  .base {
    width: 1088px;
    height: 728px;
    position: absolute;
    left: 0;
  }
`;

export const PageComponentArea = styled.div`
  position: relative;
  width: 1088px;
  height: 728px;
`;

export const GridArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  span {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border: 1px solid black;
  }
`;

export const SideItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 296px;
  height: 760px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const PageEditWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageEditContainer = styled.div`
  display: flex;
  gap: 24px;
  /* 임시 코드 */
  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-select: none;
  }
  div {
    box-sizing: border-box;
    user-select: none;
  }
`;

export const RegisteTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  font-weight: 700;
  font-size: 18px;
  div {
    display: flex;
    gap: 0 8px;

    button {
      width: 88px;
      height: 32px;
      border: 1px solid ${commonStyles["GRAY_SCALE"].G500};
      border-radius: 6px;
      font-family: NotoSans;
      font-size: 14px;
    }
  }
`;

const PageWrap = styled.main`
  width: 1440px;
  height: calc(100% - 64px);
  margin: 0 auto;
  div {
    font-family: "NotoSans";
  }
`;

const PageContainer = styled.section`
  // width: 1440px;
`;

export const CommonPage = ({ children }) => {
  return (
    <PageWrap>
      <PageContainer>{children}</PageContainer>
    </PageWrap>
  );
};

export const ItemContainer = styled.div`
  position: relative;
  width: 1120px;
  height: 760px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid ${commonStyles["GRAY_SCALE"]["G400"]};

  border-radius: 8px;

  background-color: ${({ $edit }) =>
    $edit ? "#F0F0F0" : commonStyles["GRAY_SCALE"].WHITE};
`;

export const DragSquare = styled.div.attrs(
  ({ $width, $height, $left, $top }) => ({
    style: {
      width: `${$width}px`,
      height: `${$height}px`,
      left: `${$left}px`,
      top: `${$top}px`,
    },
  })
)`
  opacity: 0.5;
  position: absolute;
  border: 1px solid #eb1c24;
  background-color: #ffeef1;
  z-index: 100;
`;

export const EditGuideArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    color: ${commonStyles["GRAY_SCALE"].G700};
  }
  svg {
    cursor: pointer;
  }
`;

export const EditComponentSideArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 296px;
  height: 760px;
`;

export const SideMiddleArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${commonStyles["GRAY_SCALE"].G400};
  border-radius: 8px;
`;

export const ComponentSelectTab = styled.ul`
  display: flex;
  border-bottom: 1px solid ${commonStyles["GRAY_SCALE"].G400};
`;
export const tabFocusStyle = `color:${commonStyles["GRAY_SCALE"].BLACK};&::before{content:'';position:absolute;width:100%;height:4px;left:0;bottom:-1px;background-color:var(--main-color);}`;

export const ComponentTabItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 40px;
  color: ${commonStyles["GRAY_SCALE"].G600};
  font-weight: 700;
  cursor: pointer;
  ${({ $focus }) => $focus && tabFocusStyle}
  &:hover {
    ${tabFocusStyle}
  }
`;

export const FooterPagingArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 118px;
  border-right: 1px solid ${commonStyles["GRAY_SCALE"].G400};

  .text {
    display: flex;
    gap: 8px;
  }
`;

export const FooterButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 178px;
`;

export const FooterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4px;
  border-radius: 6px;
  background-color: #f0f0f0;

  &.p-8 {
    padding: 4px 8px;
  }
  &.tooltip {
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      ${({ $show, $tooltip }) => {
        return (
          $show &&
          `&::before {
        content: '';
        position: absolute;
        bottom: calc(100% - 4px);
        border-top: 8px solid ${commonStyles["GRAY_SCALE"].G900};
        border-bottom: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
      }
      &::after {
        content: '${$tooltip}';
        position: absolute;
        bottom: calc(100% + 10px);
        padding: 0 8px;
        height: 24px;
        border-radius: 6px;
        background-color: ${commonStyles["GRAY_SCALE"].G900};
        color: ${commonStyles["GRAY_SCALE"].WHITE};
        font-size: 11px;
        line-height: 24px;
        text-align: center;
        white-space: nowrap;
      }`
        );
      }}
    }
  }
`;

export const SideFooterWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 30;
  width: 100%;
  min-height: 48px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

export const RotateIcon = styled.i`
  svg {
    rotate: ${({ $rotate }) => $rotate && "180deg"};
  }
  cursor: pointer;
  height: 24px;

  ${({ $hover }) =>
    $hover &&
    `&:hover {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 6px;
  }`}
`;

export const ComponentsMenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 207px;
  bottom: 0;

  width: 224px;
  height: 640px;
  /* padding: 16px; */
  border-radius: 8px;
  background-color: ${commonStyles["GRAY_SCALE"].WHITE};
  box-shadow: 0 4px 30px 0 rgba(0, 0, 0, 0.3);

  button {
    width: 48px;
    translate: 16px -16px;
  }
`;

export const ComponentMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100% - 64px);
  ${scrollStyle}
`;

export const SidePageRowItem = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  span {
    /* cursor: default !important; */
  }
  i {
    cursor: pointer;
  }
  .border {
    border-bottom: 1px solid ${commonStyles["GRAY_SCALE"].G400};
  }
`;
export const FileIcon = ({ fill }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.66732 2.00058C8.60365 2 8.53217 2 8.45046 2H5.46745C4.72071 2 4.34706 2 4.06185 2.14532C3.81097 2.27316 3.60714 2.47698 3.47931 2.72786C3.33398 3.01308 3.33398 3.38673 3.33398 4.13346V11.8668C3.33398 12.6135 3.33398 12.9867 3.47931 13.2719C3.60714 13.5228 3.81097 13.727 4.06185 13.8548C4.34679 14 4.71999 14 5.46528 14L10.536 14C11.2813 14 11.654 14 11.9389 13.8548C12.1898 13.727 12.3943 13.5228 12.5221 13.2719C12.6673 12.987 12.6673 12.6143 12.6673 11.8691V6.21712C12.6673 6.13531 12.6673 6.06374 12.6667 6M8.66732 2.00058C8.85774 2.00231 8.97821 2.00923 9.09321 2.03684C9.22926 2.0695 9.35922 2.12351 9.47852 2.19661C9.61303 2.27904 9.72853 2.39455 9.95898 2.625L12.0426 4.70866C12.2732 4.93926 12.3879 5.05424 12.4704 5.1888C12.5435 5.30809 12.5975 5.43817 12.6302 5.57422C12.6578 5.68917 12.6649 5.80967 12.6667 6M8.66732 2.00058V3.86667C8.66732 4.6134 8.66732 4.98651 8.81264 5.27173C8.94047 5.52261 9.1443 5.72699 9.39518 5.85482C9.68012 6 10.0533 6 10.7986 6H12.6667M12.6667 6H12.6674"
      stroke={fill || "#737477"}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const rowFocusStyle = `background-color: ${commonStyles["POINT_COLOR"].B100};
    path {
      stroke: ${commonStyles["POINT_COLOR"].B300};
    }`;

export const PageRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  padding: 0 16px 0 40px;
  &:first-child {
    border-top: 1px solid ${commonStyles["GRAY_SCALE"].G400};
  }

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &.selected {
    ${rowFocusStyle}
  }
  &.handle {
    cursor: pointer;
    &:hover {
      ${rowFocusStyle}
    }
  }
  span {
    min-width: 80px;
    min-height: 14px;
    cursor: pointer;
  }
`;

export const SectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  padding: 0 16px;
  font-weight: 700;
  z-index: 10;
  border-top: 1px solid ${commonStyles["GRAY_SCALE"].G400};

  ${({ $sectionIndex }) => $sectionIndex === 0 && "border-top: none;"}

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    span {
      min-width: 80px;
      min-height: 14px;
      cursor: pointer;
    }
  }
`;

export const ComponentMenuRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  font-weight: 400;
  font-size: 12px;

  &.category {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const ComponentRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${commonStyles["GRAY_SCALE"].G400};
`;

export const CommonPokemonBase = styled.div`
  width: ${({ $size }) => $size * 8}px;
  height: ${({ $size }) => $size * 8}px;

  background-color: #f0f0f0;
  img {
    width: ${({ $size }) => $size * 8}px;
    height: ${({ $size }) => $size * 8}px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
`;

export const CommonModalTitle = styled.h1`
  margin-right: auto;
  font-weight: 700;
  font-size: 18px;
`;

export const ModalItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  text-align: start;

  .title {
    width: 56px;
    white-space: nowrap;
  }
  .edit-title {
    width: 72px;
    white-space: nowrap;
  }
`;

export const CommonInput = styled.input`
  width: 184px;
  height: 32px;
  padding: 0px 12px;
  border: 1px solid ${commonStyles.GRAY_SCALE.G500};
  border-radius: 6px;
  box-sizing: border-box;

  &.modal {
    width: 120px;
  }
  &:focus {
    border: 1px solid ${commonStyles.POINT_COLOR.B300};
  }
  &::placeholder {
    color: ${commonStyles.GRAY_SCALE.G400};
  }

  &:disabled {
    background-color: ${commonStyles.GRAY_SCALE.G400};
    ${({ $blur }) => !$blur && "color: black !important;"}
  }
  &.text-disabled {
    color: ${commonStyles.GRAY_SCALE.G400};
  }
`;

export const EditItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 24px 0;
`;

export const CommonSelectWrap = styled.select`
  position: relative;
  box-sizing: border-box;
  width: 120px;
  padding: 6px 12px;
  border: 1px solid ${commonStyles.GRAY_SCALE.G500};
  border-radius: 6px;
  font-size: 14px;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  font-family: NotoSans;
  background: url("/images/common/ico_arrow.png") no-repeat calc(100% - 8px) 50%/16px;
  outline: none;
  select::-ms-expand {
    display: none; /*for IE10,11*/
  }
  &.modal {
    width: 184px;
  }
  &:focus {
    border: 1px solid ${commonStyles.POINT_COLOR.B300};

    background: url("/images/common/ico_arrow_up.png") no-repeat
      calc(100% - 8px) 50%/16px auto;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.05);

    ${({ $blur }) => !$blur && "color: black !important;"}
  }
  &.text-disabled {
    color: ${commonStyles.GRAY_SCALE.G400};
  }
`;

export const AlertModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  white-space: pre-line;
  left: 50%;
  top: 10px;
  translate: -50% 0;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
  border: 1px solid #d9d9d9;
  z-index: 100;
`;

export const AlertClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  cursor: pointer;
  border: 1px solid black;
`;
