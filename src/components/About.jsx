import React from "react";
import { strengths } from "../data.mjs";
import { SectionHeading, Arrow } from "./UI.jsx";
export default function About() {
  return <section id="about" className="section about-section">
    <div className="container">
      <SectionHeading number="03" eyebrow="How I work" title="설계하고 구현한 영역" />
      <div className="strength-grid">{strengths.map(s => <article className="strength-card" key={s.index}>
        <p className="strength-label">{s.label}</p><h3>{s.title}</h3><p>{s.body}</p>
        <a href={s.href}>관련 프로젝트 <Arrow /></a>
      </article>)}</div>
    </div>
  </section>;
}
