import { useEffect, useState } from "react";
import {
  SectionItem,
  FileIcon,
  PageRow,
  SidePageRowItem,
  RotateIcon,
} from "@/assets/styles/commonStyled";
import { SmallArrowIcon } from "@/components/common/CommonIcons";
import { analysisStore } from "@/store";

const SidePageTab = ({ item, sectionIndex, sectionHandler, pageHandler }) => {
  const { setStoreState, selectedSection, selectedPage } = analysisStore();
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setStoreState({ target: "subSelectedList", value: [] });
  }, [selectedSection, selectedPage]);

  return (
    <SidePageRowItem>
      <SectionItem
        $sectionIndex={sectionIndex}
        className="border"
        onClick={() => sectionHandler?.({ sectionIndex })}>
        <div className="item">
          <RotateIcon $rotate={!display} onClick={() => setDisplay(!display)}>
            <SmallArrowIcon />
          </RotateIcon>
          <span>{item?.sectionName} </span>
        </div>
      </SectionItem>
      {display &&
        item?.pageList.map((page, pageIndex) => (
          <PageRow
            onClick={() => pageHandler?.({ sectionIndex, pageIndex })}
            key={`${pageIndex}sidePageRowKey`}
            className={`handle ${
              selectedSection === sectionIndex &&
              selectedPage === pageIndex &&
              "selected"
            }`}>
            <div className="item">
              <FileIcon />
              <span>{page?.pageName}</span>
            </div>
          </PageRow>
        ))}
    </SidePageRowItem>
  );
};

export default SidePageTab;
