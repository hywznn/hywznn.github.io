import { mkdir, writeFile, copyFile, cp } from "node:fs/promises";
import {
  profile,
  projects,
  strengths,
  experience,
  skills,
  otherProjects,
  workflow,
} from "./data.mjs";
import {
  external,
  metricCards,
  tags,
  heading,
  screenshot,
} from "./components.mjs";
import {
  selectedProjects,
  fowocoCase,
  experienceSection,
  skillsSection,
  otherSection,
  contactSection,
} from "./sections.mjs";
const nav = [
  ["about", "소개"],
  ["projects", "프로젝트"],
  ["experience", "경험·교육"],
  ["skills", "기술"],
  ["contact", "연락"],
];
const navHtml = nav
  .map(([id, label]) => `<a href="#${id}">${label}</a>`)
  .join("");
const hero = `<section class="hero container" id="top"><div class="hero-copy"><p class="eyebrow">${profile.name} <span>/</span> ${profile.role}</p><h1>${profile.headline.map((x) => `<span>${x}</span>`).join("")}</h1><p class="hero-description">${profile.description}</p><div class="hero-actions"><a class="button primary" href="#projects">프로젝트 보기</a>${external(profile.github, "GitHub", "button secondary")}</div></div><div class="hero-proof"><div class="proof-top"><span>FOWOCO / 실행 경계 설계</span><span>01</span></div><p class="proof-title">AI의 판단이<br>실제 업무가 되기까지.</p><div class="proof-path"><div><span>AI</span>요청 해석 · 실행 후보</div><div class="approval"><span>SERVER + HR</span>필수정보 검증 · 사람의 승인</div><div><span>BACKEND</span>업무 실행 · 증빙 · 완료</div></div><div class="proof-bottom"><strong>4<span>/4</span></strong><p>대표 E2E Task 완료<small>로컬 합성 문서 · 대표 Case 1개</small></p></div></div><div class="hero-foot"><span>문제 발견에서 업무 완료까지</span><span>Workflow · RAG · Backend</span></div></section>`;
let main =
  hero +
  `<section id="about" class="section container">${heading("01", "AI와 업무 사이, 실행의 조건을 설계합니다.")}<div class="strength-grid">${strengths.map(([n, title, en, body]) => `<article class="strength"><span class="item-number">${n}</span><p class="micro">${en}</p><h3>${title}</h3><p>${body}</p></article>`).join("")}</div></section>`;
main +=
  selectedProjects() +
  fowocoCase() +
  experienceSection() +
  skillsSection() +
  otherSection() +
  contactSection();
const html = `<!doctype html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="최현준의 AI Service / Agent Developer 포트폴리오. FOWOCO, 다음월급, DeepSogak에서 문제 정의부터 Workflow, Backend, 검증까지 연결한 경험."><link rel="canonical" href="https://hywznn.github.io/"><meta property="og:type" content="website"><meta property="og:locale" content="ko_KR"><meta property="og:title" content="최현준 | AI Service · Agent Developer"><meta property="og:description" content="끊긴 업무를 연결해 완료까지 가는 AI 서비스를 만듭니다. FOWOCO · 다음월급 · DeepSogak"><meta property="og:url" content="https://hywznn.github.io/"><meta name="theme-color" content="#2057df"><title>최현준 | AI Service · Agent Developer</title><link rel="icon" href="./favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="./styles.css"></head><body><a class="skip-link" href="#main">본문 바로가기</a><header class="site-header"><a class="brand" href="#top" aria-label="최현준 포트폴리오 처음으로">H<span>.</span></a><nav aria-label="주요 메뉴">${navHtml}</nav>${external(profile.github, "GitHub", "header-github")}</header><main id="main">${main}</main><script src="./client.js" defer></script></body></html>`;
await mkdir("docs", { recursive: true });
await writeFile("docs/index.html", html);
await copyFile("src/styles.css", "docs/styles.css");
await copyFile("src/client.js", "docs/client.js");
await cp("public", "docs", { recursive: true });
await writeFile("docs/.nojekyll", "");
console.log("Built static portfolio in docs/");
