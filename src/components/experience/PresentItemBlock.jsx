import { useInView } from "react-intersection-observer";
import {
  PresentContent,
  PresentItem,
  PresentItemTitle,
} from "/src/assets/styles/CommonStyled";
import { useEffect, useState } from "react";

const PresentItemBlock = ({ presentItem }) => {
  const { ref, inView } = useInView();

  const [first, setFirst] = useState(false);
  useEffect(() => {
    if (inView) setFirst(true);
  }, [inView]);

  return (
    <PresentItem ref={ref} $on={first}>
      <PresentItemTitle>
        <h2>{presentItem.title}</h2>
        <span>{presentItem.detail}</span>
      </PresentItemTitle>
      {presentItem.content.map((content, contentIndex) => (
        <PresentContent key={`contentKey${contentIndex}`}>
          <div className="title">{`${contentIndex + 1}. ${content.title}`}</div>
          {content.details.map((detail, detailIndex) => (
            <span key={`detailKey${detailIndex}`}>- {detail}</span>
          ))}
        </PresentContent>
      ))}
    </PresentItem>
  );
};

export default PresentItemBlock;
