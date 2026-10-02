export const profile = {
  name: "최현준",
  role: "AI Service / Agent Developer",
  email: "choi.hyunjun@outlook.com",
  github: "https://github.com/hywznn",
  headline: ["수상작을 개발하고,", "AI 업무를 완료까지 연결한", "개발자 최현준입니다."],
  description:
    "AUTA에서는 업로드·인증 오류를 해결했고, FOWOCO에서는 문서 처리 뒤 멈춘 업무를 승인·증빙·완료까지 연결했습니다.",
  achievements: [
    {
      project: "AUTA",
      id: "auta",
      contribution: "클라이언트 개발",
      result: "장려상 · 특허 출원",
      context: ["졸업작품전시회 팀 수상", "관련 기술 특허 공동발명자"],
    },
    {
      project: "FOWOCO",
      id: "fowoco",
      contribution: "OCR 이후 업무 재개 구현",
      result: "4 / 4 업무 완료",
      context: ["합성 문서 기반 로컬 E2E", "대표 Case 1개 · Task 4개 완료"],
    },
  ],
};

export const projects = [
  {
    id: "fowoco",
    name: "FOWOCO",
    category: "외국인 근로자 행정업무 AI Agent",
    period: "2026.06 — 2026.08",
    role: "TPM · Product Design · Backend Integration",
    headline: "OCR 뒤에 멈춘 업무를 다시 이어, Task 4개를 완료했습니다.",
    description:
      "E-9 근로자의 재계약·취업활동기간 연장·체류기간 연장 요청을 필수정보 확인, HR 승인, 업무 실행으로 연결한 팀 프로젝트입니다.",
    metrics: [
      ["2 → 1", "동일 요청의 Intent 분류"],
      ["4 / 4", "대표 Case의 Task 완료"],
      ["3", "핵심 행정업무 시나리오"],
    ],
    condition:
      "합성 문서 기반 로컬 E2E · 대표 Case 1개. 실제 기관 제출 실적이 아닙니다.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "FastAPI",
      "BERT",
      "A.X",
      "AI Agent",
      "Outbox",
      "SSE",
    ],
    github: "https://github.com/fowoco/server",
    problem:
      "문서를 받아 OCR까지 끝냈지만, 업무가 다음 단계로 넘어가지 않았습니다.",
    action:
      "Outbox·멱등 접수·HR 검토를 연결하고, 승인된 최신 정보로 Workflow를 재개했습니다.",
    result:
      "문서 제출부터 HWP 생성·승인·증빙까지 연결해 대표 Case의 Task 4/4를 완료했습니다.",
    image: "/images/fowoco-dashboard.png",
  },
  {
    id: "auta",
    image: "/images/auta-dashboard.png",
    imageLabel: "직접 구현한 대시보드 · 개발 화면",
    name: "AUTA",
    category: "Figma 기반 UI/UX 자동 검증 서비스",
    period: "개발 2025.04 — 2025.10",
    role: "Frontend · React / TypeScript",
    headline: "업로드 계약과 세션 오류를 고쳐, 화면의 요청을 서버 처리로 연결했습니다.",
    description: "Figma 디자인과 구현 화면을 비교하는 팀 프로젝트입니다. 검증 현황 대시보드, Figma JSON 업로드, 인증·네트워크 예외 처리를 구현했습니다.",
    metrics: [["장려상", "졸업작품전시회 · 팀 수상"], ["특허 출원", "관련 기술 · 공동발명자"]],
    textMetrics: true,
    condition: "2025.11 팀 수상 · 2026.02.13 관련 기술 특허 출원·심사청구. 특허 등록 전입니다.",
    award: "2025학년도 광운대학교 인공지능융합대학 졸업작품전시회 장려상",
    tech: ["React", "TypeScript", "TanStack Query", "Axios"],
    github: "https://github.com/KW-AUTA/client",
    problem: "디자인 파일을 검증 요청으로 전달하고, 프로젝트별 진행 상태를 사용자가 확인할 수 있는 화면이 필요했습니다.",
    action: "대시보드 API를 화면과 연결하고 Figma JSON 업로드, 파일 검사, 인증 갱신·재시도를 구현했습니다.",
    result: "검증 요청과 현황 확인을 위한 클라이언트를 구현했습니다. 팀은 졸업작품전시회 장려상을 받았고 관련 기술을 공동발명자로 특허 출원했습니다.",
  },
  {
    id: "nextsalary",
    name: "다음월급",
    category: "연금 의사결정 지원 AI Agent",
    period: "2026.07 — 2026.09",
    role: "AI Agent · RAG · FastAPI · NCP",
    headline:
      "필요한 근거를 놓치던 검색을 고쳐, 31개 질문의 근거를 Top-5에 회수했습니다.",
    description:
      "158개 연금 문서에서 계좌·시점·금액·예외조건에 맞는 근거를 찾습니다. 검색과 계산·출처 검증은 프로그램이, 검증된 내용의 설명은 HyperCLOVA X가 담당합니다.",
    metrics: [
      ["158", "연금 문서"],
      ["31 / 31", "고정 질문의 필요 근거 Top-5 회수"],
      ["20 / 20", "조건 변경 질문 구조 검증"],
    ],
    condition:
      "고정 평가셋의 근거 회수·조건 변화 구조 검사. 최종 답변 정확도와 구분합니다.",
    tech: ["BM25", "BGE-M3", "HyperCLOVA X", "FastAPI", "NCP"],
    flow: [
      "BM25 + BGE-M3 검색",
      "조건·계산·출처 검증",
      "HyperCLOVA X 설명",
      "FastAPI · NCP",
    ],
    problem:
      "같은 연금 질문도 계좌·시점·금액이 바뀌면 필요한 근거와 설명이 달라졌습니다.",
    action:
      "BM25·BGE-M3 검색 뒤 조건·계산·출처를 코드로 검증하고, HyperCLOVA X에는 검증된 내용의 설명을 맡겼습니다.",
    result:
      "고정 질문 31/31에서 필요한 근거를 Top-5에 회수했고, 조건 변경 20/20의 설명 구조를 검증했습니다.",
  },
  {
    id: "deepsogak",
    name: "DeepSogak",
    category: "AI 합성물 피해 지원 서비스",
    period: "2026.07 — 2026.08",
    role: "ONNX · FastAPI · Model Validation",
    headline:
      "동일인 확인과 딥페이크 분석을 API로 연결해, 피해 지원 서비스를 구현했습니다.",
    description:
      "AI 합성물 피해 지원을 위해 동일인 확인과 딥페이크 분석을 구분했습니다. 별도 탐지 모델을 ONNX로 변환하고 FastAPI 분석 API로 연결했습니다.",
    metrics: [
      ["ONNX", "탐지 모델 변환"],
      ["FastAPI", "분석 API 구현"],
      ["아이디어상", "해커톤 · 팀 수상"],
    ],
    textMetrics: true,
    condition:
      "직접 담당: 탐지 모델 ONNX 변환·FastAPI 분석 API·보정 모델 검증. 아이디어상은 팀 성과입니다.",
    award:
      "제8회 첨단산업·디지털 핵심 실무인재 양성훈련 해커톤 자유과제 부문 아이디어상",
    tech: ["ArcFace", "PyTorch", "ONNX", "FastAPI"],
    github: "https://github.com/Chunbae-A/deepsogak",
    problem:
      "동일인 여부와 합성물 여부는 서로 다른 판단이며, 분석 모델을 사용자 서비스의 요청·응답으로 연결해야 했습니다.",
    action:
      "동일인 확인 이후 딥페이크 분석으로 이어지는 흐름을 구성하고, EfficientNet-B4 탐지 모델을 ONNX·FastAPI로 연결했습니다.",
    result:
      "서비스가 호출할 수 있는 분석 API를 구현했습니다. 팀은 제8회 KDT 해커톤 자유과제 부문 아이디어상을 받았습니다.",
  },
  {
    id: "chemicheck119",
    image: "/images/chemicheck-dashboard.png",
    name: "ChemiCheck119",
    category: "화학사고 현장 대응 지원 서비스",
    period: "2026.07 — 2026.08",
    role: "AI Resolver · API Integration · GCP Deployment",
    headline:
      "신고 표현의 검색 누락을 고쳐, 물질 후보 Top-1을 32.46%에서 89.74%로 높였습니다.",
    description:
      "신고문에서 물질 후보를 찾고, 현장에서 확인한 두 물질의 조합만 공식 규칙으로 검토하는 공모전 프로젝트입니다.",
    problem:
      "표준명 중심 검색은 별칭·오탈자를 놓쳤고, 기본 카탈로그 밖 물질은 후보에도 나오지 않았습니다.",
    action:
      "문자 2~5-gram TF-IDF에 현장 별칭을 보강하고, 카탈로그 밖 후보는 정확히 일치할 때만 추가했습니다. 두 CAS의 확인 상태를 API 계약으로 연결했습니다.",
    result:
      "과거 사고 표현 419건의 Top-1이 32.46% → 89.74%로 개선됐습니다. 확인되지 않은 물질은 규칙 실행으로 넘어가지 않도록 했습니다.",
    metrics: [
      ["89.74%", "419건의 물질 후보 Top-1"],
      ["+57.28%p", "기준 대비 Top-1 개선"],
      ["90.21%", "같은 평가의 Top-3 Recall"],
    ],
    condition:
      "2020년 울산 사고 표현 419건 재식별 평가 · 새 표현 60건은 개선 없음. 실제 현장 정확도가 아닙니다.",
    tech: [
      "Python",
      "TF-IDF",
      "FastAPI",
      "Spring Boot",
      "React",
      "GCP Cloud Run",
    ],
    github: "https://github.com/chemicheck119-lab",
    demo: "https://chemicheck119.site/",
    evaluation:
      "https://github.com/chemicheck119-lab/analysis-engine/blob/main/docs/EVALUATION.md",
    contribution:
      "직접 구현: Resolver·확인 Gate·AI API 계약·GCP 배포. 화면·인증·DB 저장·전체 API 연동은 협업했습니다.",
  },
];

export const strengths = [
  {
    title: "멈춘 업무를 재개시킵니다.",
    body: "문서 처리와 업무 상태 사이의 단절을 찾아 Outbox·승인 결과·최신 Context를 연결했습니다.",
    proof: "FOWOCO · 대표 Task 4/4 완료",
    href: "#project/fowoco",
    index: "01",
    label: "WORKFLOW / BACKEND",
  },
  {
    title: "검색 오류의 원인을 나눕니다.",
    body: "별칭 부족과 후보 누락을 나눠 수정하고, 같은 평가셋으로 개선 범위와 한계를 확인했습니다.",
    proof: "ChemiCheck119 · 419건 Top-1 +57.28%p",
    href: "#project/chemicheck119",
    index: "02",
    label: "RETRIEVAL / EVALUATION",
  },
  {
    title: "모델을 서비스 API로 연결합니다.",
    body: "동일인 확인과 딥페이크 분석을 나누고, 탐지 모델을 ONNX로 변환해 FastAPI 분석 API를 구현했습니다.",
    proof: "DeepSogak · ONNX 변환·분석 API 구현",
    href: "#project/deepsogak",
    index: "03",
    label: "MODEL / SERVICE",
  },
];

export const experience = [
  {
    date: "2026.03 — 2026.09",
    title: "KT AIVLE School 9기 AI Track",
    detail:
      "AI·ML·Deep Learning 기초에서 LLMOps·생성형 AI, LangGraph 미니프로젝트를 거쳐 FOWOCO 업무형 Agent의 통합·검증까지 확장했습니다.",
    tags: ["AI·데이터 학습", "LangGraph 미니프로젝트", "업무형 Agent 통합"],
  },
  {
    date: "2020.03 — 2026.08",
    title: "광운대학교 정보융합학 전공",
    detail: "GPA 3.87 / 4.5 · 학사 졸업",
  },
  {
    date: "2025.11",
    title: "ADsP · 데이터분석 준전문가",
    detail: "한국데이터산업진흥원",
  },
  {
    date: "2026.03.30",
    title: "OPIc English · IM1",
    detail: "영어 말하기 평가 · Intermediate Mid 1",
  },
];

export const skills = [
  [
    "AI / Data",
    ["Python", "LLM", "RAG", "AI Agent", "LangGraph", "BERT", "BM25", "BGE-M3"],
  ],
  ["Backend", ["Java", "Spring Boot", "FastAPI", "REST API", "PostgreSQL"]],
  ["Frontend", ["React", "TypeScript", "React Native"]],
  ["Cloud / Engineering", ["NCP", "Git", "GitHub", "CI", "Outbox Pattern"]],
];

export const workflow = [
  "자연어 요청",
  "Intent 분류",
  "필수정보 보완",
  "검증",
  "Workflow 선택",
  "HR 승인",
  "Task 실행",
  "완료 증빙",
  "완료",
];
