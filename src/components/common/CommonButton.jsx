import styled from "styled-components";
import CommonStyles from "@/utils/commonStyles.json";

const Wrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  box-sizing: border-box;
  word-break: keep-all;
  cursor: pointer;
  ${({ $buttonStyle }) => $buttonStyle}
  &:focus {
    outline: none;
  }
`;

const CommonButton = ({
  type,
  buttonKey,
  children,
  onClick,
  className,
  disabled,
}) => {
  const styleObject = CommonStyles.BUTTON_STYLE?.[type ?? "DEFAULT"];
  return (
    <Wrap
      className={className}
      $buttonStyle={styleObject?.[buttonKey ?? "S"]}
      onClick={() => onClick?.()}
      disabled={disabled}>
      {children}
    </Wrap>
  );
};

export default CommonButton;
