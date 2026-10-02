export const education = [
  {
    "date": "2026.03 — 2026.09",
    "title": "KT AIVLE School 9기 AI Track",
    "detail": "AI·ML·Deep Learning 기초에서 LLMOps·생성형 AI, LangGraph 미니프로젝트를 거쳐 FOWOCO 업무형 Agent의 통합·검증까지 확장했습니다.",
    "tags": [
      "AI·데이터 학습",
      "LangGraph 미니프로젝트",
      "업무형 Agent 통합"
    ]
  },
  {
    "date": "2020.03 — 2026.08",
    "title": "광운대학교 정보융합학 전공",
    "detail": "GPA 3.87 / 4.5 · 학사 졸업"
  }
];

export const profile = {
  "name": "최현준",
  "role": "AI Service / Agent Developer",
  "email": "choi.hyunjun@outlook.com",
  "github": "https://github.com/hywznn",
  "headline": [
    "업무를 분석해 AI Agent를 설계하고,",
    "서비스 구현까지 맡은",
    "개발자 최현준입니다."
  ],
  "description": "FOWOCO에서는 현업 조사로 확인한 행정업무 부담을 바탕으로 Agent의 처리 절차를 설계하고 서버 통합을 맡았습니다. 다음월급에서는 검색 누락을 개선해 고정 평가 31문항 모두의 필요 근거를 상위 5개 결과에 포함시켰습니다.",
  "achievements": [
    {
      "id": "nextsalary",
      "project": "다음월급",
      "contribution": "검색 구조 개선",
      "result": "31 / 31",
      "context": [
        "고정 평가 질문의 필요 근거 Top-5 검색"
      ]
    },
    {
      "id": "auta",
      "project": "AUTA",
      "contribution": "클라이언트 개발",
      "result": "장려상 · 특허 출원",
      "context": [
        "졸업작품전시회 팀 수상 · 관련 기술 공동발명"
      ]
    },
    {
      "id": "deepsogak",
      "project": "DeepSogak",
      "contribution": "분석 API · 모델 검증",
      "result": "해커톤 아이디어상",
      "context": [
        "제8회 KDT 해커톤 자유과제 · 팀 수상"
      ]
    }
  ]
};

export const projects = [
  {
    "id": "fowoco",
    "name": "FOWOCO",
    "category": "외국인 근로자 행정업무 AI Agent",
    "period": "2026.06 — 2026.08",
    "role": "TPM · 업무 설계 · 서버 통합",
    "headline": "행정 절차를 분석해, 승인과 증빙이 남는 업무형 Agent를 구현했습니다.",
    "description": "E-9 근로자의 재계약·취업활동기간 연장·체류기간 연장 준비를 돕습니다. 인사 담당자가 서류와 진행 상태를 확인하고, 승인한 업무를 이어갈 수 있습니다.",
    "metrics": [
      [
        "2 → 1",
        "동일 요청의 Intent 분류"
      ],
      [
        "4 / 4",
        "대표 Case의 Task 완료"
      ],
      [
        "3",
        "핵심 행정업무 시나리오"
      ]
    ],
    "condition": "합성 문서를 사용한 로컬 E2E · 대표 Case 1개, Task 4개. 기관 제출 실적이 아닌 내부 업무 흐름 검증입니다.",
    "tech": [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "FastAPI",
      "BERT",
      "A.X",
      "AI Agent",
      "Outbox",
      "SSE"
    ],
    "github": "https://github.com/fowoco/server",
    "problem": "문서를 받아 OCR까지 끝냈지만, 업무가 다음 단계로 넘어가지 않았습니다.",
    "action": "Outbox·멱등 접수·HR 검토를 연결하고, 승인된 최신 정보로 Workflow를 재개했습니다.",
    "result": "문서 제출부터 HWP 생성·승인·증빙까지 연결해 대표 Case의 Task 4/4를 완료했습니다.",
    "image": "/images/fowoco-dashboard.png",
    "cardContribution": "업무 요구사항과 Server–AI 계약을 정리하고, 문서 검토·승인·업무 재개를 구현했습니다.",
    "cardResult": {
      "value": "2 → 1",
      "label": "동일 요청의 Intent 분류 횟수",
      "note": "PLAN의 판단을 재사용해 단계 간 Workflow 선택을 일치시켰습니다."
    },
    "logo": "/images/fowoco-logo.png",
    "imageLabel": "업무 관리 대시보드 · 데모"
  },
  {
    "id": "auta",
    "image": "/images/auta-dashboard.png",
    "imageLabel": "직접 구현한 대시보드 · 개발 화면",
    "name": "AUTA",
    "category": "Figma 기반 UI/UX 자동 검증 서비스",
    "period": "개발 2025.04 — 2025.10",
    "role": "Frontend · React / TypeScript",
    "headline": "디자인 검증을 요청하고 진행 현황을 확인하는 클라이언트를 구현했습니다.",
    "description": "Figma 디자인과 구현된 웹 화면을 비교하는 UI/UX 자동 검증 서비스입니다. 설계 자료를 등록하고 프로젝트별 검증 현황을 확인합니다.",
    "metrics": [
      [
        "장려상",
        "졸업작품전시회 · 팀 수상"
      ],
      [
        "특허 출원",
        "관련 기술 · 공동발명자"
      ]
    ],
    "textMetrics": true,
    "condition": "장려상은 팀 수상이며, 관련 기술 특허는 공동발명자로 2026.02.13 출원·심사청구했습니다.",
    "award": "2025학년도 광운대학교 인공지능융합대학 졸업작품전시회 장려상",
    "tech": [
      "React",
      "TypeScript",
      "TanStack Query",
      "Axios"
    ],
    "github": "https://github.com/KW-AUTA/client",
    "problem": "디자인 파일을 검증 요청으로 전달하고, 프로젝트별 진행 상태를 사용자가 확인할 수 있는 화면이 필요했습니다.",
    "action": "대시보드 API를 화면과 연결하고 Figma JSON 업로드, 파일 검사, 인증 갱신·재시도를 구현했습니다.",
    "result": "검증 요청과 현황 확인을 위한 클라이언트를 구현했습니다. 팀은 졸업작품전시회 장려상을 받았고 관련 기술을 공동발명자로 특허 출원했습니다.",
    "cardContribution": "프로젝트 생성·파일 업로드·대시보드를 구현하고, 인증 만료와 네트워크 예외를 처리했습니다.",
    "cardResult": {
      "value": "장려상 · 특허 출원",
      "label": "졸업작품전시회 · 관련 기술",
      "note": "팀 수상 · 특허 공동발명자 (2026.02 출원)"
    }
  },
  {
    "id": "nextsalary",
    "image": "/images/nextsalary-demo.png",
    "imageLabel": "연금 상담 데모 시안",
    "name": "다음월급",
    "category": "연금 의사결정 지원 AI Agent",
    "period": "2026.07 — 2026.09",
    "role": "1인 주도 개발 · RAG · FastAPI · NCP",
    "headline": "질문에 필요한 근거를 찾고, 조건에 맞춰 설명하는 연금 Agent를 개발했습니다.",
    "description": "계좌 종류와 수령 시점에 따라 달라지는 연금 질문에 근거와 확인할 조건을 제시합니다. 검색·조건 검증은 코드가, 검증된 내용의 설명은 LLM이 담당합니다.",
    "metrics": [
      [
        "158",
        "연금 문서"
      ],
      [
        "31 / 31",
        "고정 질문의 필요 근거 Top-5 회수"
      ],
      [
        "20 / 20",
        "조건 변경 질문 구조 검증"
      ]
    ],
    "condition": "고정 질문 31개의 원문 근거 Top-5 검색과 조건 변경 20개의 응답 구조를 평가했습니다. 최종 답변의 정확도와는 구분합니다.",
    "tech": [
      "BM25",
      "BGE-M3",
      "HyperCLOVA X",
      "FastAPI",
      "NCP"
    ],
    "flow": [
      "BM25 + BGE-M3 검색",
      "조건·계산·출처 검증",
      "HyperCLOVA X 설명",
      "FastAPI · NCP"
    ],
    "problem": "같은 연금 질문도 계좌·시점·금액이 바뀌면 필요한 근거와 설명이 달라졌습니다.",
    "action": "BM25·BGE-M3 검색 뒤 조건·계산·출처를 코드로 검증하고, HyperCLOVA X에는 검증된 내용의 설명을 맡겼습니다.",
    "result": "고정 질문 31/31에서 필요한 근거를 Top-5에 회수했고, 조건 변경 20/20의 설명 구조를 검증했습니다.",
    "cardContribution": "근거 누락의 원인을 찾아 검색 후보를 보완하고, 검증 로직·API·클라우드 배포를 구현했습니다.",
    "cardResult": {
      "value": "31 / 31",
      "label": "필요 근거를 Top-5에서 검색",
      "note": "고정 평가 질문 31개 기준 · 근거 검색 평가"
    }
  },
  {
    "id": "deepsogak",
    "name": "DeepSogak",
    "category": "AI 합성물 피해 지원 서비스",
    "period": "2026.07 — 2026.08",
    "role": "모델 검증 · ONNX 변환 · FastAPI",
    "headline": "동일인 확인과 합성물 분석을 서비스에서 호출할 수 있도록 구현했습니다.",
    "description": "공개된 얼굴 후보를 확인하고 AI 합성물 분석 정보를 제공하는 피해 지원 프로토타입입니다. 동일인 여부와 합성 여부를 단계별로 구분합니다.",
    "metrics": [
      [
        "분석 API",
        "요청 · 진행 조회 · 결과 반환"
      ],
      [
        "ONNX",
        "탐지 모델 변환"
      ],
      [
        "아이디어상",
        "제8회 KDT 해커톤 · 팀 수상"
      ]
    ],
    "textMetrics": true,
    "condition": "EfficientNet-B4 탐지 모델의 ONNX 변환·FastAPI 연동 결과입니다. 별도 ArcFace 보정 모델의 실험과 적용 판단은 아래에 정리했습니다.",
    "award": "제8회 첨단산업·디지털 핵심 실무인재 양성훈련 해커톤 자유과제 부문 아이디어상",
    "tech": [
      "ArcFace",
      "PyTorch",
      "ONNX",
      "FastAPI"
    ],
    "github": "https://github.com/Chunbae-A/deepsogak",
    "problem": "동일인 여부와 합성물 여부는 서로 다른 판단이며, 분석 모델을 사용자 서비스의 요청·응답으로 연결해야 했습니다.",
    "action": "동일인 확인 이후 딥페이크 분석으로 이어지는 흐름을 구성하고, EfficientNet-B4 탐지 모델을 ONNX·FastAPI로 연결했습니다.",
    "result": "서비스가 호출할 수 있는 분석 API를 구현했습니다. 팀은 제8회 KDT 해커톤 자유과제 부문 아이디어상을 받았습니다.",
    "cardContribution": "탐지 모델을 ONNX로 변환하고, 분석 요청·진행 조회·결과 반환 API를 구현했습니다.",
    "cardResult": {
      "value": "아이디어상",
      "label": "제8회 KDT 해커톤 자유과제",
      "note": "팀 수상 · 개인 담당: 분석 API와 모델 검증"
    },
    "image": "/images/deepsogak-analysis.png",
    "imageLabel": "모델 연동 시험 · 개발 화면"
  },
  {
    "id": "chemicheck119",
    "image": "/images/chemicheck-dashboard.png",
    "name": "ChemiCheck119",
    "category": "화학사고 현장 대응 지원 서비스",
    "period": "2026.07 — 2026.08",
    "role": "물질 검색 · AI API 계약 · GCP 배포",
    "headline": "신고 표현의 물질 검색을 개선하고, 확인된 조합만 검토하도록 구현했습니다.",
    "description": "화학사고 신고문에서 물질 후보를 찾아 대응 검토를 돕는 서비스입니다. 담당자가 두 물질을 확인하면 해당 조합의 공식 대응 규칙을 조회합니다.",
    "problem": "표준명 중심 검색은 별칭·오탈자를 놓쳤고, 기본 카탈로그 밖 물질은 후보에도 나오지 않았습니다.",
    "action": "문자 2~5-gram TF-IDF에 현장 별칭을 보강하고, 카탈로그 밖 후보는 정확히 일치할 때만 추가했습니다. 두 CAS의 확인 상태를 API 계약으로 연결했습니다.",
    "result": "과거 사고 표현 419건의 Top-1이 32.46% → 89.74%로 개선됐습니다. 확인되지 않은 물질은 규칙 실행으로 넘어가지 않도록 했습니다.",
    "metrics": [
      [
        "89.74%",
        "419건의 물질 후보 Top-1"
      ],
      [
        "+57.28%p",
        "기준 대비 Top-1 개선"
      ],
      [
        "90.21%",
        "같은 평가의 Top-3 Recall"
      ]
    ],
    "condition": "2020년 울산 사고 표현 419건 재식별 평가입니다. 새 표현 60건에서는 개선이 없어 현장 정확도나 일반화 성능으로 확대하지 않습니다.",
    "tech": [
      "Python",
      "TF-IDF",
      "FastAPI",
      "Spring Boot",
      "React",
      "GCP Cloud Run"
    ],
    "github": "https://github.com/chemicheck119-lab",
    "demo": "https://chemicheck119.site/",
    "evaluation": "https://github.com/chemicheck119-lab/analysis-engine/blob/main/docs/EVALUATION.md",
    "contribution": "직접 구현: Resolver·확인 Gate·AI API 계약·GCP 배포. 화면·인증·DB 저장·전체 API 연동은 협업했습니다.",
    "cardContribution": "별칭·누락 후보를 보완하고, 물질 확인 절차와 API 계약을 구현해 GCP에 배포했습니다.",
    "cardResult": {
      "value": "32.46% → 89.74%",
      "label": "물질 후보 Top-1 일치율",
      "note": "2020년 울산 사고 표현 419건 재식별 평가"
    },
    "logo": "/images/chemicheck-logo.png",
    "imageLabel": "합성 지령을 사용하는 공개 데모"
  }
];

export const qualifications = [
  {
    "date": "2025.11",
    "title": "ADsP · 데이터분석 준전문가",
    "detail": "한국데이터산업진흥원"
  },
  {
    "date": "2026.03.30",
    "title": "OPIc English · IM1",
    "detail": "영어 말하기 평가 · Intermediate Mid 1"
  }
];

export const skills = [
  {
    "category": "AI / Data",
    "items": [
      "Python",
      "LLM",
      "RAG",
      "AI Agent",
      "LangGraph",
      "BERT",
      "BM25",
      "BGE-M3",
      "PyTorch",
      "ONNX"
    ],
    "use": "근거 검색, 모델 검증과 추론 API",
    "project": "다음월급 · DeepSogak",
    "href": "#project/nextsalary"
  },
  {
    "category": "Backend",
    "items": [
      "Java",
      "Spring Boot",
      "FastAPI",
      "REST API",
      "PostgreSQL",
      "Outbox"
    ],
    "use": "업무 상태, 승인과 비동기 처리",
    "project": "FOWOCO · 서버 통합",
    "href": "#project/fowoco"
  },
  {
    "category": "Frontend",
    "items": [
      "React",
      "TypeScript",
      "React Native",
      "TanStack Query",
      "Axios"
    ],
    "use": "파일 업로드, 현황 조회와 예외 처리",
    "project": "AUTA · 클라이언트",
    "href": "#project/auta"
  },
  {
    "category": "Cloud / Engineering",
    "items": [
      "NCP",
      "GCP Cloud Run",
      "Git",
      "GitHub",
      "CI"
    ],
    "use": "서비스 배포와 변경 사항 검증",
    "project": "ChemiCheck119 · GCP 배포",
    "href": "#project/chemicheck119"
  }
];

export const strengths = [
  {
    "index": "01",
    "label": "업무 정의 · 팀 협업",
    "title": "구현 전에 책임과 기준을 정했습니다.",
    "body": "FOWOCO에서 서버·AI·Knowledge의 역할과 API 계약 소유권을 제안했습니다. 채택된 기준을 후속 기능 개발과 통합에 적용했습니다.",
    "proof": "FOWOCO · 설계 결정과 팀 적용 기록",
    "href": "#project/fowoco"
  },
  {
    "index": "02",
    "label": "검색 · 검증",
    "title": "어느 단계에서 근거가 빠지는지 찾았습니다.",
    "body": "다음월급에서 관련 문서 검색과 필요한 원문 근거 검색을 구분했습니다. 후보 구성과 평가 기준을 바꿔 검색 누락을 확인하고 개선했습니다.",
    "proof": "다음월급 · 고정 질문 31개의 근거 검색",
    "href": "#project/nextsalary"
  },
  {
    "index": "03",
    "label": "사용자 화면 · API",
    "title": "요청부터 결과 확인까지 구현했습니다.",
    "body": "AUTA에서는 프로젝트 생성과 현황 조회 화면을, DeepSogak에서는 모델 분석 요청·진행 조회·결과 반환 API를 구현했습니다.",
    "proof": "AUTA · 클라이언트 구현 과정",
    "href": "#project/auta"
  }
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
  "완료"
];
