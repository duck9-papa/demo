import 입력기배너 from "../assets/images/입력기 타이틀.png";
import 출력기배너 from "../assets/images/출력기 타이틀.png";
import 트레이너배너 from "../assets/images/트레이너 타이틀.png";
import 전력분석기배너 from "../assets/images/전력분석기 타이틀.png";
import 티빙배너 from "../assets/images/티빙 타이틀.png";
import KBO배너 from "../assets/images/KBO_ABS_3D 타이틀.png";
import 노션배너 from "../assets/images/노션 타이틀.png";
import 미니게임배너 from "../assets/images/미니게임 타이틀.png";
import 구단솔루션배너 from "../assets/images/구단솔루션 타이틀.png";

export const projects = [
  {
    title: "COMPANY PROJECTS",
    items: [
      {
        key: "VolleyInput",
        title: "문체부 8과제 배구 입력기",
        banner: 입력기배너,
        period: "2023.01~2023.03",
        isDemo: true,
      },
      {
        key: "VolleyOutput",
        title: "문체부 8과제 배구 출력기",
        banner: 출력기배너,
        period: "2023.04~2023.06",
        isDemo: false,
      },

      {
        key: "Trainer",
        title: "트레이너 솔루션",
        banner: 트레이너배너,
        period: "2023.07~2023.09",
        isDemo: false,
      },
      {
        key: "Analysis",
        title: "배구 전력분석기 솔루션",
        banner: 전력분석기배너,
        period: "2023.10~2023.12",
        isDemo: false,
      },
      {
        key: "Tving",
        title: "티빙 슈퍼매치 3D",
        banner: 티빙배너,
        period: "2024.01 ~",
        isDemo: true,
      },
      {
        key: "Kbo",
        title: "KBO ABS 3D",
        banner: KBO배너,
        period: "2024.01 ~",
        isDemo: true,
      },
      {
        key: "qcs",
        title: "구단 솔루션",
        banner: 구단솔루션배너,
        period: "2024.06~2024.12",
        isDemo: true,
      },
    ],
  },

  {
    title: "PERSONAL WORKS",
    items: [
      {
        key: "Notion",
        title: "노션 페이지 운영",
        banner: 노션배너,
        period: "2023.01 ~",
      },
      {
        key: "Minigame",
        title: "미니 게임 프로젝트",
        banner: 미니게임배너,
        period: "2023.10~2024.02",
      },
    ],
  },
];
