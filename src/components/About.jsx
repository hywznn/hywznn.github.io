import React from "react";
import { strengths } from "../data.mjs";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
import { SectionHeading, Arrow } from "./UI.jsx";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          number="01"
          eyebrow="How I work"
          title="막힌 업무, 빠진 근거, 적용 기준을 하나씩 확인합니다."
        />
        <div className="strength-grid">
          {strengths.map((s) => (
            <SpotlightCard
              className="strength-card"
              spotlightColor="rgba(61,108,230,.12)"
              key={s.index}
            >
              <p className="strength-label">
                {s.index} / {s.label}
              </p>
              <h3>{s.title}</h3>
              <p className="strength-body">{s.body}</p>
              <a href={s.href}>
                {s.proof}
                <Arrow />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
