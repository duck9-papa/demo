import {
  ComponentMenuRow,
  ComponentRowContainer,
  RotateIcon,
} from "@/assets/styles/CommonStyled";

import { SmallArrowIcon } from "@/components/common/CommonIcons";

import { useMemo, useState } from "react";
import ComponentButton from "./ComponentButton";
import { components } from "./NumOfComponents";

const ComponentCategory = ({ category }) => {
  const [display, setDisplay] = useState(false);

  const typeFilter = useMemo(
    () => components?.filter(i => i?.componentType === category?.subCode),
    [components, category]
  );

  return (
    <ComponentRowContainer>
      <ComponentMenuRow className="category">
        <span>{category.subCodeValue}</span>
        <RotateIcon $rotate={!display} onClick={() => setDisplay(!display)}>
          <SmallArrowIcon fill={"#000"} />
        </RotateIcon>
      </ComponentMenuRow>
      {display &&
        typeFilter.map((item, index) => {
          return (
            <ComponentButton
              key={`${index}componentKey`}
              componentCode={item?.componentCode}
              componentItem={item}
            />
          );
        })}
    </ComponentRowContainer>
  );
};

export default ComponentCategory;
