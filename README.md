# 최현준 · AI Service / Agent Developer

**[포트폴리오 열기](https://hywznn.github.io/)**

FOWOCO, AUTA, 다음월급, DeepSogak, ChemiCheck119의 문제 발견·개인 기여·성과를 소개하는 한국어 포트폴리오입니다.

## 기술과 실행

React 19 · Vite 8 · React Bits. 서버나 DB 없이 GitHub Pages에 정적으로 배포합니다. 빌드 시 주요 페이지를 HTML로 미리 렌더링하여 JavaScript 로딩 전에도 개요와 대표 성과를 읽을 수 있습니다. 프로젝트 상세 창은 JavaScript로 열립니다.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

개발/미리보기 주소: `http://127.0.0.1:4173`. Node.js 22.12 이상 권장.

## 수정 위치

- `src/data.mjs`: 첫 화면 자기소개, 프로젝트, 기간, 역할, 성과, 경력, 기술 데이터
- `src/summary-data.mjs`: 프로젝트 목록의 짧은 문제·해결·대표 결과
- `src/project-details.mjs`: 프로젝트별 개인 기여·아키텍처·기술 선택 이유·추가 검증
- `src/components/Hero.jsx`: 이름·개발자 정체성과 전공·교육·경험 소개
- `src/components/Projects.jsx`: 서비스 이미지/흐름 카드와 상세 링크
- `src/components/ProjectDialog.jsx`: 키보드·뒤로 가기·프로젝트 이동을 지원하는 상세 창
- `src/components/Background.jsx`: 경력·기술·연락
- `src/components/reactbits/`: React Bits 공식 소스와 제한적인 수정
- `src/styles.css`: 기본 디자인·반응형·모션 감소 설정
- `src/projects.css`: 프로젝트 카드·상세 창 디자인
- `public/images/`: 공개 가능한 서비스 데모 이미지
- `scripts/prerender.mjs`: React HTML 사전 렌더링
- `docs/`: GitHub Pages 배포 결과

스크린샷을 교체하려면 `public/images`에 공개 가능한 이미지를 넣고 `src/data.mjs`의 해당 프로젝트 `image` 경로를 수정합니다. 실제 이름·문서·민감정보가 없는 화면만 사용합니다.

수정 후 `npm run build`를 실행하고 소스와 `docs`를 함께 커밋·push하면 `main:/docs`로 배포됩니다.

## React Bits

공식 [React Bits](https://reactbits.dev/)의 **SpotlightCard**을 사용했습니다. 출처와 수정 내용은 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), 전체 라이선스는 [licenses/REACT-BITS-LICENSE.md](licenses/REACT-BITS-LICENSE.md)에 보존했습니다.

제목과 모든 숫자는 처음부터 정적으로 표시합니다. 숫자 카운트업을 사용하지 않으며, hover 강조에만 SpotlightCard를 사용합니다. 프로젝트 목록은 핵심 결과를 먼저 보여주고, 구현·검증 상세는 별도 창에서 읽을 수 있습니다. `#project/fowoco`처럼 프로젝트별 직접 링크를 지원합니다. 이미지가 없는 프로젝트는 실제 서비스 화면이 아님을 표시한 흐름 요약을 보여줍니다.

## 성과의 범위

- FOWOCO 2→1은 동일 요청의 **Intent 분류 횟수**이며, 4/4는 **합성 문서 기반 로컬 E2E 대표 Case**의 Task 결과입니다.
- AUTA는 **개인 클라이언트 구현**, **팀 장려상**, **관련 기술 특허 출원·공동발명**을 구분합니다. 기간은 공개 README의 개발 일정이며, 특허 등록 성과가 아닙니다.
- 다음월급 31/31·20/20은 고정 평가셋의 **근거 회수·조건 변화 구조 검사**입니다.
- DeepSogak은 **ONNX·FastAPI 분석 API와 팀 아이디어상**을 먼저 소개합니다. 보정 모델 적용 판단과 잠금 Test 수치는 상세에 별도로 보존합니다.
- ChemiCheck119 32.46→89.74%는 **과거 사고 표현 419건의 재식별 평가**입니다. 새 표현 60건은 개선되지 않았고, 실제 현장 정확도로 일반화하지 않습니다.
- 서비스 화면의 예시 건수와 팀 수상을 개인의 실사용 성과로 표현하지 않습니다.

AUTA의 [대시보드 개발 화면](https://github.com/user-attachments/assets/db751f8f-e5e8-41eb-9c50-03bab40a9bcd)은 본인이 구현한 [공개 PR #50](https://github.com/KW-AUTA/client/pull/50)에서 가져왔습니다. 현재 운영 화면이나 사용 실적을 나타내지 않습니다.

## 구성 참고

[김경민 포트폴리오](https://bckmini.github.io/)의 Projects와 상세 창 정보 구성(이미지 카드·개요·성과·아키텍처·기술 선택 이유)을 참고했습니다. 문안·프로젝트 사실·개인 기여는 최현준의 기존 자료를 바탕으로 별도 작성했습니다.
