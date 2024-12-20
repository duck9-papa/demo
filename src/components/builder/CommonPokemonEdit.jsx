import {
  CommonModal,
  CommonModalTitle,
  ButtonContainer,
  ModalItem,
  CommonInput,
  EditItemContainer,
} from "@assets/styles/CommonStyled";
import CommonButton from "@/components/common/CommonButton";
import { useState } from "react";
import CommonSelectBox from "../common/CommonSelectBox";

const optionList = [
  { label: "1단계", value: 1 },
  { label: "2단계", value: 2 },
  { label: "3단계", value: 3 },
];

const CommonPokemonEdit = ({ close, save, defaultOption }) => {
  const [size, setSize] = useState(defaultOption?.size ?? 10);
  const [revolutionStep, setRevolutionStep] = useState(
    defaultOption?.revolutionStep ?? 10
  );
  const SaveAttributes = () => {
    save({ size, revolutionStep });
  };

  return (
    <CommonModal>
      <CommonModalTitle>설정 변경</CommonModalTitle>
      <EditItemContainer>
        <ModalItem>
          <span className="title">사이즈:</span>
          <CommonInput
            className={"modal"}
            value={size}
            type={"number"}
            min={10}
            max={30}
            onChange={e => setSize(e.target.value)}
          />
        </ModalItem>
        <ModalItem>
          <span className="title">진화 단계:</span>
          <CommonSelectBox
            value={revolutionStep}
            setState={setRevolutionStep}
            options={optionList}
          />
        </ModalItem>
      </EditItemContainer>

      <ButtonContainer>
        <CommonButton buttonKey={"G900"} onClick={close}>
          취소
        </CommonButton>
        <CommonButton buttonKey={"L"} onClick={SaveAttributes}>
          저장
        </CommonButton>
      </ButtonContainer>
    </CommonModal>
  );
};

export default CommonPokemonEdit;
