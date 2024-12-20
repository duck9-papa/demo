import { useMemo } from "react";
import { CommonPokemonBase } from "../../assets/styles/CommonStyled";

import { ImgById } from "../common/NumOfComponents";

const CommonPokemon = ({ componentName, attributes }) => {
  const { size, revolutionStep } = attributes;

  const imgSelect = useMemo(
    () => ImgById[`${componentName}_${revolutionStep}`],
    [componentName, revolutionStep]
  );

  return (
    <CommonPokemonBase $size={size}>
      <img src={imgSelect} alt="img" />
    </CommonPokemonBase>
  );
};

export default CommonPokemon;
