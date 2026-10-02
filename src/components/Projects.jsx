import React, { useEffect, useState } from "react";
import { projects } from "../data.mjs";
import { projectDetails } from "../project-details.mjs";
import ProjectDialog from "./ProjectDialog.jsx";
import { SectionHeading, External, Arrow } from "./UI.jsx";
import "../projects.css";

function ProjectCover({ project }) {
  return <div className={`portfolio-cover cover-${project.id}`}>
    <div className="portfolio-screen"><img src={project.image} alt={`${project.name} ${project.imageLabel}`} loading="lazy" /></div>
    <span className="cover-label">{project.imageLabel}</span>
    <span className="cover-open" aria-hidden="true">↗</span>
  </div>;
}

function ProjectCard({ project: p, index }) {
  return <article className={`portfolio-card ${index === 0 ? "portfolio-card-featured" : ""}`} id={p.id}>
    <ProjectCover project={p} />
    <div className="portfolio-card-body">
      <div className="portfolio-card-top"><span>{String(index+1).padStart(2,"0")}{index === 0 && " · 대표 프로젝트"}</span><time>{p.period}</time></div>
      <div className="portfolio-name">{p.logo && <img src={p.logo} alt="" loading="lazy" />}<h3>{p.name}</h3></div>
      <p className="portfolio-category">{p.category}</p>
      <p className="portfolio-intro">{p.description}</p>
      <div className={`portfolio-result result-${p.id}`}>
        <strong>{p.cardResult.value}</strong><span>{p.cardResult.label}</span>
        <p>{p.cardResult.note}</p>
      </div>
      <div className="portfolio-ownership"><p className="portfolio-role"><span>담당</span>{p.role}</p><p>{p.cardContribution}</p></div>

      <div className="portfolio-actions">
        <a className="portfolio-detail-link" href={`#project/${p.id}`} aria-label={`${p.name} 상세 보기`} aria-haspopup="dialog" onClick={event => event.currentTarget.focus({ preventScroll: true })}>상세 보기 <Arrow /></a>
        {p.github && <External href={p.github} className="portfolio-github">GitHub</External>}
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
        <SectionHeading number="01" eyebrow="프로젝트" title="직접 설계하고 구현한 서비스" description="업무형 Agent부터 웹 클라이언트와 분석 API까지, 프로젝트별 역할과 결과를 정리했습니다." />
        <div className="portfolio-grid">{projects.map((p, index) => <ProjectCard key={p.id} project={p} index={index} />)}</div>
      </div>
    </section>
    {selectedProject && <ProjectDialog project={selectedProject} detail={projectDetails[selectedId]} index={selectedIndex} total={projects.length} onClose={close} onNavigate={navigate} />}
  </>;
}
