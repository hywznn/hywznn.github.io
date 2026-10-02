import React from "react";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
import { RevealLine, External, Arrow } from "./UI.jsx";
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="overline">
            <span className="status-dot" />
            최현준 · AI Service / Agent Developer
          </p>
          <h1>
            <RevealLine>같은 요청의 판단은 한 번으로.</RevealLine>
            <RevealLine className="accent-line">
              멈춘 업무는 완료까지.
            </RevealLine>
          </h1>
          <p className="hero-intro">
            AI가 업무를 끝내지 못하는 지점을 찾아 고치는 개발자입니다.
          </p>
          <p className="hero-description">
            FOWOCO에서 중복 Intent 분류를 줄이고, OCR 이후 끊긴 흐름에
            검토·재개·증빙을 연결해 대표 Case의 Task 4개를 모두 완료했습니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              프로젝트로 확인하기 <Arrow />
            </a>
            <External
              href="https://github.com/hywznn"
              className="button button-ghost"
            >
              GitHub
            </External>
          </div>
          <p className="hero-footnote">
            합성 문서 기반 로컬 E2E · 대표 Case 1개
          </p>
        </div>
        <SpotlightCard
          className="hero-system"
          spotlightColor="rgba(76,120,255,.16)"
        >
          <div className="system-top">
            <span>FOWOCO / WORKFLOW</span>
            <span className="system-state">검증 완료</span>
          </div>
          <div className="system-head">
            <span className="system-label">자연어 요청</span>
            <p>“체류기간 연장 준비해줘”</p>
          </div>
          <div className="system-step">
            <span className="step-icon">01</span>
            <div>
              <strong>Intent 분류·저장</strong>
              <p>ANALYZE에서 재사용</p>
            </div>
            <span className="step-meta">2회 → 1회</span>
          </div>
          <div className="system-step human">
            <span className="step-icon">02</span>
            <div>
              <strong>문서 확인 · HR 승인</strong>
              <p>누락 보완 · 최신 상태 검증</p>
            </div>
            <span className="step-meta">사람의 확인</span>
          </div>
          <div className="system-step">
            <span className="step-icon">03</span>
            <div>
              <strong>업무 재개 · 완료 증빙</strong>
              <p>OCR → 재개 → HWP → 승인</p>
            </div>
            <span className="check-icon">✓</span>
          </div>
          <div className="system-result">
            <p>대표 Case의 Task 완료</p>
            <strong>
              4 <span>/ 4</span>
            </strong>
          </div>
          <div className="system-bottom">
            <span>COMPLETED</span>
            <span>LOCAL · SYNTHETIC E2E</span>
          </div>
        </SpotlightCard>
      </div>
      <div className="container hero-bottom">
        <span>문제를 발견하고, 구현하고, 결과를 확인합니다.</span>
        <a href="#projects">
          선택한 프로젝트 <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
