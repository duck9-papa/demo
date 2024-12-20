import styled from "styled-components";

const CommonDragWrap = styled.div.attrs(props => ({
  style: {
    top: `${props.$top}px`,
    left: `${props.$left}px`,
    zIndex:
      props.$mouseDown || props.$subSelect || props.$displaySelect ? 10 : 6,
    opacity: props.$blur ? 0.6 : 1,
    outline: (props.$displaySelect || props.$subSelect) && "2px solid #eb1c24",
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  background-color: white;
  color: #222;
  box-sizing: border-box;
`;
export default CommonDragWrap;
