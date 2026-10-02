# 최현준 · 개발 포트폴리오

AI Service / Agent Developer 개인 포트폴리오입니다.

**사이트: https://hywznn.github.io/**

## 구성

외부 의존성이 없는 정적 사이트입니다. Node.js 20 이상으로 HTML을 생성하며 JavaScript가 비활성화되어도 본문과 링크를 사용할 수 있습니다.

- `src/data.mjs`: 프로필, 프로젝트 성과, 경력, 기술 데이터
- `src/case-data.mjs`: FOWOCO 개인 기여와 문제 해결 사례
- `src/components.mjs`: 공통 UI 컴포넌트
- `src/sections.mjs`: 페이지 섹션
- `src/build.mjs`: HTML 빌드 및 파일 복사
- `src/styles.css`: 데스크톱·모바일 스타일
- `src/client.js`: 스크롤 위치에 따른 메뉴 표시
- `public/`: favicon 및 공개 이미지
- `docs/`: GitHub Pages에 게시하는 빌드 결과

## 수정·실행

```sh
npm run build
npm run preview
```

미리보기 주소는 `http://localhost:4173`입니다. 수정 후 빌드하고 브라우저를 새로고침합니다. `src`와 생성된 `docs`를 함께 커밋하면 GitHub Pages가 `main` 브랜치의 `/docs`에서 게시합니다.

## 프로젝트 이미지 교체

현재 FOWOCO 화면은 명시적인 자리표시자입니다. 공개 가능한 실제 스크린샷을 `public/images/fowoco.webp`에 넣고, `src/components.mjs`의 `screenshot()` 출력을 다음과 같이 교체한 후 빌드합니다.

```html
<img class="service-screenshot" src="./images/fowoco.webp"
     alt="FOWOCO의 업무 진행 상태와 HR 승인 화면" loading="lazy"
     width="1200" height="800">
```

이미지 비율은 원본을 유지하고, 개인정보가 없는 공개 화면만 사용합니다. 서비스 화면이 없는 프로젝트는 도식과 검증 결과로 설명합니다.

## 성과 표기

- FOWOCO 2→1은 동일 요청의 **Intent 분류 횟수**입니다.
- FOWOCO Task 4/4는 **합성 문서 기반 로컬 E2E 대표 Case 1개**의 결과입니다.
- 다음월급 31/31·20/20은 고정 평가셋에서의 **필요 근거 회수·조건 변화 구조 검사**입니다.
- DeepSogak은 **기준 미달 보정 모델의 적용 중단**과 **별도 딥페이크 분석 API 구현**을 구분합니다.
- 팀 성과와 개인 담당 범위를 함께 표기합니다.
