import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import CommonDragWrap from "./CommonDragWrap";
import commonStyles from "@utils/commonStyles.json";

import { analysisStore } from "@store";
import { editById } from "./NumOfComponents";
import { deepCopy } from "@/store";

const CommonDragItem = ({ children, positionX, positionY, item, index }) => {
  const {
    setLocation,
    removeItem,
    setAttributes,
    setListLocation,
    subSelectedList,
    setStoreState,
    multiClick,
    copyPageList,
    selectedSection,
    selectedPage,
  } = analysisStore();

  const wrapRef = useRef();
  const removeRef = useRef();
  const [mouseDown, setMouseDown] = useState(false);
  const [editDisplay, setEditDisplay] = useState(false);
  const clickX = useRef(0);
  const clickY = useRef(0);

  const editSelected = useMemo(() => {
    return subSelectedList?.some(i => i.componentId === item.componentId);
  }, [subSelectedList, item]);

  const OnSubCode = e => {
    e.preventDefault();

    // down 좌표와 up 좌표가 같을 경우에 선택 클릭으로 인식
    if (e.clientX === clickX.current && !(e.target.alt === "edit")) {
      // multiClick 상태가 아니라면 무조건 단일 선택
      // editSelected인 상태고 단일 선택이면 filter
      // multiClick 상태이고 !editSelected면 추가
      // multiClick상태가 아니고, !editSelected면 [item]
      const value =
        !multiClick && !editSelected
          ? [item]
          : editSelected
          ? subSelectedList.filter(i => i.componentId !== item.componentId)
          : [...subSelectedList, item];
      setStoreState({ target: "subSelectedList", value });
    }
  };

  const RemoveItem = () => {
    removeItem({ index });
    setEditDisplay(false);
  };

  const SaveHandler = attributes => {
    setAttributes({ index, attributes });
    setEditDisplay(false);
    // setStoreState({ target: 'subSelected', value: '' });
  };

  useEffect(() => {
    const instance = wrapRef.current;
    const downHandler = e => {
      if (e.button === 0) {
        if (instance.contains(e.target) && e.target !== removeRef.current) {
          clickX.current = e.clientX;
          clickY.current = e.clientY;
        }
        setMouseDown(true);

        document.addEventListener("mouseup", upHandler);
        document.addEventListener("mousemove", moveHandler);
      }
    };
    const moveHandler = e => {
      // 8배수의 이동 단위 마우스를 누른 지점에서 부터 얼마나 이동했는지
      let moveX = Math.floor((e.clientX - clickX.current) / 8) * 8;
      let moveY = Math.floor((e.clientY - clickY.current) / 8) * 8;

      if (moveX && moveY) {
        // 기준 컨테이너 크기 (그리드 영역)
        const container = document
          .getElementById("avilableContainer")
          .getBoundingClientRect();

        // 컴포넌트 크기
        const wrap = wrapRef.current.getBoundingClientRect();

        // 이동 최대 범위 정의
        const maxX = Math.round(container.width) - Math.round(wrap.width);
        const maxY = Math.round(container.height) - Math.round(wrap.height);

        // 현재 포지션 값에서 마우스가 움직인 만큼 추가
        let moveXValue = Math.floor(positionX + moveX);
        let moveYValue = Math.floor(positionY + moveY);

        // 이동하는 위치가 범위 밖일 경우 제한
        if (moveXValue < 0) {
          moveXValue = 0;
        }
        if (moveXValue > maxX) {
          moveXValue = maxX;
        }
        if (moveYValue < 0) {
          moveYValue = 0;
        }
        if (moveYValue > maxY) {
          moveYValue = maxY;
        }

        // 컴포넌트 복수 선택 시에 이동
        if (subSelectedList.length > 1) {
          // 컴포넌트 전체 리스트 복사
          let copyComponents =
            deepCopy(copyPageList)[selectedSection].pageList[selectedPage]
              .componentList;

          // 선택된 컴포넌트들의 인덱스 배열 반환
          const indexList = subSelectedList.map(i =>
            copyComponents.findIndex(j => j.componentId === i.componentId)
          );

          // 각각의 컴포넌트들의 시작 위치값, 끝 위치값 반환 (좌상단, 우하단 지점)
          const boundaryRangeList = indexList.map(i => {
            const item = copyComponents[i];
            const { positionX, positionY } = item;
            const childElementBound = document
              .getElementById("avilableContainer")
              .children[i].getBoundingClientRect();
            return {
              startX: positionX,
              startY: positionY,
              endX: positionX + childElementBound.width,
              endY: positionY + childElementBound.height,
            };
          });

          // 선택 컴포넌트들이 이동할 수 있는 최소, 최대 바운더리 정의
          const maxMoveRight =
            container.width - Math.max(...boundaryRangeList.map(i => i.endX));

          const minMoveLeft = -Math.min(
            ...boundaryRangeList.map(i => i.startX)
          );

          const maxMoveBottom =
            container.height - Math.max(...boundaryRangeList.map(i => i.endY));

          const minMoveTop = -Math.min(...boundaryRangeList.map(i => i.startY));

          // 바운더리 초과 시에 제한
          if (moveX >= maxMoveRight) {
            moveX = maxMoveRight;
          }
          if (moveX <= minMoveLeft) {
            moveX = minMoveLeft;
          }

          if (moveY >= maxMoveBottom) {
            moveY = maxMoveBottom;
          }
          if (moveY <= minMoveTop) {
            moveY = minMoveTop;
          }

          // 각각의 컴포넌트들의 위치값 업데이트
          indexList.forEach(i => {
            copyComponents[i].positionX = Math.floor(
              copyComponents[i].positionX + moveX
            );
            copyComponents[i].positionY = Math.floor(
              copyComponents[i].positionY + moveY
            );
          });

          // list 업데이트 (zustand store 액션)
          setListLocation(copyComponents);
        } else {
          // 단일 이동
          setLocation({ index, x: moveXValue, y: moveYValue, moveX, moveY });
        }
      }
    };

    const upHandler = async () => {
      setMouseDown(false);
      document.removeEventListener("mouseup", upHandler);
      document.removeEventListener("mousemove", moveHandler);
    };

    instance.addEventListener("mousedown", downHandler);

    return () => {
      instance?.removeEventListener("mousedown", downHandler);
    };
  }, [
    positionX,
    positionY,
    index,
    setLocation,
    setListLocation,
    copyPageList,
    selectedSection,
    selectedPage,
    subSelectedList,
  ]);

  const buttonItems = useMemo(() => {
    let arr = [
      {
        onClick: RemoveItem,
        src: "/images/common/btn_close_black.png",
        alt: "close",
      },
    ];
    if (editById[item.componentCode])
      arr.unshift({
        onClick: () => {
          setEditDisplay(true);
        },
        src: "/images/common/btn_edit.png",
        alt: "edit",
      });
    return arr;
  }, [item]);

  return (
    <>
      <CommonDragWrap
        $mouseDown={mouseDown}
        $left={positionX}
        $top={positionY}
        $subSelect={editSelected}
        ref={wrapRef}
        onClick={OnSubCode}>
        <Container $subSelect={editSelected}>{children}</Container>
        {editSelected && (
          <IconBox ref={removeRef}>
            {buttonItems.map(({ onClick, ...imgProps }, index) => (
              <li key={`${index}liKey`} onClick={() => onClick?.()}>
                <img {...imgProps} />
              </li>
            ))}
          </IconBox>
        )}
      </CommonDragWrap>
      {editDisplay &&
        editById[item.componentCode]?.({
          close: () => {
            setEditDisplay(false);
          },
          save: SaveHandler,
          defaultOption: item.attributes,
        })}
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  /* outline: ${({ $subSelect }) =>
    $subSelect && `1px solid ${commonStyles.POINT_COLOR.BLUE}`}; */
`;

const IconBox = styled.ul`
  display: flex;
  gap: 4px;
  position: absolute;
  z-index: 10;
  top: 4px;
  right: 4px;
  /* translate: 0 calc(-100% - 4px); */
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${commonStyles.GRAY_SCALE.WHITE};
    width: 24px;
    height: 24px;
    border: 1px solid ${commonStyles.GRAY_SCALE.G500};
    border-radius: 6px;
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export default CommonDragItem;
