import React from "react";
import { strengths } from "../data.mjs";
import { SectionHeading, Arrow } from "./UI.jsx";
export default function About() {
  return <section id="about" className="section about-section">
    <div className="container">
      <SectionHeading number="02" eyebrow="개발 역량" title="프로젝트에서 쌓아 온 세 가지 역량" />
      <div className="strength-grid">{strengths.map(s => <article className="strength-card" key={s.index}>
        <p className="strength-label">{s.label}</p><h3>{s.title}</h3><p>{s.body}</p>
        <a href={s.href} aria-haspopup="dialog">{s.proof} <Arrow /></a>
      </article>)}</div>
    </div>
  </section>;
}
