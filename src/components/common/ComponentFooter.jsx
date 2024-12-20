import {
  FooterButtonArea,
  FooterPagingArea,
  SideFooterWrap,
  RotateIcon,
} from "@assets/styles/CommonStyled";

import {
  ComponentAddIcon,
  DeleteIcon,
  MidiumArrowIcon,
  PlusIcon,
  TinyArrowIcon,
} from "@components/common/CommonIcons";
import ComponentMenu from "./ComponentMenu";
import TooltipButton from "./TooltipButton";
import { analysisStore } from "@/store";

const ComponentFooter = () => {
  const { displayMenu, setStoreState } = analysisStore();
  const setDisplay = value => {
    setStoreState({ target: "displayMenu", value });
  };

  const close = () => setDisplay(false);
  return (
    <SideFooterWrap>
      <FooterPagingArea>
        <RotateIcon $hover $rotate>
          <MidiumArrowIcon />
        </RotateIcon>
        <div className="text">
          <span>1</span>
          <span>/</span>
          <span>1</span>
        </div>
        <RotateIcon $hover>
          <MidiumArrowIcon />
        </RotateIcon>
      </FooterPagingArea>
      {/* footer 버튼 영역 */}
      <FooterButtonArea>
        <TooltipButton tooltip={"-"}>
          <PlusIcon />
        </TooltipButton>

        <TooltipButton tooltip={"-"}>
          <DeleteIcon />
        </TooltipButton>

        <TooltipButton
          className="p-8"
          tooltip={"컴포넌트 추가"}
          onClick={() => setDisplay(true)}>
          <ComponentAddIcon />
          <TinyArrowIcon />
        </TooltipButton>
      </FooterButtonArea>
      {displayMenu && <ComponentMenu close={close} />}
    </SideFooterWrap>
  );
};

export default ComponentFooter;
