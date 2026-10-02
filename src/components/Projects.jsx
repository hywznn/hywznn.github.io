import React, { useEffect, useState } from "react";
import { projects } from "../data.mjs";
import { projectSummaries } from "../summary-data.mjs";
import { projectDetails } from "../project-details.mjs";
import ProjectDialog from "./ProjectDialog.jsx";
import { SectionHeading, External, Arrow } from "./UI.jsx";
import "../projects.css";

const cardCopy = {
  fowoco: "자연어 행정 요청을 서류 확인, 담당자 승인, 완료 증빙까지 연결한 업무형 Agent입니다.",
  auta: "Figma 디자인과 구현 화면을 비교하는 서비스입니다. 검증 현황 대시보드·파일 업로드·인증 복구를 구현했습니다.",
  nextsalary: "계좌·시점·금액에 따라 달라지는 연금 질문에 필요한 근거를 찾아 설명하는 Agent입니다.",
  deepsogak: "본인 확인 후 딥페이크를 분석하는 피해 지원 서비스입니다. 탐지 모델을 ONNX로 변환하고 FastAPI로 연결했습니다.",
  chemicheck119: "신고문에서 물질 후보를 찾고, 현장에서 확인한 두 물질의 조합을 공식 규칙으로 검토합니다.",
};
const coverFlows = {
  auta: { title: "디자인 검증을 사용자 화면으로", steps: ["Figma 업로드", "UI/UX 검증", "현황 확인"], note: "직접 구현 · 대시보드·업로드·인증 복구" },
  nextsalary: { title: "근거를 먼저 확인하는 연금 상담", steps: ["연금 질문", "근거 검색", "조건 검증", "답변 설명"], note: "검색·검증은 프로그램이, 설명은 LLM이" },
  deepsogak: { title: "동일인 확인에서 합성물 분석까지", steps: ["얼굴 입력", "동일인 확인", "합성물 분석"], note: "얼굴 인식과 딥페이크 탐지를 분리" },
};
const cardConditions = {
  fowoco: "합성 문서 · 대표 Case 1개 · 실제 기관 제출 아님.",
  auta: "2025.11 팀 수상 · 2026.02 특허 출원·공동발명",
  nextsalary: "고정 질문의 근거 검색 평가 · 답변 정확도 아님.",
  deepsogak: "직접 구현 · 탐지 모델 ONNX 변환·FastAPI 분석 API",
  chemicheck119: "과거 사고 표현 419건 · 새 표현 60건 개선 없음 · 현장 정확도 아님.",
};

function ProjectCover({ project }) {
  const flow = coverFlows[project.id];
  return <a className={`portfolio-cover cover-${project.id}`} href={`#project/${project.id}`} aria-label={`${project.name} 상세 보기`} aria-haspopup="dialog">
    {project.image ? <img src={project.image} alt={`${project.name} ${project.imageLabel || "공개 데모 화면"}`} loading="lazy" /> : <div className="concept-cover">
      <span className="concept-label">서비스 흐름 요약</span>
      <strong>{flow.title}</strong>
      <div className="concept-flow" aria-hidden="true">{flow.steps.map((step, i) => <React.Fragment key={step}><span><b>{String(i+1).padStart(2,"0")}</b>{step}</span>{i<flow.steps.length-1 && <i>→</i>}</React.Fragment>)}</div>
      <p>{flow.note}</p>
    </div>}
    <span className="cover-label">{project.image ? (project.imageLabel || "공개 데모 화면") : "구조 요약 · 실제 화면 아님"}</span>
    <span className="cover-open" aria-hidden="true">↗</span>
  </a>;
}

function ProjectCard({ project: p, index }) {
  const s = projectSummaries[p.id];
  return <article className={`portfolio-card ${index === 0 ? "portfolio-card-featured" : ""}`} id={p.id}>
    <ProjectCover project={p} />
    <div className="portfolio-card-body">
      <div className="portfolio-card-top"><span>{String(index+1).padStart(2,"0")}{index === 0 && " · 대표 프로젝트"}</span><time>{p.period}</time></div>
      <h3><a href={`#project/${p.id}`} aria-haspopup="dialog">{p.name}</a></h3>
      <p className="portfolio-category">{p.category}</p>
      <p className="portfolio-role"><span>담당</span>{s.role}</p>
      <p className="portfolio-intro">{cardCopy[p.id]}</p>
      <div className={`portfolio-result result-${p.id}`}>
        <div><strong>{s.value}</strong><span>{s.label}</span></div>
        <p>{cardConditions[p.id]}</p>
      </div>

      <div className="portfolio-actions">
        <a className="portfolio-detail-link" href={`#project/${p.id}`} aria-haspopup="dialog">상세 보기 <Arrow /></a>
        {p.github && <External href={p.github}>GitHub</External>}
      </div>
    </div>
  </article>;
}

function projectFromHash() {
  const hash = window.location.hash;
  if (hash === "#fowoco-case" || hash.startsWith("#case-")) return "fowoco";
  const id = hash.startsWith("#project/") ? hash.slice(9) : null;
  return projects.some(p => p.id === id) ? id : null;
}

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    const sync = () => setSelectedId(projectFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const selectedIndex = projects.findIndex(p => p.id === selectedId);
  const selectedProject = projects[selectedIndex];
  const close = () => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#projects`);
    setSelectedId(null);
  };
  const navigate = (direction) => {
    const next = projects[(selectedIndex + direction + projects.length) % projects.length];
    window.location.hash = `project/${next.id}`;
  };
  return <>
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading number="01" eyebrow="프로젝트" title="문제를 발견하고, 서비스로 해결한 경험" description="서비스 개요와 결과를 먼저 확인하고, 상세에서 구현 과정과 기술을 선택한 이유를 살펴볼 수 있습니다." />
        <div className="portfolio-grid">{projects.map((p, index) => <ProjectCard key={p.id} project={p} index={index} />)}</div>
      </div>
    </section>
    {selectedProject && <ProjectDialog project={selectedProject} detail={projectDetails[selectedId]} index={selectedIndex} total={projects.length} onClose={close} onNavigate={navigate} />}
  </>;
}
