export const profile = {
  name: "최현준",
  role: "AI Service / Agent Developer",
  email: "choi.hyunjun@outlook.com",
  github: "https://github.com/hywznn",
  headline: ["끊긴 업무를 연결해,", "완료까지 가는", "AI 서비스를 만듭니다."],
  description:
    "중복된 Intent 판단은 한 번으로, 끊긴 OCR 이후 업무는 다시 실행되도록. AI의 결과를 검증·승인·증빙이 있는 Backend 흐름으로 연결합니다.",
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
    role: "AI Model Validation · FastAPI",
    headline:
      "잠금 Test에서 성능 하락을 확인하고, 보정 모델의 적용을 중단했습니다.",
    description:
      "저화질 얼굴 인식용 ArcFace 특징 보정 모델을 학습했지만 기준 미달을 확인했습니다. 신규 모델의 API 적용을 중단하고, 동일인 확인 후 딥페이크를 분석하는 검증 가능한 흐름에 집중했습니다.",
    metrics: [
      ["−0.96%p", "저화질 TAR, 기존 대비"],
      ["0.125%", "최악 FAR · 목표 ≤ 0.1%"],
    ],
    condition:
      "잠금 Test · 저화질 TAR 79.01% → 78.05%. 중단한 보정 모델과 별도 분석 API를 구분합니다.",
    award:
      "제8회 첨단산업·디지털 핵심 실무인재 양성훈련 해커톤 자유과제 부문 아이디어상",
    tech: ["ArcFace", "PyTorch", "ONNX", "FastAPI"],
    github: "https://github.com/Chunbae-A/deepsogak",
    problem:
      "저화질 얼굴 인식을 개선하려 학습한 보정 모델이 잠금 Test에서 기존 모델보다 낮은 TAR을 보였습니다.",
    action:
      "FAR 목표까지 초과한 결과를 확인해 API 적용을 보류했습니다. 별도 EfficientNet-B4 탐지 모델은 ONNX·FastAPI 분석 흐름으로 구현했습니다.",
    result:
      "확인되지 않은 보정 모델을 배포하지 않고, 동일인 확인과 딥페이크 분석의 역할을 분리했습니다.",
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
    href: "#fowoco-case",
    index: "01",
    label: "WORKFLOW / BACKEND",
  },
  {
    title: "검색 오류의 원인을 나눕니다.",
    body: "별칭 부족과 후보 누락을 나눠 수정하고, 같은 평가셋으로 개선 범위와 한계를 확인했습니다.",
    proof: "ChemiCheck119 · 419건 Top-1 +57.28%p",
    href: "#chemicheck119",
    index: "02",
    label: "RETRIEVAL / EVALUATION",
  },
  {
    title: "배포 여부를 검증으로 결정합니다.",
    body: "보정 모델의 성능 하락과 FAR 목표 초과를 확인해 적용을 멈추고, 별도 분석 흐름을 구현했습니다.",
    proof: "DeepSogak · 잠금 Test 후 적용 보류",
    href: "#deepsogak",
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

export const otherProjects = [
  {
    name: "K-water 대청호 유해남조류 예측",
    type: "시계열 모델링 · 본선 발표",
    result: "위험 사례 Recall 1.0 · 기준 모델 대비 RMSE 약 18% 감소",
    note: "팀의 시간 분할 검증 결과. 모델 후보 비교·평가·본선 발표를 담당했습니다.",
    github: "https://github.com/Chunbae-A/model",
  },
  {
    name: "AUTA",
    type: "Figma 기반 UI/UX 자동 검증",
    result: "React·TypeScript 클라이언트 구현 · 졸업작품 장려상",
    note: "관련 기술 특허 공동발명·출원. 수상은 팀 성과입니다.",
    github: "https://github.com/KW-AUTA/client",
  },
  {
    name: "신용카드 리볼빙·현금서비스 예측",
    type: "금융 데이터 분석",
    result: "Macro F1 약 0.81",
    note: "프로젝트 평가 기준의 분류 결과입니다.",
  },
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
