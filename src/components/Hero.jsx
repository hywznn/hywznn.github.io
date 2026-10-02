import React from "react";
import SpotlightCard from "./reactbits/SpotlightCard.jsx";
import { External, Arrow } from "./UI.jsx";
import { profile } from "../data.mjs";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-identity"><span>{profile.role}</span></p>
          <h1>{profile.headline.map((line, index) => <span key={line} className={index === profile.headline.length - 1 ? "hero-name" : undefined}>{line}</span>)}</h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">프로젝트 보기 <Arrow /></a>
            <External href={profile.github} className="button button-ghost">GitHub</External>
          </div>
        </div>
        <SpotlightCard className="hero-profile" spotlightColor="rgba(76,120,255,.1)">
          <h2 className="profile-kicker">프로젝트로 확인한 결과</h2>
          <div className="hero-achievements">
            {profile.achievements.map(item => <a key={item.id} href={`#project/${item.id}`} aria-label={`${item.project} 성과와 구현 과정 보기`} aria-haspopup="dialog" onClick={event => event.currentTarget.focus({ preventScroll: true })}>
              <p className="achievement-project"><b>{item.project}</b><span>{item.contribution}</span><Arrow /></p>
              <strong className="achievement-result">{item.result}</strong>
              <p className="achievement-context">{item.context.map(line => <span key={line}>{line}</span>)}</p>
            </a>)}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
