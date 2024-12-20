import { analysisStore } from "@store";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  EditComponentSideArea,
  ItemContainer,
  PageEditContainer,
  PageEditWrap,
  RegisteTitle,
  SideMiddleArea,
} from "../assets/styles/CommonStyled";
import CommonButton from "../components/common/CommonButton";
import ComponentArea from "./ComponentArea";
import { db } from "../firebase";
// 임시 가이드 바
import { qcsText } from "../../alertText";

import ComponentFooter from "../components/common/ComponentFooter";
import SidePageTab from "../components/common/SidePageTab";
import toast from "react-hot-toast";
import AlertModal from "./AlertModal";

// 임시 가이드 바

const RecordAnalysis = () => {
  const [saveData, setSaveData] = useState([]);
  const { setStoreState, copyPageList } = analysisStore();
  const [alertDisplay, setAlertDisplay] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "portfolio", `pages`);
    const unsubscribe = onSnapshot(docRef, async querySnapshot => {
      if (querySnapshot.exists()) {
        const { pageData } = querySnapshot.data();

        setStoreState({ target: "copyPageList", value: pageData });
        setStoreState({ target: "subSelected", value: "" });

        setSaveData(pageData);
      } else {
        console.log("error");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [setStoreState]);

  const Setting = async () => {
    const docRef = doc(db, "portfolio", `pages`);

    await updateDoc(docRef, {
      pageData: copyPageList,
    });
    toast.success("저장되었습니다.");
  };

  return (
    <PageEditWrap>
      <RegisteTitle>
        구단 솔루션 데모
        <div>
          <CommonButton
            onClick={() =>
              setStoreState({ target: "copyPageList", value: saveData })
            }>
            되돌리기
          </CommonButton>
          <CommonButton onClick={Setting}>저장</CommonButton>
        </div>
      </RegisteTitle>
      <PageEditContainer>
        <EditComponentSideArea>
          <SideMiddleArea>
            {copyPageList.map((item, index) => {
              const pageHandler = ({ sectionIndex, pageIndex }) => {
                setStoreState({
                  target: "selectedSection",
                  value: sectionIndex,
                });
                setStoreState({ target: "selectedPage", value: pageIndex });
              };
              return (
                <SidePageTab
                  key={`${index}sidePageTabKey`}
                  item={item}
                  pageHandler={pageHandler}
                  sectionIndex={index}
                />
              );
            })}
          </SideMiddleArea>
          <ComponentFooter />
        </EditComponentSideArea>
        <ItemContainer $edit={true} id="printArea">
          <ComponentArea edit={true} />
        </ItemContainer>
      </PageEditContainer>
      {alertDisplay && (
        <AlertModal close={() => setAlertDisplay(false)} text={qcsText} />
      )}
    </PageEditWrap>
  );
};

export default RecordAnalysis;
