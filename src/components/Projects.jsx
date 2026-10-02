import React, { useRef } from "react";
import { projects } from "../data.mjs";
import { projectSummaries } from "../summary-data.mjs";
import { SectionHeading, External, Arrow, Tags, Metrics } from "./UI.jsx";

function ProjectLinks({ project: p }) {
  return <div className="project-links">
    {p.github && <External href={p.github}>GitHub</External>}
    {p.demo && <External href={p.demo}>공개 데모</External>}
    {p.evaluation && <External href={p.evaluation}>평가 근거</External>}
  </div>;
}
function Story({ p }) {
  return <dl className="project-story">
    <div><dt>발견한 문제</dt><dd>{p.problem}</dd></div>
    <div><dt>직접 바꾼 부분</dt><dd>{p.action}</dd></div>
    <div><dt>확인한 결과</dt><dd>{p.result}</dd></div>
  </dl>;
}
function Screen({ src, alt }) {
  const ref = useRef(null);
  return <>
    <button className="screen-button" onClick={() => ref.current?.showModal()} aria-label={`${alt} 크게 보기`}>
      <img src={src} alt={alt} loading="lazy" />
      <span>화면 확대 ↗</span>
    </button>
    <dialog ref={ref} className="image-dialog" onClick={(e) => { if (e.target === e.currentTarget) ref.current.close(); }}>
      <button className="dialog-close" onClick={() => ref.current.close()} aria-label="확대 화면 닫기">닫기 ×</button>
      <img src={src} alt={alt} />
    </dialog>
  </>;
}
function Outcome({ summary: s }) {
  return <div className="project-outcome">
    <p className="outcome-label">{s.label}</p>
    <strong>{s.value}</strong>
    <p className="outcome-condition">{s.condition}</p>
  </div>;
}
function Featured() {
  const p = projects[0], s = projectSummaries[p.id];
  return <article className="featured-project" id={p.id}>
    <div className="project-meta"><span>01 · 대표 프로젝트</span><time>{p.period}</time></div>
    <div className="featured-grid">
      <div className="featured-copy">
        <h3>{p.name}</h3><p className="project-category">{p.category}</p>
        <p className="project-role"><span>내 역할</span>{s.role}</p>
        <h4>{s.outcome}</h4>
        <dl className="summary-story">
          <div><dt>문제</dt><dd>{s.problem}</dd></div>
          <div><dt>해결</dt><dd>{s.action}</dd></div>
        </dl>
        <a className="case-link" href="#fowoco-case">구현 과정 자세히 보기 <Arrow /></a>
      </div>
      <div className="featured-evidence">
        <Screen src={p.image} alt="FOWOCO의 업무 요청·승인 대기·Agent 작업 공간 데모" />
        <p className="screen-caption">공식 데모 화면 · 화면 속 업무 건수는 예시입니다.</p>
        <Outcome summary={s} />
      </div>
    </div>
    <div className="featured-footer"><Tags items={["Spring Boot", "FastAPI", "PostgreSQL", "Outbox"]} /><ProjectLinks project={p} /></div>
  </article>;
}
function CompactProject({ p, index }) {
  const s = projectSummaries[p.id];
  return <article className={`compact-project ${p.id}`} id={p.id}>
    <div className="project-meta"><span>{index}</span><time>{p.period}</time></div>
    <h3>{p.name}</h3><p className="project-category">{p.category}</p>
    <p className="project-role"><span>내 역할</span>{s.role}</p>
    <Outcome summary={s} />
    <dl className="summary-story">
      <div><dt>문제</dt><dd>{s.problem}</dd></div>
      <div><dt>해결</dt><dd>{s.action}</dd></div>
    </dl>
    <details className="project-details">
      <summary>구현·검증 자세히 보기 <span aria-hidden="true">+</span></summary>
      <div className="project-detail-body">
        <Story p={p} />
        {p.flow && <ol className="mini-flow" aria-label="검색과 검증, 설명 역할 분리">{p.flow.map(x => <li key={x}>{x}</li>)}</ol>}
        <Metrics items={p.metrics} note={p.condition} />
        {p.contribution && <p className="contribution-note">{p.contribution}</p>}
        {p.award && <p className="award"><b>팀 수상</b>{p.award}</p>}
        {p.image && <><Screen src={p.image} alt="ChemiCheck119의 지도와 대응충돌검토 공개 데모" /><p className="screen-caption">합성 데이터 기반 공모전 데모 · 실제 119 지령망 미연동</p></>}
        <Tags items={p.tech} />
        <ProjectLinks project={p} />
      </div>
    </details>
  </article>;
}
export default function Projects() {
  return <section id="projects" className="section projects-section">
    <div className="container">
      <SectionHeading number="01" eyebrow="Selected projects" title="어떤 문제를, 어떻게 바꿨는가" />
      <Featured />
      <div className="project-grid">{projects.slice(1).map((p,i) => <CompactProject key={p.id} p={p} index={`0${i+2}`} />)}</div>
    </div>
  </section>;
}
