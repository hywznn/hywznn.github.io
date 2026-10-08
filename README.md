# 최현준 · AI Service / Agent Developer

[포트폴리오 열기](https://hywznn.github.io/)

사용자 제공 「TALKING-VIDEO PORTFOLIO」 가이드의 화면 구성과 상호작용을 최현준의 기존 프로젝트 자료로 개인화했습니다. 밝은 흑백 화면, 사진 기반 3D 캐릭터, 뒤집히는 사원증, 기술 주기율표, 프로젝트 아코디언과 가로 성과 갤러리를 사용합니다.

## 실행과 배포

기존 React 19 / Vite 정적 구조를 유지합니다. 새 디자인은 CSS, IntersectionObserver와 작은 requestAnimationFrame 루프로 동작합니다. 로컬 폰트·로고를 사용하며 기존 상세 창은 필요할 때 불러옵니다.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Node.js 22.12 이상. 개발/미리보기는 `http://127.0.0.1:4173/`. `npm run build`는 정적 HTML을 렌더하고 `docs/`에 출력합니다. 소스와 `docs/`를 함께 push하면 GitHub Pages의 `main:/docs`에 게시됩니다.

## 섹션

| 순서 | 섹션 | 기능 |
| --- | --- | --- |
| Hero | 이름·직무·캐릭터 | 프로젝트·연락·포트폴리오 다운로드 |
| About | 소개·사원증·기본 정보 | 클릭/Enter/Space로 뒤집기, 포인터에 따른 흔들림 |
| Skills | 기술 주기율표 | 분류 필터, hover/focus/tap 상세 패널 |
| Work | 5개 프로젝트 | 펼치기, 공개 화면, 상세 창·직접 링크 |
| Certifications | ADsP·OPIc | 포커스/hover 색 반전 |
| Experience | 학력·경험 | 스크롤에 반응하는 타임라인 |
| Achievements | 검증 결과·팀 수상 | 데스크톱 가로 진행, 모바일 직접 스크롤 |
| Contact | 이메일·공개 프로필 | 복사·연락·처음으로 |

## 수정 위치

- `src/TalkingPortfolio.jsx`: 전체 화면과 상호작용, 영상 설정
- `src/talking.css`: 디자인·반응형·모션 감소 설정
- `src/data.mjs`: 기존 프로필·프로젝트·기술·자격 자료
- `src/project-details.mjs`: 프로젝트별 기여·구조·검증 조건
- `src/components/ProjectDialog.jsx` / `src/projects.css`: 기존 상세 창
- `public/hero/character.webp`: 생성된 본인 캐릭터
- `public/portrait.webp`: 사용자 지정 화이트.jpg에서 만든 웹용 사진
- `public/portfolio.pdf`: 기존 스토리형 포트폴리오 PDF (이력서와 별개)
- `public/fonts/`, `public/logos/`: 로컬 폰트·브랜드 로고와 라이선스

프로젝트의 수치·설명·상세 근거는 기존 자료를 유지합니다. 새 경험이나 성과를 추가할 때에는 실제 기여·기간·평가 조건을 먼저 확인하세요. 다음월급 화면은 데모 시안, 다른 공개 개발 화면도 운영 성과와 구분합니다. 수상은 팀, 특허는 공동발명·출원이며 등록으로 표현하지 않습니다.

## 자기소개 영상

현재 첫 화면은 캐릭터 이미지입니다. 말하는 영상은 아직 생성하지 않았습니다. 가이드의 Google Flow 단계에는 외부 업로드와 기존 계정의 크레딧 사용이 필요합니다.

영상이 준비되면 `public/hero/hero.mp4`와 `hero.webm`을 넣고 `TalkingPortfolio.jsx`의 `heroVideo`를 `{ mp4: '/hero/hero.mp4', webm: '/hero/hero.webm' }`으로 설정합니다. 실제 영상이 있을 때에만 음성 버튼을 표시하며, 화면 노출이 35% 미만이면 영상·음성을 멈춥니다. 음성은 명시적 버튼 클릭으로 활성화합니다.

원본 생성 입력은 흰 배경, 정면, 전신, 고정 카메라, 짧은 자연스러운 제스처이며 다음 대사를 사용합니다.

> 안녕하세요, AI 서비스와 에이전트를 개발하는 최현준입니다. 업무를 이해하고, 근거를 찾고, 서비스로 구현합니다.

말과 입 모양이 맞는지 확인하고 잘린 대사가 없는 파일만 사용합니다. 무음 이미지 애니메이션을 말하는 영상처럼 표시하지 않습니다. 영상은 MP4(H.264/AAC)·WebM(VP9/Opus)로 제공하고, 모바일 크기와 네트워크 전송량을 점검합니다.

## 출처와 라이선스

디자인 구성: [TALKING-VIDEO PORTFOLIO](https://docs.google.com/document/d/13hWZsZ1OYhnY1iVPrT9bbuCLqGOeJ3zgqxfJ_6WOYr8/edit?tab=t.0). 문서의 예시 인물·경력은 사용하지 않습니다.

Inter Tight, Instrument Serif, JetBrains Mono는 Google Fonts에서 받은 SIL Open Font License 폰트입니다. 라이선스는 `public/fonts/`에 보존합니다. 한글은 시스템 글꼴을 사용합니다. 브랜드 로고는 [Devicon](https://github.com/devicons/devicon) 공식 SVG이며 MIT 라이선스와 상표권 안내는 `public/logos/DEVICON-LICENSE.txt`에 있습니다. 로고 색상은 실제 브랜드 색을 유지합니다.

캐릭터는 사용자 사진을 참고해 내장 이미지 생성 도구로 만들었습니다. 웹 코드와 새 디자인의 제작에는 AI 지원을 사용했습니다. 프로젝트 화면·개인 기여에 대한 원래 사실 경계와 별개입니다.

기존 React Bits 소스·라이선스는 그대로 보존되어 있으나 새 메인 화면에서는 사용하지 않습니다. 기존 참고·공개 화면 출처는 `THIRD_PARTY_NOTICES.md`와 이전 Git 이력에 보존합니다.
