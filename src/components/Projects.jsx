import React, { useRef } from "react";
import { projects } from "../data.mjs";
import { SectionHeading, External, Arrow, Tags, Metrics } from "./UI.jsx";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
function ProjectMeta({ project: p, index }) {
  return (
    <div className="project-meta">
      <span>PROJECT {index}</span>
      <time>{p.period}</time>
    </div>
  );
}
function ProjectLinks({ project: p }) {
  return (
    <div className="project-links">
      {p.github && <External href={p.github}>GitHub</External>}
      {p.demo && <External href={p.demo}>공개 데모</External>}
      {p.evaluation && <External href={p.evaluation}>평가 근거</External>}
    </div>
  );
}
function Role({ children }) {
  return (
    <p className="project-role">
      <span>담당</span>
      {children}
    </p>
  );
}
function Story({ p }) {
  return (
    <dl className="project-story">
      <div>
        <dt>발견한 문제</dt>
        <dd>{p.problem}</dd>
      </div>
      <div>
        <dt>직접 바꾼 부분</dt>
        <dd>{p.action}</dd>
      </div>
      <div>
        <dt>확인한 결과</dt>
        <dd>{p.result}</dd>
      </div>
    </dl>
  );
}
function Screen({ src, alt }) {
  const ref = useRef(null);
  return (
    <>
      <button
        className="screen-button"
        onClick={() => ref.current?.showModal()}
        aria-label={`${alt} 크게 보기`}
      >
        <img src={src} alt={alt} loading="lazy" width="1920" height="815" />
        <span>화면 크게 보기 ↗</span>
      </button>
      <dialog
        ref={ref}
        className="image-dialog"
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current.close();
        }}
      >
        <button
          className="dialog-close"
          onClick={() => ref.current.close()}
          aria-label="확대 화면 닫기"
        >
          닫기 ×
        </button>
        <img src={src} alt={alt} />
      </dialog>
    </>
  );
}
function Featured() {
  const p = projects[0];
  return (
    <article className="featured-project" id="fowoco">
      <ProjectMeta project={p} index="01 · 대표 프로젝트" />
      <div className="featured-grid">
        <div className="featured-copy">
          <h3>
            {p.name}
            <span>{p.category}</span>
          </h3>
          <h4>{p.headline}</h4>
          <p className="project-summary">{p.description}</p>
          <Role>{p.role}</Role>
          <a className="case-link" href="#fowoco-case">
            어디서 멈췄고, 어떻게 연결했는지 <Arrow />
          </a>
        </div>
        <div className="featured-screen">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <p>FOWOCO · HR WORKSPACE</p>
          </div>
          <Screen
            src={p.image}
            alt="FOWOCO의 업무 요청·승인 대기·Agent 작업 공간 데모 화면"
          />
          <p className="screen-caption">
            서비스 데모 화면 · 표시된 업무 건수는 화면 예시입니다.
          </p>
        </div>
      </div>
      <div className="featured-bottom">
        <Metrics items={p.metrics} note={p.condition} />
        <ProjectLinks project={p} />
      </div>
      <Tags items={p.tech} />
    </article>
  );
}
function ProjectCard({ p, index }) {
  return (
    <article className={`project-card ${p.id}`} id={p.id}>
      <ProjectMeta project={p} index={index} />
      <h3>
        {p.name}
        <span>{p.category}</span>
      </h3>
      <h4>{p.headline}</h4>
      <Role>{p.role}</Role>
      {p.id === "nextsalary" ? (
        <div className="rag-diagram" aria-label="검색과 검증, 설명 역할의 분리">
          <div>
            <span>RETRIEVE</span>
            <strong>BM25 + BGE-M3</strong>
            <small>필요한 근거 검색</small>
          </div>
          <span className="diagram-arrow" aria-hidden="true">
            →
          </span>
          <div className="gate">
            <span>VERIFY</span>
            <strong>프로그램 검증</strong>
            <small>조건 · 계산 · 출처</small>
          </div>
          <span className="diagram-arrow" aria-hidden="true">
            →
          </span>
          <div>
            <span>EXPLAIN</span>
            <strong>HyperCLOVA X</strong>
            <small>검증된 내용 설명</small>
          </div>
        </div>
      ) : (
        <div className="test-diagram">
          <div>
            <span>잠금 Test / 보정 모델</span>
            <strong>적용 보류</strong>
          </div>
          <dl>
            <div>
              <dt>저화질 TAR</dt>
              <dd>
                79.01% <span>→</span> 78.05%
              </dd>
            </div>
            <div>
              <dt>최악 FAR</dt>
              <dd>
                0.125% <small>목표 ≤ 0.1%</small>
              </dd>
            </div>
          </dl>
        </div>
      )}
      <Metrics items={p.metrics} note={p.condition} />
      <details className="project-details">
        <summary>
          문제와 해결 과정 <span aria-hidden="true">+</span>
        </summary>
        <Story p={p} />
      </details>
      {p.award && (
        <p className="award">
          <span>팀 수상</span>
          {p.award}
        </p>
      )}
      <Tags items={p.tech} />
      <ProjectLinks project={p} />
    </article>
  );
}
function ChemiCheck() {
  const p = projects[3];
  return (
    <article className="chemi-project" id={p.id}>
      <ProjectMeta project={p} index="04" />
      <div className="chemi-grid">
        <div>
          <h3>
            {p.name}
            <span>{p.category}</span>
          </h3>
          <h4>{p.headline}</h4>
          <Role>{p.role}</Role>
          <p className="project-summary">{p.description}</p>
          <ProjectLinks project={p} />
        </div>
        <div className="resolver-visual">
          <p className="visual-kicker">같은 평가셋에서 확인한 개선</p>
          <div className="resolver-values">
            <div>
              <span>기준 모델</span>
              <strong>
                32.46<small>%</small>
              </strong>
            </div>
            <span className="big-arrow" aria-hidden="true">
              →
            </span>
            <div>
              <span>별칭·후보 보완 후</span>
              <strong>
                89.74<small>%</small>
              </strong>
            </div>
          </div>
          <div className="resolver-bar" aria-hidden="true">
            <span />
            <span />
          </div>
          <p>2020년 울산 사고 표현 419건 · Top-1</p>
          <div className="confirm-flow">
            <span>물질 후보 검색</span>
            <Arrow />
            <strong>두 CAS 확인</strong>
            <Arrow />
            <span>규칙 검토</span>
          </div>
        </div>
      </div>
      <Metrics items={p.metrics} note={p.condition} />
      <details className="project-details">
        <summary>
          검색 오류를 나눠 고친 과정 <span aria-hidden="true">+</span>
        </summary>
        <Story p={p} />
        <p className="contribution-note">{p.contribution}</p>
        {p.image && (
          <Screen
            src={p.image}
            alt="ChemiCheck119의 지도와 대응충돌검토 공개 데모 화면"
          />
        )}
      </details>
      <p className="demo-note">
        공개 데모는 개인정보 없는 합성 데이터 기반 공모전 staging입니다. 실제
        119 지령망과 연결되어 있지 않습니다.
      </p>
      <Tags items={p.tech} />
    </article>
  );
}
export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="Selected projects"
          title="발견한 문제와, 직접 바꾼 결과."
          description="업무의 단절, 검색의 누락, 모델의 성능 하락. 발견한 문제와 직접 내린 판단, 확인한 결과를 함께 담았습니다."
        />
        <Featured />
        <div className="project-grid">
          <ProjectCard p={projects[1]} index="02" />
          <ProjectCard p={projects[2]} index="03" />
        </div>
        <ChemiCheck />
      </div>
    </section>
  );
}
