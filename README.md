# 최현준 · AI Service / Agent Developer

**[포트폴리오 열기](https://hywznn.github.io/)**

FOWOCO, 다음월급, DeepSogak, ChemiCheck119의 문제 발견·개인 기여·검증 결과를 소개하는 한국어 포트폴리오입니다.

## 기술과 실행

React 19 · Vite 8 · Motion · React Bits. 서버나 DB 없이 GitHub Pages에 정적으로 배포합니다. 빌드 시 React 내용을 HTML로 미리 렌더링하여 JavaScript 로딩 전에도 문장과 성과를 읽을 수 있습니다.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

개발/미리보기 주소: `http://127.0.0.1:4173`. Node.js 22.12 이상 권장.

## 수정 위치

- `src/data.mjs`: 프로젝트, 기간, 역할, 성과, 경력, 기술 데이터
- `src/summary-data.mjs`: 프로젝트 목록의 짧은 문제·해결·대표 결과
- `src/case-data.mjs`: FOWOCO 개인 기여와 문제 해결 사례
- `src/components/Hero.jsx`: 첫 화면의 메시지와 업무 흐름
- `src/components/Projects.jsx`: 네 프로젝트와 이미지 확대
- `src/components/CaseStudy.jsx`: FOWOCO 상세 사례
- `src/components/Background.jsx`: 경력·기술·추가 프로젝트·연락
- `src/components/reactbits/`: React Bits 공식 소스와 제한적인 수정
- `src/styles.css`: 전체 디자인·반응형·모션 감소 설정
- `public/images/`: 공개 가능한 서비스 데모 이미지
- `scripts/prerender.mjs`: React HTML 사전 렌더링
- `docs/`: GitHub Pages 배포 결과

스크린샷을 교체하려면 `public/images`에 공개 가능한 이미지를 넣고 `src/data.mjs`의 해당 프로젝트 `image` 경로를 수정합니다. 실제 이름·문서·민감정보가 없는 화면만 사용합니다.

수정 후 `npm run build`를 실행하고 소스와 `docs`를 함께 커밋·push하면 `main:/docs`로 배포됩니다.

## React Bits

공식 [React Bits](https://reactbits.dev/)의 **SpotlightCard**을 사용했습니다. 출처와 수정 내용은 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), 전체 라이선스는 [licenses/REACT-BITS-LICENSE.md](licenses/REACT-BITS-LICENSE.md)에 보존했습니다.

제목과 모든 숫자는 처음부터 정적으로 표시합니다. 숫자 카운트업을 사용하지 않으며, hover 강조에만 SpotlightCard를 사용합니다. 프로젝트 목록은 핵심 결과를 먼저 보여주고, 구현·검증 상세는 사용자가 펼쳐 읽을 수 있습니다.

## 성과의 범위

- FOWOCO 2→1은 동일 요청의 **Intent 분류 횟수**이며, 4/4는 **합성 문서 기반 로컬 E2E 대표 Case**의 Task 결과입니다.
- 다음월급 31/31·20/20은 고정 평가셋의 **근거 회수·조건 변화 구조 검사**입니다.
- DeepSogak은 **보정 모델 적용 중단**과 **별도 딥페이크 분석 API**를 구분합니다.
- ChemiCheck119 32.46→89.74%는 **과거 사고 표현 419건의 재식별 평가**입니다. 새 표현 60건은 개선되지 않았고, 실제 현장 정확도로 일반화하지 않습니다.
- 서비스 화면의 예시 건수와 팀 수상을 개인의 실사용 성과로 표현하지 않습니다.
