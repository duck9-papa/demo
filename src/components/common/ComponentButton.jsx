import { analysisStore } from "@store";
import { componentById, nameById } from "./NumOfComponents";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { ComponentIcon } from "@/components/common/CommonIcons";
import { RotateIcon, ComponentMenuRow } from "@/assets/styles/CommonStyled";
import CommonDragWrap from "./CommonDragWrap";
const ComponentButton = ({ componentCode, componentItem }) => {
  const { addItem } = analysisStore();
  const [mouseDown, setMouseDown] = useState(false);
  const [clickComponent, setClickComponent] = useState(1);
  const [wrapLeft, setWrapLeft] = useState(0);
  const [wrapTop, setWrapTop] = useState(0);
  const dragRef = useRef();

  const MakeItem = (e, clickComponent) => {
    setMouseDown(true);
    setWrapLeft(e.clientX - clickComponent.width / 2);
    setWrapTop(e.clientY - clickComponent.height / 2);
    setClickComponent(clickComponent);
  };

  const AddComponent = (clickComponent, xValue, yValue) => {
    const container = document.getElementById("avilableContainer");
    let positionX = xValue;
    let positionY = yValue;

    const maxLeft =
      container.getBoundingClientRect().width -
      dragRef.current.getBoundingClientRect().width;
    const maxTop =
      container.getBoundingClientRect().height -
      dragRef.current.getBoundingClientRect().height;

    if (positionX < 0) {
      positionX = 0;
    }

    if (positionX > maxLeft) {
      positionX = maxLeft;
    }
    if (positionY < 0) {
      positionY = 0;
    }
    if (positionY > maxTop) {
      positionY = maxTop;
    }

    // eslint-disable-next-line no-unused-vars
    const { componentId, ...item } = clickComponent;

    item.positionX = Math.floor(positionX);
    item.positionY = Math.floor(positionY);
    item.prototype = "N";
    item.componentId = uuidv4();
    addItem({
      item,
    });
  };

  useEffect(() => {
    const container = document.getElementById("avilableContainer");
    const containerRect = container.getBoundingClientRect();
    const item = dragRef.current;

    const moveHandler = e => {
      if (mouseDown) {
        setWrapLeft(
          Math.floor(e.clientX - item.getBoundingClientRect().width / 2)
        );
        setWrapTop(
          Math.floor(e.clientY - item.getBoundingClientRect().height / 2)
        );
      }
    };
    const upHandler = e => {
      // mouse  범위 => containerRect.left < x  < containerRect.left + container width
      if (mouseDown) {
        const xCheck =
          containerRect.left <= e.clientX &&
          e.clientX <=
            containerRect.left + container.getBoundingClientRect().width;
        const yCheck =
          container.offsetTop <= e.clientY &&
          e.clientY <=
            containerRect.left + container.getBoundingClientRect().height;
        if (xCheck && yCheck) {
          const xValue =
            Math.floor(
              (e.pageX -
                item.getBoundingClientRect().width / 2 -
                container.getBoundingClientRect().left -
                window.scrollX) /
                8
            ) * 8;

          const yValue =
            Math.floor(
              (e.pageY -
                item.getBoundingClientRect().height / 2 -
                container.getBoundingClientRect().top -
                window.scrollY) /
                8
            ) * 8;
          AddComponent(clickComponent, xValue, yValue);
        } else {
          toast.error("놓을 수 없습니다.");
        }
        setMouseDown(false);
        setWrapLeft(0);
        setWrapTop(0);
      }
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", upHandler);
    return () => {
      document.removeEventListener("mousemove", moveHandler);
      document.removeEventListener("mouseup", upHandler);
    };
  }, [mouseDown, clickComponent]);
  return (
    <ComponentMenuRow>
      {mouseDown && (
        <CommonDragWrap
          style={{ position: "fixed" }}
          ref={dragRef}
          $mouseDown={mouseDown}
          $blur={mouseDown}
          $left={wrapLeft}
          $top={wrapTop}>
          {componentById[clickComponent?.componentCode]?.({
            ...clickComponent,
            edit: true,
          })}
        </CommonDragWrap>
      )}

      <span>{nameById[componentCode]}</span>
      <RotateIcon onMouseDown={e => MakeItem(e, componentItem)}>
        <ComponentIcon />
      </RotateIcon>
    </ComponentMenuRow>
  );
};

export default ComponentButton;
