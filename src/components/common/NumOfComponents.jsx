import 꼬부기_1 from "@assets/images/pokemon/꼬부기_1.png";
import 꼬부기_2 from "@assets/images/pokemon/꼬부기_2.png";
import 꼬부기_3 from "@assets/images/pokemon/꼬부기_3.png";
import 파이리_1 from "@assets/images/pokemon/파이리_1.png";
import 파이리_2 from "@assets/images/pokemon/파이리_2.png";
import 파이리_3 from "@assets/images/pokemon/파이리_3.png";
import 이상해씨_1 from "@assets/images/pokemon/이상해씨_1.png";
import 이상해씨_2 from "@assets/images/pokemon/이상해씨_2.png";
import 이상해씨_3 from "@assets/images/pokemon/이상해씨_3.png";
import 브케인_1 from "@assets/images/pokemon/브케인_1.png";
import 브케인_2 from "@assets/images/pokemon/브케인_2.png";
import 브케인_3 from "@assets/images/pokemon/브케인_3.png";
import 리아코_1 from "@assets/images/pokemon/리아코_1.png";
import 리아코_2 from "@assets/images/pokemon/리아코_2.png";
import 리아코_3 from "@assets/images/pokemon/리아코_3.png";
import 치코리타_1 from "@assets/images/pokemon/치코리타_1.png";
import 치코리타_2 from "@assets/images/pokemon/치코리타_2.png";
import 치코리타_3 from "@assets/images/pokemon/치코리타_3.png";
import 팽도리_1 from "@assets/images/pokemon/팽도리_1.png";
import 팽도리_2 from "@assets/images/pokemon/팽도리_2.png";
import 팽도리_3 from "@assets/images/pokemon/팽도리_3.png";
import 모부기_1 from "@assets/images/pokemon/모부기_1.png";
import 모부기_2 from "@assets/images/pokemon/모부기_2.png";
import 모부기_3 from "@assets/images/pokemon/모부기_3.png";
import 불꽃숭이_1 from "@assets/images/pokemon/불꽃숭이_1.png";
import 불꽃숭이_2 from "@assets/images/pokemon/불꽃숭이_2.png";
import 불꽃숭이_3 from "@assets/images/pokemon/불꽃숭이_3.png";
import CommonPokemon from "../builder/CommonPokemon";
import CommonPokemonEdit from "../builder/CommonPokemonEdit";

export const componentById = {
  FE1: props => <CommonPokemon {...props} />,
  FE2: props => <CommonPokemon {...props} />,
  FE3: props => <CommonPokemon {...props} />,
  FE11: props => <CommonPokemon {...props} />,
  FE12: props => <CommonPokemon {...props} />,
  FE13: props => <CommonPokemon {...props} />,
  FE21: props => <CommonPokemon {...props} />,
  FE22: props => <CommonPokemon {...props} />,
  FE23: props => <CommonPokemon {...props} />,
};

export const ImgById = {
  꼬부기_1,
  꼬부기_2,
  꼬부기_3,
  파이리_1,
  파이리_2,
  파이리_3,
  이상해씨_1,
  이상해씨_2,
  이상해씨_3,
  브케인_1,
  브케인_2,
  브케인_3,
  리아코_1,
  리아코_2,
  리아코_3,
  치코리타_1,
  치코리타_2,
  치코리타_3,
  팽도리_1,
  팽도리_2,
  팽도리_3,
  모부기_1,
  모부기_2,
  모부기_3,
  불꽃숭이_1,
  불꽃숭이_2,
  불꽃숭이_3,
};

export const editById = {
  FE1: props => <CommonPokemonEdit {...props} />,
  FE2: props => <CommonPokemonEdit {...props} />,
  FE3: props => <CommonPokemonEdit {...props} />,
  FE11: props => <CommonPokemonEdit {...props} />,
  FE12: props => <CommonPokemonEdit {...props} />,
  FE13: props => <CommonPokemonEdit {...props} />,
  FE21: props => <CommonPokemonEdit {...props} />,
  FE22: props => <CommonPokemonEdit {...props} />,
  FE23: props => <CommonPokemonEdit {...props} />,
};

export const components = [
  {
    componentId: "8be3-4aab-b2fb-70cd5c893cfc",
    componentCode: "FE1",
    componentName: "파이리",
    componentType: "FIRE",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },

  {
    componentId: "3f794f37-747f8-b48f-d5bba40a10b3",
    componentCode: "FE2",
    componentName: "브케인",
    componentType: "FIRE",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
  {
    componentId: "3f0-47f8-b48f-d5bba10b3",
    componentCode: "FE3",
    componentName: "불꽃숭이",
    componentType: "FIRE",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
  {
    componentId: "8be3af69-41-b2fb-70cd5c893cfc",
    componentCode: "FE11",
    componentName: "꼬부기",
    componentType: "WATER",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },

  {
    componentId: "3f790-47f8-b48f-d5bba40a10b3",
    componentCode: "FE12",
    componentName: "리아코",
    componentType: "WATER",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
  {
    componentId: "3f794f37-47f8-b48f-d5bba10b3",
    componentCode: "FE13",
    componentName: "팽도리",
    componentType: "WATER",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
  {
    componentId: "8b41b1-4aab-b2fb-70cd5c893cfc",
    componentCode: "FE21",
    componentName: "이상해씨",
    componentType: "LEAF",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },

  {
    componentId: "3f794f37-7de0-47-d5bba40a10b3",
    componentCode: "FE22",
    componentName: "치코리타",
    componentType: "LEAF",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
  {
    componentId: "3f794f3747f8-b48f-d5bba10b3",
    componentCode: "FE23",
    componentName: "모부기",
    componentType: "LEAF",
    componentOrder: 2,
    prototype: "Y",
    positionX: 0,
    positionY: 0,
    attributes: {
      revolutionStep: 1,
      size: 10,
    },
  },
];

export const nameById = {
  FE1: "파이리",
  FE2: "브케인",
  FE3: "불꽃숭이",
  FE11: "꼬부기",
  FE12: "리아코",
  FE13: "팽도리",
  FE21: "이상해씨",
  FE22: "치코리타",
  FE23: "모부기",
};

// new
// F1 = seasonId
// F2 = gameSc
// F3 = gameDate
// F4 = gameId
// F5 = inning
// F6 = pitcherTeam
// F7 = pitcherId
// F8 = catcherId
// F9 = hitterTeam
// F10 = hitterId
// F50 = tb
// F51 = pitzoneNumFilter
// F52 = liveController
// F53 = hitLocationIndex
