export const contributionGroups=[
 {title:'업무 정의와 실행 계약',items:['현업 조사 · Workflow 요구사항 구조화','Intent / Workflow / Required Slot 정의','Knowledge Slot · 출처 · 담당자 · 검증 규칙','Server–AI Contract 통합']},
 {title:'상태 관리와 복구 구현',items:['Task / Checklist / Approval / Evidence 상태','AiRun / Attempt / Candidate 요청 이력','멱등성 · UNIQUE · Row Lock','Transactional Outbox · OCR 이후 업무 재개']},
 {title:'승인과 완료의 검증',items:['Human Approval 실행 경계','revision / fingerprint로 최신 상태 검증','Server–AI 통합 QA','대표 시나리오 E2E 검증']}
];
export const solving=[
 {number:'01',title:'같은 요청을 왜 두 번 판단해야 할까?',problem:'PLAN과 ANALYZE에서 동일한 요청을 다시 분류했습니다. 단계마다 Intent가 달라지면 서로 다른 Workflow를 선택할 수 있었습니다.',action:'PLAN에서 결정한 Intent·Workflow를 저장하고 ANALYZE에서 재사용하도록 Server–AI 계약을 개선했습니다.',before:'PLAN 분류 → ANALYZE 재분류',after:'PLAN 분류·저장 → ANALYZE 재사용',value:'2 → 1',label:'동일 요청의 Intent 분류 횟수',result:'중복 분류를 제거하고, 단계 간 Workflow 선택을 일관되게 유지했습니다.'},
 {number:'02',title:'서류를 받았는데, 업무는 멈춰 있었습니다.',problem:'근로자가 문서를 제출해 OCR이 끝나도 이후 업무로 이어지지 않았습니다. 문서 처리와 업무 상태 갱신 사이의 연결이 필요했습니다.',action:'Outbox와 멱등 OCR 접수, HR 검토·승인 결과 반영을 연결했습니다. 최신 Context로 업무를 재개하도록 처리했습니다.',before:'문서 제출 → OCR → 흐름 단절',after:'OCR → HR 검토 → 업무 재개 → 초안',value:'OCR → 재개',label:'끊긴 비동기 업무의 연결',result:'승인된 문서 정보를 반영해 Workflow를 재개하고 문서 초안 생성까지 연결했습니다.'}
];
