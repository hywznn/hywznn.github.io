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
    problem: "저화질 인식 보정 모델이 잠금 Test에서 기준에 미달했습니다.",
    action:
      "보정 모델 적용을 멈추고, 별도 탐지 모델을 분석 API로 연결했습니다.",
    outcome: "검증 기준에 못 미친 보정 모델의 API 적용을 보류했습니다.",
    value: "적용 보류",
    label: "기준 미달 보정 모델",
    condition:
      "잠금 Test에서 저화질 TAR 하락·FAR 목표 초과. 별도 탐지 모델의 ONNX·FastAPI 구현과 구분합니다.",
    role: "모델 검증 · FastAPI 분석 API",
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
