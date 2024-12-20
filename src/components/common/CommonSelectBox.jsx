// value = number or string
// handler = function
// options = list = > { label, value }

import { CommonSelectWrap } from "../../assets/styles/CommonStyled";

// styles = object
const CommonSelectBox = ({ value, setState, options, style, className }) => {
  const handler = e => {
    setState?.(e.target?.value);
  };

  return (
    <CommonSelectWrap
      className={className}
      style={style ?? {}}
      value={value || ""}
      onChange={handler}>
      <option value="" disabled hidden>
        -
      </option>
      {options.map((item, index) => (
        <option value={item?.value} key={`${index}optionKey`}>
          {item?.label}
        </option>
      ))}
    </CommonSelectWrap>
  );
};

export default CommonSelectBox;
