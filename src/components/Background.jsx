import React from "react";
import { education, qualifications, skills, profile } from "../data.mjs";
import { SectionHeading, Tags, External, Arrow } from "./UI.jsx";
export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container two-column-section">
        <SectionHeading
          number="03"
          eyebrow="학력 · 자격"
          title="학력·교육 및 자격"
        />
        <div className="background-groups">
          <section aria-labelledby="education-heading">
            <h3 id="education-heading" className="background-group-title">학력·교육</h3>
            <div className="timeline">
              {education.map(x => (
                <article key={x.title}>
                  <span className="timeline-dot" aria-hidden="true" />
                  <time>{x.date}</time>
                  <h4>{x.title}</h4>
                  <p>{x.detail}</p>
                  {x.tags && (
                    <ol className="education-flow">
                      {x.tags.map(t => <li key={t}>{t}</li>)}
                    </ol>
                  )}
                </article>
              ))}
            </div>
          </section>
          <section className="qualification-group" aria-labelledby="qualification-heading">
            <h3 id="qualification-heading" className="background-group-title">자격·어학</h3>
            <div className="qualification-grid">
              {qualifications.map(x => (
                <article key={x.title}>
                  <time>{x.date}</time>
                  <h4>{x.title}</h4>
                  <p>{x.detail}</p>
                </article>
              ))}
            </div>
          </section>
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
          eyebrow="사용 기술"
          title="프로젝트에서 선택하고 사용한 기술"
        />
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <article key={skill.category}>
              <span className="skill-number">0{i + 1}</span>
              <h3>{skill.category}</h3>
              <p>{skill.use}</p>
              <Tags items={skill.items} />
              <a href={skill.href} aria-haspopup="dialog">{skill.project} <Arrow /></a>
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
          <h2>프로젝트에 대해 더 이야기 나누고 싶다면</h2>
          <p>채용과 협업에 관한 연락을 기다립니다.</p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <Arrow diagonal />
            </a>
            <External href={profile.github}>GitHub</External>
          </div>
        </div>
      </section>
      <footer className="container site-footer">
        <span>© 2026 최현준</span>
        <a href="#top">처음으로 ↑</a>
      </footer>
    </>
  );
}
