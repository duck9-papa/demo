import { analysisStore } from "@store";

import { useEffect, useMemo, useRef, useState } from "react";

// 임시 가이드 바

// import { AvailableArea, DragSquare } from "@/assets/styles/analysisStyle";
// import CommonDragItem from "@/components/record/components/common/CommonDragItem";
// import commondrag
import { AvailableArea, DragSquare } from "../assets/styles/CommonStyled";
import EditGuide from "../components/EditGuide";
import CommonDragItem from "../components/common/CommonDragItem";
import { componentById } from "../components/common/NumOfComponents";
// import { componentById } from "@/components/record/components/common/NumOfComponents";
// import DisplayItem from "@/components/record/components/builder/DisplayItem";
// import EditGuide from "@/components/record/components/EditGuide";
// 임시 가이드 바

const ComponentArea = ({ edit }) => {
  const {
    setStoreState,
    selectedPage,
    subSelectedList,
    arrowLocationHandler,
    copyPageList,
    selectedSection,
  } = analysisStore();

  const dragAreaRef = useRef();
  const [mousedown, setMousedown] = useState(false);
  const [startPointX, setStartPointX] = useState(0);
  const [startPointY, setStartPointY] = useState(0);
  const [endPointX, setEndPointX] = useState(0);
  const [endPointY, setEndPointY] = useState(0);

  const downRef = useRef({ x: 0, y: 0 });

  const selectedComponents = useMemo(() => {
    return copyPageList?.[selectedSection]?.pageList?.[selectedPage]
      ?.componentList;
  }, [copyPageList, selectedSection, selectedPage]);

  // 선택 페이지가 바뀔 때 마다 copy 후 state화 ( section => page => components )
  //  그 후에 components만을 변경

  useEffect(() => {
    const keyHandler = e => {
      if (subSelectedList?.length > 0) {
        const keyObject = {
          ArrowUp: { axis: "Y", value: -8 },
          ArrowDown: { axis: "Y", value: 8 },
          ArrowLeft: { axis: "X", value: -8 },
          ArrowRight: { axis: "X", value: 8 },
        };
        if (keyObject[e.key]) {
          e.preventDefault();

          const container = document.getElementById("avilableContainer");

          let sizeObj = {};
          const indexList = subSelectedList.map(i =>
            selectedComponents.findIndex(j => j.componentId === i.componentId)
          );
          indexList?.forEach(i => {
            const selectElement = container.children[i];
            const width = selectElement.getBoundingClientRect().width;
            const height = selectElement.getBoundingClientRect().height;
            sizeObj[i] = { width, height };
          });

          arrowLocationHandler({ ...keyObject[e.key], sizeObj });
        }
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [subSelectedList, arrowLocationHandler, selectedComponents]);

  useEffect(() => {
    // 최소 offset (0,0) 최대 offset (1088,728)

    const moveHandler = e => {
      const container = document
        .getElementById("editDrag")
        .getBoundingClientRect();
      const mouseX = e.pageX - container.x - window.scrollX;
      const mouseY = e.pageY - container.y - window.scrollY;
      let minX = Math.min(mouseX, downRef.current.x);
      let minY = Math.min(mouseY, downRef.current.y);
      let maxX = Math.max(mouseX, downRef.current.x);
      let maxY = Math.max(mouseY, downRef.current.y);

      const baseContainer = document
        .getElementById("avilableContainer")
        .getBoundingClientRect();

      if (minX < 0) {
        minX = 0;
      }
      if (minY < 0) {
        minY = 0;
      }
      if (maxX > baseContainer.width) {
        maxX = baseContainer.width;
      }
      if (maxY > baseContainer.height) {
        maxY = baseContainer.height;
      }
      setStartPointX(Math.floor(minX));
      setStartPointY(Math.floor(minY));
      setEndPointX(Math.ceil(maxX));
      setEndPointY(Math.ceil(maxY));
    };
    const upHandler = () => {
      setStartPointX(0);
      setStartPointY(0);
      setEndPointX(0);
      setEndPointY(0);
      setMousedown(false);
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
    };

    const downHandler = e => {
      if (e.target.id === "editDrag") {
        const container = document
          .getElementById("editDrag")
          .getBoundingClientRect();
        const x = e.pageX - container.x - window.scrollX;
        const y = e.pageY - container.y - window.scrollY;

        downRef.current = { x, y };
        setStoreState({ target: "subSelectedList", value: [] });
        setMousedown(true);

        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", upHandler);
      }
    };

    document.addEventListener("mousedown", downHandler);

    return () => {
      document.removeEventListener("mousedown", downHandler);
    };
  }, [setStoreState]);

  useEffect(() => {
    const boundList = selectedComponents?.map((item, index) => {
      let obj = {};
      const container = document.getElementById("avilableContainer");

      const selectElement = container.children[index];
      obj.startX = item.positionX;
      obj.startY = item.positionY;
      if (selectElement) {
        // const maxLeft =
        //   container.getBoundingClientRect().width -
        //   selectElement.getBoundingClientRect().width;

        // const maxTop =
        //   container.getBoundingClientRect().height -
        //   selectElement.getBoundingClientRect().height;
        obj.endX = item.positionX + selectElement.getBoundingClientRect().width;
        obj.endY =
          item.positionY + selectElement.getBoundingClientRect().height;
      }
      return obj;
    });

    const dragComponents = selectedComponents?.filter((_, index) => {
      const { startX, startY, endX, endY } = boundList?.[index];
      if (index === 0) {
      }
      return (
        startX >= startPointX &&
        startY >= startPointY &&
        endX <= endPointX &&
        endY <= endPointY
      );
    });

    if (mousedown) {
      setStoreState({ target: "subSelectedList", value: dragComponents });
    }
  }, [
    selectedComponents,
    startPointX,
    startPointY,
    endPointX,
    endPointY,
    mousedown,
  ]);

  useEffect(() => {
    const multiClickOn = e => {
      if (e.key === "Shift")
        setStoreState({ target: "multiClick", value: true });
    };

    const multiClickOff = e => {
      if (e.key === "Shift")
        setStoreState({ target: "multiClick", value: false });
    };

    document.addEventListener("keydown", multiClickOn);
    document.addEventListener("keyup", multiClickOff);
    return () => {
      document.removeEventListener("keydown", multiClickOn);
      document.removeEventListener("keyup", multiClickOff);
    };
  }, [setStoreState]);

  return (
    /* id가 avilableContainer인 element가 필수적으로 존재 해야함 */
    <AvailableArea id="avilableContainer">
      {edit
        ? selectedComponents?.map((item, index) => {
            return (
              <CommonDragItem
                key={`${index}userComponent`}
                positionX={item?.positionX}
                positionY={item?.positionY}
                item={item}
                index={index}>
                {componentById[item?.componentCode]?.({
                  ...item,
                  attributes: item.attributes,
                  edit,
                })}
              </CommonDragItem>
            );
          })
        : null}
      {edit && (
        <img
          ref={dragAreaRef}
          className="base"
          src="/images/common/grid.svg"
          alt="base"
          onClick={() => setStoreState({ target: "subSelected", value: "" })}
        />
      )}
      {edit && <EditGuide />}
      {startPointX || startPointY || endPointX || endPointY ? (
        <DragSquare
          $left={startPointX}
          $top={startPointY}
          $width={endPointX - startPointX}
          $height={endPointY - startPointY}
        />
      ) : null}
    </AvailableArea>
  );
};

export default ComponentArea;
