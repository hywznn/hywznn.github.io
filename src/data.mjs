export const profile = {
 name:'최현준', role:'AI Service / Agent Developer', email:'choi.hyunjun@outlook.com', github:'https://github.com/hywznn',
 headline:['끊긴 업무를 연결해,','완료까지 가는','AI 서비스를 만듭니다.'],
 description:'중복된 Intent 판단은 한 번으로, 끊긴 OCR 이후 업무는 다시 실행되도록. AI의 결과를 검증·승인·증빙이 있는 Backend 흐름으로 연결합니다.'
};
export const projects = [
 {id:'fowoco', name:'FOWOCO', category:'외국인 근로자 행정업무 AI Agent', period:'2026.06 — 2026.08', role:'TPM · Product Design · Backend Integration', headline:'서류 제출에서 멈추던 업무를, 완료 증빙까지 연결했습니다.', description:'E-9 근로자의 재계약·취업활동기간 연장·체류기간 연장 요청을 필수정보 확인, HR 승인, 업무 실행으로 연결한 팀 프로젝트입니다.', metrics:[['3','핵심 행정업무 시나리오'],['2 → 1','동일 요청의 Intent 분류'],['4 / 4','대표 Case의 Task 완료']], condition:'로컬 합성 문서 기반 대표 Case 1개 검증. 실제 기관 제출 실적과 구분합니다.', tech:['Java','Spring Boot','PostgreSQL','FastAPI','BERT','A.X','AI Agent','Outbox','SSE'], github:'https://github.com/fowoco/server'},
 {id:'nextsalary',name:'다음월급',category:'연금 의사결정 지원 AI Agent',period:'2026.07 — 2026.09',role:'AI Agent · RAG · FastAPI · NCP',headline:'연금 질문의 조건은 코드로 검증하고, LLM은 근거를 설명하게 했습니다.',description:'158개 연금 문서에서 계좌·시점·금액·예외조건에 맞는 근거를 찾습니다. 검색과 계산·출처 검증은 프로그램이, 검증된 내용의 설명은 HyperCLOVA X가 담당합니다.',metrics:[['158','연금 문서'],['31 / 31','고정 질문의 필요 근거 Top-5 회수'],['20 / 20','조건 변경 질문 구조 검증']],condition:'고정 평가 질문 기준의 검색·검증 결과이며, 전체 답변 정확도를 의미하지 않습니다.',tech:['BM25','BGE-M3','HyperCLOVA X','FastAPI','NCP'],flow:['BM25 + BGE-M3 검색','조건·계산·출처 검증','HyperCLOVA X 설명','FastAPI · NCP']},
 {id:'deepsogak',name:'DeepSogak',category:'AI 합성물 피해 지원 서비스',period:'2026.07 — 2026.08',role:'AI Model Validation · FastAPI',headline:'잠금 Test에서 기준 미달을 확인해, 신규 모델 적용을 멈췄습니다.',description:'저화질 얼굴 인식용 ArcFace 특징 보정 모델을 학습했지만 기준 미달을 확인했습니다. 신규 모델의 API 적용을 중단하고, 동일인 확인 후 딥페이크를 분석하는 검증 가능한 흐름에 집중했습니다.',metrics:[['−0.96%p','저화질 TAR, 기존 대비'],['0.125%','최악 FAR · 목표 ≤ 0.1%']],condition:'잠금 Test 기준. 성능 개선 수치가 아닌 적용 보류의 판단 근거입니다.',award:'제8회 첨단산업·디지털 핵심 실무인재 양성훈련 해커톤 자유과제 부문 아이디어상',tech:['ArcFace','PyTorch','ONNX','FastAPI'],github:'https://github.com/Chunbae-A/deepsogak'}
];
export const strengths = [
 ['01','업무를 실행 가능한 단계로','AI Agent & Workflow','자연어 요청을 Intent와 필수정보로 나누고, 검증·승인·업무 상태를 거쳐 실행 가능한 Workflow로 설계합니다.'],
 ['02','판단의 책임을 분명하게','LLM / RAG Service','검색·조건판정·계산·출처 검증과 설명의 책임을 분리합니다. LLM이 맡아야 할 일과 코드가 보장해야 할 일을 구분합니다.'],
 ['03','실패 뒤에도 이어지는 처리','Backend Integration','Spring Boot·FastAPI의 API 계약과 상태를 맞추고, 멱등성·비동기 처리·장애 복구로 업무가 다시 이어지게 만듭니다.']
];
export const experience = [
 {date:'2026.03 — 2026.09', title:'KT AIVLE School 9기 AI Track', detail:'AI·ML·Deep Learning 기초에서 LLMOps·생성형 AI, LangGraph 미니프로젝트를 거쳐 FOWOCO 업무형 Agent의 통합·검증까지 확장했습니다.', tags:['AI·데이터 학습','LangGraph 미니프로젝트','업무형 Agent 통합']},
 {date:'2020.03 — 2026.08',title:'광운대학교 정보융합학 전공',detail:'GPA 3.87 / 4.5 · 학사 졸업'},
 {date:'2025.11',title:'ADsP · 데이터분석 준전문가',detail:'한국데이터산업진흥원'}
];
export const skills = [
 ['AI / Data',['Python','LLM','RAG','AI Agent','LangGraph','BERT','BM25','BGE-M3']],
 ['Backend',['Java','Spring Boot','FastAPI','REST API','PostgreSQL']],
 ['Frontend',['React','TypeScript','React Native']],
 ['Cloud / Engineering',['NCP','Git','GitHub','CI','Outbox Pattern']]
];
export const otherProjects = [
 {name:'K-water 대청호 유해남조류 예측',type:'시계열 모델링 · 본선 발표',result:'위험 사례 Recall 1.0 · 기준 모델 대비 RMSE 약 18% 감소',note:'팀의 시간 분할 검증 결과. 모델 후보 비교·평가·본선 발표를 담당했습니다.',github:'https://github.com/Chunbae-A/model'},
 {name:'AUTA',type:'Figma 기반 UI/UX 자동 검증',result:'React·TypeScript 클라이언트 구현 · 졸업작품 장려상',note:'관련 기술 특허 공동발명·출원. 수상은 팀 성과입니다.',github:'https://github.com/KW-AUTA/client'},
 {name:'신용카드 리볼빙·현금서비스 예측',type:'금융 데이터 분석',result:'Macro F1 약 0.81',note:'프로젝트 평가 기준의 분류 결과입니다.'}
];
export const workflow = ['자연어 요청','Intent 분류','필수정보 보완','검증','Workflow 선택','HR 승인','Task 실행','완료 증빙','완료'];
