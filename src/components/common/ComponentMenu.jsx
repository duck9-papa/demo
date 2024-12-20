import {
  ComponentAddIcon,
  TinyArrowIcon,
} from "@components/common/CommonIcons";
// import ComponentCategory from "./ComponentCategory";
import TooltipButton from "./TooltipButton";
import {
  ComponentMenuContainer,
  ComponentsMenuWrap,
  RotateIcon,
} from "../../assets/styles/CommonStyled";
import ComponentCategory from "./ComponentCategory";

const componentTypeCode = [
  {
    subCode: "FIRE",
    subCodeValue: "불 포켓몬",
  },
  {
    subCode: "WATER",
    subCodeValue: "물 포켓몬",
  },
  {
    subCode: "LEAF",
    subCodeValue: "풀 포켓몬",
  },
];

const ComponentMenu = ({ close }) => {
  return (
    <ComponentsMenuWrap>
      <ComponentMenuContainer>
        {componentTypeCode?.map((category, index) => (
          <ComponentCategory key={`${index}categoryKey`} category={category} />
        ))}
      </ComponentMenuContainer>
      <TooltipButton className="p-8" tooltip={"창 닫기"} onClick={close}>
        <ComponentAddIcon />
        <RotateIcon $rotate={true}>
          <TinyArrowIcon />
        </RotateIcon>
      </TooltipButton>
    </ComponentsMenuWrap>
  );
};

export default ComponentMenu;
