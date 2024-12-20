import React from "react";
import { PresentContainer, PresentTitle } from "../assets/styles/CommonStyled";
import { GradientWrap } from "./SkillView";
import { presentItems } from "../static/experience";
import PresentItemBlock from "../components/experience/PresentItemBlock";
const ExperiencePage = () => {
  return (
    <GradientWrap>
      <PresentContainer>
        {presentItems.map((block, index) => (
          <React.Fragment key={`${index}blockKey`}>
            <PresentTitle>{block.title}</PresentTitle>
            {block.contents.map((presentItem, presentIndex) => (
              <PresentItemBlock
                key={`${presentIndex}presentKey`}
                presentItem={presentItem}
              />
            ))}
          </React.Fragment>
        ))}
      </PresentContainer>
    </GradientWrap>
  );
};

export default ExperiencePage;
