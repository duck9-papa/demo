const today = `~ ${new Date().getFullYear()}.${new Date().getMonth() + 1}`;

export const presentItems = [
  {
    title: "EXPERIENCE",
    contents: [
      {
        title: "Sports2i",
        detail: "융합사업팀/매니저 - 2023.01~2023.12",
        content: [
          {
            title:
              "문체부 8과제 배구 입력기 프로그램 개발 프론트엔드 업무 수행",
            details: [
              "액션 입력기, 히트맵 입력기 개발",
              "액션 입력 프로세스 특허 등록",
              "시스템 코드 연동 체계 구축",
              "요청 처리 병렬화를 통해 성능 향상",
            ],
          },
          {
            title:
              "문체부 8과제 배구 출력기 프로그램 개발 프론트엔드 업무 수행",
            details: [
              "스포츠 통계 데이터의 다양한 시각화",
              "반응형 웹 사이트 제작",
              "Radis 서버와의 통신을 활용한 문자 중계 구현",
            ],
          },
          {
            title: "문체부 8과제 헬스 트레이너 프로그램 프론트엔드 업무 수행",
            details: [
              "REST API를 활용해 워치와의 데이터 연동",
              "그래프 문서 정리",
              "헬스 데이터의 시각화 표출",
            ],
          },
          {
            title: "배구 전력 분석기 프론트엔드 업무 수행",
            details: [
              "공용 컴포넌트 제작 및 문서화",
              "draw.io를 활용해 공용 모듈 도식화",
            ],
          },
          {
            title: "개발 환경 구축 및 CI/CD 구축",
            details: [
              "NCP, CentOs 환경에서의 nginx를 사용해 React Project 배포",
              "Github와 Jenkins를 활용해 CI/CD 환경 구축",
              "사내 가이드 노션 페이지 작성",
            ],
          },
        ],
      },
      {
        title: "Sports2i",
        detail: "융합개발 1팀/연구원 - 2024.01~2024.12",
        content: [
          {
            title: "zone 3D 프로젝트",
            details: [
              "three.js, R3F를 활용하여 투구 데이터의 3차원 표출 기능 개발",
              "React State를 활용하여 3D Model 속성 및 조작",
              "3D 환경 및 모델 변수 값 문서화",
              "자체 스터디중 정식 프로젝트 건의 및 승격",
              "KBS, MBC, SBS, SPOTV 및 티빙 슈퍼매치 서비스",
              "기존 외주 업체를 통해 제공하던 unity기반 프로그램을 사내 자체 개발로 전환",
            ],
          },
          {
            title: "구단 전력 분석기 3.0",
            details: [
              "페이지 자유 커스텀 기능 개발",
              "컴포넌트, 필터 및 내부 속성 코드 체계 구축",
              "그리드 시스템 구축 및 적용",
              "공용 모듈 제작 및 문서화",
              "계정 관리 및 환경 설정 기능 개발",
            ],
          },
          {
            title: "KBO-ABS 사이트 리팩토링",
            details: [
              "기존 .net 프레임워크로 제작된 사이트 Vue3로 마이그레이션",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "SELF-DEVELOPMENT",

    contents: [
      {
        title: "STUDY & SIDE PROJECT",
        detail: today,
        content: [
          {
            title: "새로운 기술 공부",
            details: [
              "three.js, firebase 등의 기술 스터디",
              "실제 프로젝트에 적용 및 서비스",
            ],
          },
          {
            title: "사이드 프로젝트 진행",
            details: [
              "firebase와 React를 활용하여 프로젝트 개발",
              "실시간 채팅 기능 구현",
              "할리갈리, 다빈치 코드 등의 실시간 게임 구현",
              "우리말샘 OPEN API를 활용하여 낱말 게임 구현",
            ],
          },
          {
            title: "기록 및 포트폴리오 관리",
            details: [
              "개인 노션 페이지에 프로젝트 별 문서 정리",
              "개인 velog 운영",
              "포트폴리오 사이트 구축",
              "사내 게시판에 기술 관련 글 작성",
            ],
          },
        ],
      },
    ],
  },
];
