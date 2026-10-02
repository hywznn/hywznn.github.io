export const projectSummaries = {
  fowoco: {
    problem: "문서를 받아 OCR까지 마쳤지만 다음 업무가 멈췄습니다.",
    action: "Outbox·멱등 접수·HR 검토를 연결해 업무를 재개했습니다.",
    outcome: "문서 제출부터 승인·증빙·완료까지 흐름을 연결했습니다.",
    value: "4 / 4",
    label: "대표 Case의 Task 완료",
    condition:
      "합성 문서 기반 로컬 E2E · 대표 Case 1개. 실제 기관 제출 실적이 아닙니다.",
    role: "TPM · 제품 설계 · Backend 통합",
  },
  auta: {
    problem: "디자인 검증 요청과 진행 현황을 사용자 화면으로 연결해야 했습니다.",
    action: "대시보드·Figma JSON 업로드·인증 갱신과 재시도를 구현했습니다.",
    outcome: "팀 프로젝트는 장려상을 받았고, 관련 기술 특허의 공동발명자로 참여했습니다.",
    value: "장려상 · 특허 출원",
    label: "졸업작품 · 관련 기술",
    condition: "2025.11 팀 수상 · 2026.02.13 특허 출원·심사청구 · 공동발명자",
    role: "Frontend · 대시보드·파일 업로드·인증 복구",
  },
  nextsalary: {
    problem: "조건이 달라지는 연금 질문에서 필요한 근거를 놓쳤습니다.",
    action:
      "검색·조건 검증은 코드로, 검증된 내용의 설명은 LLM으로 나눴습니다.",
    outcome: "고정 질문마다 답에 필요한 근거를 검색 결과에서 찾았습니다.",
    value: "31 / 31",
    label: "필요 근거 Top-5 회수",
    condition:
      "고정 평가 질문 31개에서 필요한 근거가 Top-5에 검색된 결과. 최종 답변 정확도와 구분합니다.",
    role: "AI Agent · RAG · FastAPI · NCP",
  },
  deepsogak: {
    problem: "모델의 분석 결과를 피해 지원 서비스에서 사용할 수 있어야 했습니다.",
    action:
      "동일인 확인과 딥페이크 분석을 나누고 ONNX·FastAPI로 연결했습니다.",
    outcome: "분석 API를 구현했고, 팀은 해커톤 아이디어상을 받았습니다.",
    value: "아이디어상",
    label: "제8회 KDT 해커톤 · 팀 수상",
    condition:
      "ONNX 변환·FastAPI 분석 API 구현. 보정 모델 실험 결과는 상세에 별도로 정리했습니다.",
    role: "ONNX 변환 · FastAPI 분석 API · 모델 검증",
  },
  chemicheck119: {
    problem: "별칭과 카탈로그 밖 물질이 검색 후보에서 빠졌습니다.",
    action:
      "문자 TF-IDF에 별칭을 보강하고, 정확 일치 후보를 추가했습니다.",
    outcome: "같은 과거 사고 표현에서 물질 후보 검색 누락을 줄였습니다.",
    value: "32.46% → 89.74%",
    label: "419건 물질 후보 Top-1",
    condition:
      "2020년 울산 사고 표현 419건 재식별 평가. 새 표현 60건은 개선 없음. 실제 현장 정확도가 아닙니다.",
    role: "물질 검색·확인 Gate · AI API 계약 · GCP 배포",
  },
};
