import { useEffect, useState } from "react";
import { FooterButton } from "../../assets/styles/CommonStyled";

const TooltipButton = ({ children, className, tooltip, onClick, type }) => {
  const [hovering, setHovering] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let timer;
    if (hovering) {
      timer = setTimeout(() => {
        setShowTooltip(true);
      }, 500);
    } else {
      setShowTooltip(false);
    }
    return () => clearTimeout(timer);
  }, [hovering]);

  return (
    <FooterButton
      $tooltip={tooltip}
      $show={showTooltip}
      className={`tooltip ${className}`}
      onClick={() => onClick?.()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}>
      {children}
    </FooterButton>
  );
};

export default TooltipButton;
