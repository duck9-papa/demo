import React from "react";
import { useMediaQuery } from "react-responsive";

export const device = {
  mobile: "(max-width:1023px)",
  pc: "(min-width:1024px)",
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: device.mobile,
  });

  return <>{isMobile && children}</>;
};

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: device.pc,
  });

  return <>{isPc && children}</>;
};

export { Mobile, PC };
