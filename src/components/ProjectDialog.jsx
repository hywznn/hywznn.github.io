import React, { useEffect, useRef } from "react";
import { projectSummaries } from "../summary-data.mjs";
import { External, Metrics, Tags } from "./UI.jsx";

export default function ProjectDialog({
  project,
  detail,
  index,
  total,
  onClose,
  onNavigate,
}) {
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const headingRef = useRef(null);
  const tearingDown = useRef(false);
  const backdropPointer = useRef(false);
  const hasProject = Boolean(project && detail);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !hasProject) return undefined;

    tearingDown.current = false;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      const padding = Number.parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;
      document.body.style.paddingRight = `${padding + scrollbarWidth}px`;
    }

    if (!dialog.open) dialog.showModal();
    headingRef.current?.focus({ preventScroll: true });

    return () => {
      tearingDown.current = true;
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true });
      }
    };
  }, [hasProject]);

  useEffect(() => {
    if (!project) return;
    if (dialogRef.current) dialogRef.current.scrollTop = 0;
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    headingRef.current?.focus({ preventScroll: true });
  }, [project?.id]);

  if (!project || !detail) return null;

  const role = projectSummaries[project.id]?.role || project.role;
  const number = String(index + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");
  const close = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  };

  return (
    <dialog
      className="pd-dialog"
      ref={dialogRef}
      aria-labelledby="project-detail-title"
      aria-describedby="project-detail-intro"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClose={() => {
        if (!tearingDown.current && !dialogRef.current?.open) onClose();
      }}
      onPointerDown={(event) => {
        backdropPointer.current = event.target === event.currentTarget;
      }}
      onClick={(event) => {
        if (backdropPointer.current && event.target === event.currentTarget) close();
        backdropPointer.current = false;
      }}
    >
      <div className="pd-shell">
        <div className="pd-toolbar">
          <span className="pd-toolbar-title">프로젝트 {number} / {count}</span>
          <div className="pd-controls">
            <button
              type="button"
              aria-label="이전 프로젝트"
              title="이전 프로젝트"
              disabled={total < 2}
              onClick={() => onNavigate(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              aria-label="다음 프로젝트"
              title="다음 프로젝트"
              disabled={total < 2}
              onClick={() => onNavigate(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
            <button type="button" aria-label="상세 내용 닫기" title="닫기" onClick={close}>
              <span aria-hidden="true">×</span>
            </button>
          </div>
        </div>

        <div className="pd-body" ref={bodyRef}>
          <header className="pd-heading">
            <p className="pd-eyebrow">프로젝트 상세</p>
            <h2 id="project-detail-title" tabIndex={-1} ref={headingRef}>{project.name}</h2>
            <p className="pd-category">{project.category}</p>
            <dl className="pd-meta">
              <div><dt>기간</dt><dd>{project.period}</dd></div>
              <div><dt>담당</dt><dd>{role}</dd></div>
            </dl>
            <p className="pd-intro" id="project-detail-intro">{detail.intro}</p>

            <Tags items={project.tech} />
          </header>



          <section className="pd-section" aria-labelledby="project-detail-results">
            <div className="pd-section-heading">
              <span aria-hidden="true">01</span>
              <h3 id="project-detail-results">검증한 결과</h3>
            </div>
            <Metrics items={project.metrics} note={project.condition} />
            <div className="pd-contribution">
              <strong>내 기여</strong>
              <p>{detail.contribution}</p>
            </div>
          </section>

          {project.image && (
            <figure className="pd-screen">
              <img src={project.image} alt={`${project.name} 서비스 화면`} />
              {detail.imageCaption && <figcaption>{detail.imageCaption}</figcaption>}
            </figure>
          )}

          <section className="pd-section" aria-labelledby="project-detail-architecture">
            <div className="pd-section-heading">
              <span aria-hidden="true">02</span>
              <h3 id="project-detail-architecture">{detail.architecture.title}</h3>
            </div>
            <ol className="pd-flow">
              {detail.architecture.steps.map((step, stepIndex) => (
                <li key={step.title}>
                  <span className="pd-flow-number" aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
            {detail.architecture.note && <p className="pd-flow-note">{detail.architecture.note}</p>}
          </section>

          <section className="pd-section" aria-labelledby="project-detail-decisions">
            <div className="pd-section-heading">
              <span aria-hidden="true">03</span>
              <h3 id="project-detail-decisions">사용 기술과 선택 이유</h3>
            </div>
            <div className="pd-decisions">
              {detail.decisions.map((decision, decisionIndex) => (
                <article className="pd-decision" key={decision.title}>
                  <div className="pd-decision-head">
                    <span aria-hidden="true">{String(decisionIndex + 1).padStart(2, "0")}</span>
                    <h4>{decision.title}</h4>
                  </div>
                  <dl className="pd-decision-story">
                    <div><dt>문제</dt><dd>{decision.problem}</dd></div>
                    <div><dt>선택·구현</dt><dd>{decision.action}</dd></div>
                    <div><dt>확인한 결과</dt><dd>{decision.result}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="pd-conclusion" aria-labelledby="project-detail-conclusion">
            <p className="pd-eyebrow">경험에서 얻은 기준</p>
            <h3 id="project-detail-conclusion">{detail.conclusion.title}</h3>
            <p>{detail.conclusion.body}</p>
          </section>

          <footer className="pd-footer">
            {project.award && <p className="pd-award"><strong>팀 수상</strong>{project.award}</p>}
            <div className="pd-links">
              {project.github && <External href={project.github}>GitHub 저장소</External>}
              {project.demo && <External href={project.demo}>공개 데모</External>}
              {project.evaluation && <External href={project.evaluation}>평가 근거</External>}
            </div>
            <button type="button" className="pd-next" onClick={() => onNavigate(1)} disabled={total < 2}>
              다음 프로젝트 <span aria-hidden="true">→</span>
            </button>
          </footer>
        </div>
      </div>
    </dialog>
  );
}
