import React from "react";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
import { External, Arrow } from "./UI.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-identity"><strong>최현준</strong><span>AI Service / Agent Developer</span></p>
          <h1>서류 처리에서 멈춘 업무를<br /><span>승인과 완료까지 연결했습니다.</span></h1>
          <p className="hero-description">FOWOCO에서 중복된 AI 판단을 줄이고,<br className="desktop-break" /> OCR 이후 끊긴 검토·업무 재개 흐름을 구현했습니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">프로젝트 보기 <Arrow /></a>
            <External href="https://github.com/hywznn" className="button button-ghost">GitHub</External>
          </div>
        </div>
        <SpotlightCard className="hero-proof" spotlightColor="rgba(76,120,255,.1)">
          <p className="proof-kicker">FOWOCO에서 확인한 변화</p>
          <div className="proof-row"><strong>2 → 1</strong><div><b>중복 판단 제거</b><span>동일 요청의 Intent 분류 횟수</span></div></div>
          <div className="proof-row"><strong>4 / 4</strong><div><b>업무 흐름 완료</b><span>대표 Case의 Task 완료</span></div></div>
          <p className="proof-note">합성 문서 기반 로컬 E2E · 대표 Case 1개<br />실제 기관 제출 실적과 구분합니다.</p>
        </SpotlightCard>
      </div>
    </section>
  );
}
