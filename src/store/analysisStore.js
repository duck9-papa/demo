// import { DateToString } from '@/components/record/components/common/CommonDatePicker';
import toast from "react-hot-toast";
import { create } from "zustand";

// 배열 및 object 깊은 복사 method
export function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    obj.forEach((item, index) => {
      arrCopy[index] = deepCopy(item);
    });
    return arrCopy;
  }

  const objCopy = {};
  Object.keys(obj).forEach(key => {
    objCopy[key] = deepCopy(obj[key]);
  });

  return objCopy;
}

// 초기 값 오브젝트
const defaultState = {
  categorys: [],
  selectedSection: null,
  selectedPage: null,
  displayMenu: false,

  // selectedPage: {},
  pageComponents: [],
  copyPageComponents: [],
  displaySelect: "",
  selectUser: "",
  copyPageList: [],
  subSelected: "",
  subSelectedList: [],
  prevent: false,
  multiClick: false,
};

export const analysisStore = create(set => ({
  ...defaultState,
  // 공용 store 상태 값 변경 함수
  setStoreState: ({ target, value }) => set(() => ({ [target]: value })),
  clearStoreState: () =>
    set(() => {
      return { ...deepCopy({ ...defaultState }) };
    }),

  // 필터 상태 값 변경 함수
  setFilterState: ({ target, value }) =>
    set(state => {
      const filterState = deepCopy(state.filterState);
      filterState[target] = value;
      return { filterState };
    }),
  // 필터 초기화
  clearFilter: () => set({ filterState: defaultState.filterState }),

  // 페이지 컴포넌트 추가 함수
  addItem: ({ item }) =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);

      if (selectedSection !== null && selectedPage !== null) {
        const components =
          copyPageList[selectedSection]?.pageList[selectedPage].componentList;

        copyPageList[selectedSection].pageList[selectedPage].componentList = [
          ...components,
          item,
        ];
      } else {
        toast.error("페이지를 선택해주세요.");
      }
      return { copyPageList };
    }),

  // 페이지 컴포넌트 삭제 함수
  removeItem: ({ index /*id*/ }) =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[selectedSection].pageList[selectedPage].componentList.splice(
        index,
        1
      );

      return { copyPageList, subSelected: "" };
    }),

  // 페이지 컴포넌트 위치 이동 함수
  setLocation: ({ x, y, index }) =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[selectedSection].pageList[selectedPage].componentList[
        index
      ].positionX = x;

      copyPageList[selectedSection].pageList[selectedPage].componentList[
        index
      ].positionY = y;

      return { copyPageList };
    }),
  setListLocation: copyComponents =>
    set(state => {
      const { selectedSection, selectedPage } = state;

      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[selectedSection].pageList[selectedPage].componentList =
        copyComponents;

      return { copyPageList };
    }),
  arrowLocationHandler: ({ axis, value, sizeObj }) =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);
      const container = document
        .getElementById("avilableContainer")
        .getBoundingClientRect();

      Object.entries(sizeObj).forEach(([index, sizes]) => {
        const item =
          copyPageList[selectedSection].pageList[selectedPage].componentList[
            index
          ];

        const directionKey = axis === "X" ? "width" : "height";
        const minValue = 0;
        const maxValue = container[directionKey] - sizes[directionKey];
        let moveValue = item[`position${axis}`] + value;
        if (moveValue > maxValue) {
          moveValue = maxValue;
        }
        if (moveValue < minValue) {
          moveValue = minValue;
        }
        copyPageList[selectedSection].pageList[selectedPage].componentList[
          index
        ][`position${axis}`] = moveValue;
      });

      return { copyPageList };
    }),

  //  페이지 세부 속성 변경 함수
  setAttributes: ({ index, attributes }) =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[selectedSection].pageList[selectedPage].componentList[
        index
      ].attributes = attributes;

      return { copyPageList };
    }),

  // 전체 삭제 함수
  deletePageContent: () =>
    set(state => {
      const { selectedSection, selectedPage } = state;
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[selectedSection].pageList[selectedPage].componentList = [];
      return { copyPageList };
    }),

  addSection: item =>
    set(state => {
      const copyPageList = deepCopy(state.copyPageList);
      copyPageList.push(item);
      return { copyPageList };
    }),
  addPage: ({ sectionIndex, item }) =>
    set(state => {
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[sectionIndex].pageList.push(item);
      return { copyPageList };
    }),
  removeSection: sectionIndex =>
    set(state => {
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList.splice(sectionIndex, 1);
      return { copyPageList };
    }),
  removePage: ({ sectionIndex, pageIndex }) =>
    set(state => {
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[sectionIndex].pageList.splice(pageIndex, 1);
      return { copyPageList };
    }),
  changeSectionName: ({ sectionIndex, sectionName }) =>
    set(state => {
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[sectionIndex].sectionName = sectionName;
      return { copyPageList };
    }),
  changePageName: ({ sectionIndex, pageIndex, pageName }) =>
    set(state => {
      let copyPageList = deepCopy(state.copyPageList);
      copyPageList[sectionIndex].pageList[pageIndex].pageName = pageName;
      return { copyPageList };
    }),
}));
