import { ComponentGuideIcon } from "@/components/common/CommonIcons";
import { analysisStore } from "@/store";
import { useMemo } from "react";
import { EditGuideArea } from "../assets/styles/CommonStyled";

const EditGuide = () => {
  const { setStoreState, copyPageList, selectedSection, selectedPage } =
    analysisStore();

  const selectedComponents = useMemo(() => {
    return copyPageList?.[selectedSection]?.pageList?.[selectedPage]
      ?.componentList;
  }, [copyPageList, selectedSection, selectedPage]);

  return (
    <EditGuideArea id="editDrag">
      <div>
        {selectedPage === null ? (
          <span>화면을 구성할 페이지를 선택하세요.</span>
        ) : (
          selectedPage >= 0 &&
          !selectedComponents?.length && (
            <>
              <i
                onClick={() =>
                  setStoreState({ target: "displayMenu", value: true })
                }>
                <ComponentGuideIcon />
              </i>
              <span>컴포넌트를 드래그하여 화면을 완성하세요.</span>
            </>
          )
        )}
      </div>
    </EditGuideArea>
  );
};

export default EditGuide;
