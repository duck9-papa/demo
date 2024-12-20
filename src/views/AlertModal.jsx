import { AlertClose, AlertModalWrap } from "../assets/styles/CommonStyled";
import { CrossIcons } from "../components/common/CommonIcons";

const AlertModal = ({ text, close }) => {
  return (
    <AlertModalWrap>
      <AlertClose onClick={close}>
        <CrossIcons fill={"#000"} />
      </AlertClose>
      {text}
    </AlertModalWrap>
  );
};

export default AlertModal;
