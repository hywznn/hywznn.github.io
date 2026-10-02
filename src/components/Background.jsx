import React from "react";
import { experience, skills, profile } from "../data.mjs";
import { SectionHeading, Tags, External, Arrow } from "./UI.jsx";
export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container two-column-section">
        <SectionHeading
          number="03"
          eyebrow="Experience & Education"
          title={
            <>
              배운 기술을
              <br />
              실제 문제에 적용했습니다.
            </>
          }
        />
        <div className="timeline">
          {experience.map((x, i) => (
            <article key={x.title}>
              <span className="timeline-dot" />
              <time>{x.date}</time>
              <h3>{x.title}</h3>
              <p>{x.detail}</p>
              {x.tags && (
                <ol className="education-flow">
                  {x.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ol>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="Technical toolkit"
          title="프로젝트에서 선택하고 사용한 기술"
        />
        <div className="skills-grid">
          {skills.map(([k, items], i) => (
            <article key={k}>
              <span className="skill-number">0{i + 1}</span>
              <h3>{k}</h3>
              <Tags items={items} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="container">
          <p className="section-kicker">CONTACT / 최현준</p>
          <h2>
            AI의 답변 다음에,
            <br />
            <span>실제로 끝나는 업무를 만들겠습니다.</span>
          </h2>
          <p>
            문제를 정의하고, 서비스로 연결하고, 결과를 확인하는 개발자.
            <br />
            AI Service / Agent Developer 최현준입니다.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
            <External href={profile.github}>GitHub</External>
          </div>
        </div>
      </section>
      <footer className="container">
        <span>© 2026 최현준</span>
        <span>
          React ·{" "}
          <a
            href="https://reactbits.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Bits
          </a>
        </span>
        <a href="#top">처음으로 ↑</a>
      </footer>
    </>
  );
}
