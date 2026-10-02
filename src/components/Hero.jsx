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
          <h1>{profile.headline[0]}<br /><span>{profile.headline[1]}</span></h1>
          <p className="hero-description">{profile.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">프로젝트 보기 <Arrow /></a>
            <External href={profile.github} className="button button-ghost">GitHub</External>
          </div>
        </div>
        <SpotlightCard className="hero-profile" spotlightColor="rgba(76,120,255,.1)">
          <h2 className="profile-kicker">저를 소개합니다</h2>
          <dl className="profile-background">
            {profile.background.map(item => <div key={item.label}>
              <dt>{item.label}</dt>
              <dd><strong>{item.title}</strong><span>{item.detail}</span></dd>
            </div>)}
          </dl>
        </SpotlightCard>
      </div>
    </section>
  );
}
