import styled from "styled-components";
import {
  CommonWrap,
  PresentTitle,
  ProjectDescriptionArea,
  ProjectItem,
  ProjectItemImg,
  ProjectsContainer,
} from "../assets/styles/CommonStyled";
import { projects } from "../static/projects";
import React from "react";

const Wrap = styled(CommonWrap)`
  flex-direction: column;
  justify-content: start;
  background-color: #b3c0ef;
  padding: 32px 16px;
  padding-top: 0;
`;

const ProjectPage = () => {
  return (
    <Wrap>
      {projects.map((group) => (
        <React.Fragment key={group.title}>
          <PresentTitle>{group.title}</PresentTitle>
          <ProjectsContainer>
            {group.items.map((project) => (
              <ProjectItem key={project.key}>
                <ProjectItemImg src={project.banner} />
                <ProjectDescriptionArea>
                  <span className="period">{project.period}</span>
                  <span className="title">{project.title}</span>
                </ProjectDescriptionArea>
              </ProjectItem>
            ))}
          </ProjectsContainer>
        </React.Fragment>
      ))}
    </Wrap>
  );
};

export default ProjectPage;
