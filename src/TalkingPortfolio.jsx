import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import {
  profile,
  projects,
  skills,
  education,
  qualifications,
} from "./data.mjs";
import { projectDetails } from "./project-details.mjs";
import "./talking.css";
const ProjectDialog = lazy(() => import("./components/ProjectDialog.jsx"));
const nav = [
  ["about", "About"],
  ["projects", "Work"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];
const linkedIn = "https://www.linkedin.com/in/hywznn";
const symbolMap = {
  Python: "Py",
  React: "Re",
  TypeScript: "Ts",
  Java: "Ja",
  "Spring Boot": "Sp",
  FastAPI: "Fa",
  PostgreSQL: "Pg",
  PyTorch: "Pt",
  ONNX: "Ox",
  Git: "Gi",
  GitHub: "Gh",
  LLM: "Lm",
  RAG: "Rg",
  "AI Agent": "Ag",
  LangGraph: "Lg",
  BERT: "Bt",
  BM25: "Bm",
  "BGE-M3": "Bg",
  "REST API": "Ap",
  Outbox: "Ob",
  "React Native": "Rn",
  "TanStack Query": "Tq",
  Axios: "Ax",
  NCP: "Nc",
  "GCP Cloud Run": "Gc",
  CI: "Ci",
};
const heroVideo = null; // Set to { mp4: '/hero/hero.mp4', webm: '/hero/hero.webm' } after approved video creation.
const logoMap = {
  Python: "python",
  React: "react",
  TypeScript: "typescript",
  Java: "java",
  "Spring Boot": "spring",
  FastAPI: "fastapi",
  PostgreSQL: "postgresql",
  PyTorch: "pytorch",
  Git: "git",
  GitHub: "github",
  Axios: "axios",
  "React Native": "react",
  "GCP Cloud Run": "googlecloud",
};
function usageFor(skill) {
  const matches = projects.filter((p) => p.tech.includes(skill.name));
  if (matches.length)
    return {
      ...skill,
      project: matches.map((p) => p.name).join(" · "),
      href: `#project/${matches[0].id}`,
    };
  if (skill.name === "LangGraph")
    return {
      ...skill,
      project: "KT AIVLE · 미니프로젝트",
      href: "#experience",
    };
  if (skill.name === "React Native")
    return {
      ...skill,
      project: "한이비 · 앱 개발",
      href: "https://github.com/hanibi-app/client",
    };
  if (["LLM", "RAG"].includes(skill.name))
    return {
      ...skill,
      project: "다음월급 · 근거 기반 Agent",
      href: "#project/nextsalary",
    };
  return skill;
}
const elements = skills
  .flatMap((group) =>
    group.items.map((name) =>
      usageFor({
        name,
        family: group.category,
        use: group.use,
        project: group.project,
        href: group.href,
      }),
    ),
  )
  .filter((s) => Boolean(logoMap[s.name]))
  .map((s, i) => ({
    ...s,
    number: i + 1,
    symbol: symbolMap[s.name] || s.name.slice(0, 2),
  }));
function Heading({ number, label, children, accent }) {
  return (
    <div className="section-title rv">
      <p className="eyebrow">
        {number} — {label}
      </p>
      <h2>
        {children} <em>{accent}</em>
      </h2>
    </div>
  );
}
function OutLink({ href, children, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}
function Logo({ name, size = "small" }) {
  return logoMap[name] ? (
    <img
      className={`tech-logo ${size}`}
      src={`/logos/${logoMap[name]}.svg`}
      alt=""
      loading="lazy"
    />
  ) : (
    <span className={`concept-logo ${size}`} aria-hidden="true">
      {symbolMap[name] || name.slice(0, 2)}
    </span>
  );
}
function Navigation() {
  const [scrolled, setScrolled] = useState(false),
    [active, setActive] = useState(""),
    [open, setOpen] = useState(false);
  const overlay = useRef(null),
    trigger = useRef(null),
    bar = useRef(null);
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-40% 0px -45% 0px" },
    );
    nav.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", update);
      io.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlay.current?.querySelector("a")?.focus();
    const keys = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const items = [...overlay.current.querySelectorAll("a,button")];
        const first = items[0],
          last = items.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", keys);
    return () => {
      document.body.style.overflow = before;
      document.removeEventListener("keydown", keys);
      trigger.current?.focus();
    };
  }, [open]);
  return (
    <>
      <div className="scroll-progress" ref={bar} />
      <header className={`nav-header ${scrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="최현준 처음으로">
          <span className="initials">HJ</span>
          <span className="brand-name">최현준</span>
        </a>
        <nav className="nav-pill" aria-label="주요 메뉴">
          {nav.map(([id, label]) => (
            <a
              key={id}
              className={active === id ? "active" : ""}
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          ref={trigger}
          className="menu-toggle pill"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          Menu <span aria-hidden="true">☰</span>
        </button>
      </header>
      {open && (
        <div
          ref={overlay}
          id="mobile-menu"
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
        >
          <button className="menu-close pill" onClick={() => setOpen(false)}>
            닫기 ×
          </button>
          <nav>
            {nav.map(([id, label], i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                style={{ "--i": i }}
              >
                <span>0{i + 1}</span>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
function Hero() {
  const video = useRef(null),
    section = useRef(null);
  const [sound, setSound] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  useEffect(() => {
    if (!videoReady) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.intersectionRatio >= 0.35) video.current?.play().catch(() => {});
        else video.current?.pause();
      },
      { threshold: [0, 0.35, 1] },
    );
    if (section.current) io.observe(section.current);
    return () => io.disconnect();
  }, [videoReady]);
  return (
    <section id="top" className="hero" ref={section}>
      <div className="hero-meta">
        <span>AI SERVICE DEVELOPER</span>
        <span>CHOI HYUNJUN · PORTFOLIO</span>
      </div>
      <div className="hero-stage">
        <span className="ghost-name" aria-hidden="true">
          HYUNJUN
        </span>
        <div className="character-stage">
          <img
            className="hero-character"
            src="/hero/character-suit.webp"
            alt="증명사진의 검정 정장과 남색 줄무늬 넥타이를 착용한 최현준의 3D 캐릭터"
            fetchPriority="high"
          />
          {heroVideo && (
            <video
              className={videoReady ? "hero-video ready" : "hero-video"}
              ref={video}
              muted={!sound}
              loop
              playsInline
              preload="none"
              onLoadedData={() => setVideoReady(true)}
              aria-label="최현준 자기소개 영상"
            >
              <source src={heroVideo.webm} type="video/webm" />
              <source src={heroVideo.mp4} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="hero-side hero-side-left">
          <span className="tiny-label">HELLO, I'M</span>
          <p>
            최현준<span>AI 서비스 개발자</span>
          </p>
        </div>
        <div className="hero-side hero-side-right">
          <p>
            AI의 결과를 검증하고,
            <br />
            서비스로 연결합니다.
          </p>
          <a href="#about">
            조금 더 알아보기 <span aria-hidden="true">↓</span>
          </a>
        </div>
        {videoReady && (
          <button
            className="sound-button"
            aria-label={sound ? "소리 끄기" : "소리 켜기"}
            onClick={() => {
              setSound(!sound);
              video.current?.play().catch(() => {});
            }}
          >
            {sound ? "❚❚" : "▶"}
          </button>
        )}
      </div>
      <div className="hero-bottom">
        <h1>
          AI Service
          <br /><em>Developer.</em>
        </h1>
        <div className="hero-actions">
          <a className="pill solid" href="#projects">
            Explore work <span aria-hidden="true">↗</span>
          </a>
          <a className="pill" href="#contact">
            Let's talk
          </a>
        </div>
        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
function IdentityCard() {
  const [flipped, setFlipped] = useState(false);
  const ref = useRef(null);
  const motion = useRef({ angle: 0, velocity: 0, target: 0 });
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    const tick = (now) => {
      const m = motion.current;
      m.velocity += (m.target - m.angle) * 0.015;
      m.velocity *= 0.93;
      m.angle += m.velocity;
      if (ref.current)
        ref.current.style.setProperty(
          "--swing",
          `${m.angle + Math.sin(now / 1600) * 1.2}deg`,
        );
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
  return (
    <div
      className="lanyard-space"
      onPointerMove={(e) => {
        const box = e.currentTarget.getBoundingClientRect();
        motion.current.target =
          ((e.clientX - box.left - box.width / 2) / box.width) * 12;
      }}
      onPointerLeave={() => {
        motion.current.target = 0;
      }}
    >
      <div className="lanyard" aria-hidden="true">
        <span>CHOI HYUNJUN · DEVELOPER</span>
      </div>
      <div className="metal-clip" aria-hidden="true" />
      <button
        ref={ref}
        className={`identity-card ${flipped ? "flipped" : ""}`}
        aria-label={flipped ? "사원증 앞면 보기" : "사원증 뒤집어 소개 보기"}
        aria-pressed={flipped}
        onClick={() => setFlipped(!flipped)}
      >
        <span className="card-inner">
          <span className="card-face card-front" aria-hidden={flipped}>
            <span className="id-top">
              DEVELOPER ID <span>HJ</span>
            </span>
            <span className="portrait-frame">
              <img
                src="/portrait.webp"
                alt="최현준 프로필 사진"
                loading="lazy"
              />
            </span>
            <strong>최현준</strong>
            <span className="id-role">AI Service Developer</span>
            <span className="id-rows">
              <span>
                <small>NAME</small>CHOI HYUNJUN
              </span>
              <span>
                <small>FOCUS</small>AI · WEB · DATA
              </span>
              <span>
                <small>EDUCATION</small>광운대학교 · 2026 졸업
              </span>
            </span>
            <span className="card-bottom">
              <span className="barcode" />
              <span className="id-seal">HJ</span>
            </span>
          </span>
          <span className="card-face card-back" aria-hidden={!flipped}>
            <span className="id-top">
              WHAT I DO <span>HJ</span>
            </span>
            <span className="back-copy">
              <strong>설계에서 구현까지.</strong>
              <span>AI 기능 · 업무 흐름</span>
              <span>근거 검색과 검증</span>
              <span>웹 클라이언트 · 분석 API</span>
              <span>광운대학교 정보융합학</span>
              <span>GPA 3.87 / 4.5</span>
              <em>Choi Hyunjun</em>
              <small>Say hello · hywznn</small>
            </span>
          </span>
        </span>
      </button>
      <p className="card-hint">클릭하면 뒤집힙니다</p>
    </div>
  );
}
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Heading number="01" label="ABOUT ME" accent="me.">
          A little about
        </Heading>
        <div className="about-layout">
          <div className="about-copy rv">
            <p className="tiny-label">안녕하세요, 최현준입니다.</p>
            <h3>
              AI의 결과를 검증하고,
              <br />
              사용자가 쓸 수 있게 연결합니다.
            </h3>
            <p>{profile.description}</p>
            <p>
              광운대학교 정보융합학을 전공하고 KT AIVLE School AI Track을
              수료했습니다.
            </p>
            <div className="about-links">
              <OutLink className="pill" href={profile.github}>
                GitHub
              </OutLink>
              <OutLink className="pill" href={linkedIn}>
                LinkedIn
              </OutLink>
            </div>
          </div>
          <IdentityCard />
          <div className="quick-facts rv">
            <h3>Quick facts</h3>
            <dl>
              <div>
                <dt>기반</dt>
                <dd>인천 · 대한민국</dd>
              </div>
              <div>
                <dt>전공</dt>
                <dd>정보융합학 · 공학사</dd>
              </div>
              <div>
                <dt>관심 분야</dt>
                <dd>AI 서비스 · 검색·모델 검증</dd>
              </div>
              <div>
                <dt>이메일</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
            </dl>
            <blockquote>
              “근거를 찾고, 확인한 내용으로
              <br />
              다음 단계를 연결합니다.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  const [filter, setFilter] = useState("All"),
    [selected, setSelected] = useState(elements[0]);
  return (
    <section id="skills" className="section">
      <div className="container">
        <Heading number="03" label="MY STACK" accent="stack.">
          The periodic table of my
        </Heading>
        <div className="capability-strip">
          <a href="#project/nextsalary"><strong>검색 · RAG</strong><span>검색 누락과 오답 원인 분석 · 조건·출처 검증</span></a>
          <a href="#project/deepsogak"><strong>모델 검증 · 추론 API</strong><span>적용 기준 확인 · ONNX · FastAPI</span></a>
          <a href="#project/fowoco"><strong>백엔드 · 서비스 연결</strong><span>승인 · 재처리 · 이력 추적 · 배포</span></a>
        </div>
        <div className="family-filters" aria-label="기술 분류">
          {["All", ...skills.map((g) => g.category)].map((f) => (
            <button
              key={f}
              className={f === filter ? "selected" : ""}
              aria-pressed={f === filter}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="stack-layout">
          <div className="periodic-grid">
            {elements.map((s, i) => (
              <button
                key={s.name}
                className={`element ${s.name === selected.name ? "inspected" : ""} ${filter !== "All" && filter !== s.family ? "dimmed" : ""}`}
                style={{ "--i": (Math.floor(i / 8) + (i % 8)) * 0.4 }}
                onMouseEnter={() => setSelected(s)}
                onFocus={() => setSelected(s)}
                onClick={() => setSelected(s)}
                aria-label={`${s.name}, ${s.family}`}
              >
                <span className="atomic-number">
                  {String(s.number).padStart(2, "0")}
                </span>
                <strong>{s.symbol}</strong>
                <span className="element-name">{s.name}</span>
                <span className="element-family">{s.family}</span>
              </button>
            ))}
          </div>
          <aside className="stack-inspector" aria-label="선택한 기술">
            <div className="inspector-logo" key={selected.name}>
              <Logo name={selected.name} size="large" />
            </div>
            <span className="tiny-label">{selected.family}</span>
            <h3>{selected.name}</h3>
            <p>{selected.use}</p>
            <div className="used-in">
              <span className="tiny-label">USED IN</span>
              <a href={selected.href}>{selected.project} ↗</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
function Work() {
  const [active, setActive] = useState(0);
  return (
    <section id="projects" className="section work-section">
      <div className="container">
        <Heading number="02" label="SELECTED WORK" accent="built.">
          Things I've
        </Heading>
        <div className="work-gallery">
          {["chemicheck119", "deepsogak", "fowoco"].map((id) => projects.find((p) => p.id === id)).map((p, i) => (
            <article
              key={p.id}
              className={`work-panel ${active === i ? "expanded" : ""}`}
              onMouseEnter={() => {
                if (window.matchMedia("(hover:hover)").matches) setActive(i);
              }}
              onFocusCapture={() => setActive(i)}
            >
              <button
                className="work-spine"
                aria-expanded={active === i}
                aria-controls={`work-${p.id}`}
                onClick={() => setActive(i)}
                aria-label={`${p.name} 프로젝트 펼치기`}
              >
                <span className="work-index">0{i + 1}</span>
                <span className="spine-title">{p.name}</span>
                <span className="spine-plus" aria-hidden="true">
                  +
                </span>
              </button>
              <div
                className="work-content"
                id={`work-${p.id}`}
                hidden={active !== i}
              >
                <div className="work-text">
                  <span className="tiny-label">
                    0{i + 1} / {p.period}
                  </span>
                  <h3>{p.name}</h3>
                  <p className="work-category">{p.category}</p>
                  <p>{p.description}</p>
                  <div className="work-features">
                    <div>
                      <span className="tiny-label">MY CONTRIBUTION</span>
                      <p>{p.cardContribution}</p>
                    </div>
                    <div>
                      <span className="tiny-label">RESULT</span>
                      <strong>{p.cardResult.value}</strong>
                      <p>{p.cardResult.label}</p>
                      <small>{p.cardResult.note}</small>
                    </div>
                  </div>
                  <ul className="work-tech" aria-label="사용 기술">
                    {({chemicheck119: ["Python", "scikit-learn", "FastAPI", "Spring Boot", "GCP Cloud Run"], deepsogak: ["PyTorch", "ONNX", "FastAPI"], fowoco: ["Java", "Spring Boot", "PostgreSQL", "FastAPI"]}[p.id] || p.tech).map((t) => (
                      <li key={t}>
                        <Logo name={t} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="work-links">
                    <a
                      className="pill solid"
                      href={`#project/${p.id}`}
                      aria-haspopup="dialog"
                      aria-label={`${p.name} 프로젝트 상세 보기`}
                    >
                      프로젝트 상세 ↗
                    </a>
                    {p.github && (
                      <OutLink className="quiet-link" href={p.github}>
                        GitHub ↗
                      </OutLink>
                    )}
                  </div>
                </div>
                <figure className="work-preview">
                  <img
                    src={p.id === "nextsalary" ? "/images/nextsalary-structure.svg" : p.image}
                    alt={`${p.name} ${p.imageLabel}`}
                    loading="lazy"
                  />
                  <figcaption>{p.id === "nextsalary" ? "본인 구현 구조 요약" : p.imageLabel}</figcaption>
                </figure>
              </div>
            </article>
          ))}
        </div>
        <details className="additional-work supporting-work">
          <summary>보조 프로젝트 · RAG, 웹 구현과 데이터 분석</summary>
          <div className="additional-work-grid">
            {['nextsalary', 'auta'].map(id => { const p = projects.find(p => p.id === id); return <article key={id}><span className="tiny-label">{p.period}</span><h4>{p.name}</h4><p>{p.cardContribution}</p><p className="support-result">{p.cardResult.value} · {p.cardResult.note}</p><a href={`#project/${id}`}>구현 과정 보기 ↗</a></article>; })}
            <article><span className="tiny-label">DATA ANALYSIS</span><h4>대청호 유해 남조류 예측</h4><p>시간 기반 학습·검증 분할로 예측 모델을 비교하고 RMSE·Recall로 모델을 선택했습니다. 모델링과 본선 발표를 맡았습니다.</p></article>
            <article><span className="tiny-label">WEB · MOBILE</span><h4>Banddy · Hanibi</h4><p>Banddy에서는 채팅 연결·재연결과 웹 배포를, Hanibi에서는 기기 페어링·센서 모니터링과 오류 응답 처리를 구현했습니다.</p><a href="https://github.com/hanibi-app/client" target="_blank" rel="noopener noreferrer">Hanibi GitHub ↗</a></article>
          </div>
        </details>
        <p className="gallery-note">
          프로젝트를 선택해 살펴보세요. 상세 페이지에 구현 과정과 검증 조건을
          정리했습니다.
        </p>
      </div>
    </section>
  );
}
function Experience() {
  const timeline = [
    { date: "2025.08.30 ~ 현재 (2026.10 기준)", title: "디랩코딩학원 구월점 · 코딩 강사", detail: "Python·Java·Unity 2D·웹 기초를 지도했습니다. Unity·C# 기초와 모바일 게임 제작의 22주 교육과정을 설계하고, 직접 구현한 게임과 교안을 수업에 적용했습니다." },
    { date: "2025.09.01 ~ 2026.02.28", title: "광운대학교 교육대학원 · 행정조교", detail: "학사정보와 안내 챗봇 답변을 교차 검증하고, 등록금·필수교육 데이터를 관리했습니다. 10개 전공의 문의 응대와 학사행사를 지원했습니다." },
    { date: "2023.09.14 ~ 2025.08.23", title: "UMC · Web 파트장 / 부회장", detail: "Web 파트장과 부회장으로 활동하며 저장소·과제 제출 가이드와 개발환경 안내를 작성했습니다. 사이드 프로젝트·데모데이 4회에 참여했습니다." },
    { date: "총 14회 참여", title: "소원 SW 교육봉사 · 유스해커톤", detail: "초·중학생과 장애인 학습자의 코딩 실습을 주강사·보조강사로 지원했습니다." },
  ];
  const ref = useRef(null),
    line = useRef(null);
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const b = ref.current.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight * 0.7 - b.top) / b.height),
      );
      line.current?.style.setProperty("--timeline-progress", progress);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <section id="experience" className="section">
      <div className="container experience-layout">
        <Heading number="04" label="EXPERIENCE" accent="together.">
          Building & learning
        </Heading>
        <div className="journey" ref={ref}>
          <div className="journey-fill" ref={line} />
          {timeline.map((t, i) => (
            <article className="journey-stop rv" key={t.title}>
              <span className="journey-dot" />
              <time>{t.date}</time>
              <h3>{t.title}</h3>
              <p>{t.detail}</p>
              {t.tags && (
                <div className="journey-tags">
                  {t.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
          <div className="journey-next">
            <span className="tiny-label">NEXT CHAPTER</span>
            <h3>Your team?</h3>
            <a href="#contact">함께할 이야기를 기다립니다. ↗</a>
          </div>
        </div>
        <div className="education-summary">
          <h3>학력 · 교육</h3>
          {education.map(e => <article key={e.title}><time>{e.date}</time><h4>{e.title}</h4><p>{e.detail}</p></article>)}
          <p className="compact-qualification">ADsP · 데이터분석 준전문가 (2025.11)</p>
          <details><summary>어학 자격 보기</summary>{qualifications.slice(1).map(q => <p key={q.title}>{q.title} · {q.date}</p>)}</details>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  const [copied, setCopied] = useState("Copy");
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <p className="eyebrow rv">05 — SAY HELLO</p>
          <h2
            className="contact-heading"
            aria-label="Let’s build something together."
          >
            {"Let's build".split("").map((l, i) => (
              <span key={i}>{l === " " ? "\u00a0" : l}</span>
            ))}
            <br />
            <em>something together.</em>
          </h2>
          <div className="contact-row">
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button
              className="pill copy-button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(profile.email);
                  setCopied("Copied ✓");
                } catch {
                  setCopied("복사할 수 없습니다");
                }
              }}
              aria-live="polite"
            >
              {copied}
            </button>
          </div>
          <div className="contact-social">
            <OutLink href={profile.github}>GitHub ↗</OutLink>
            <OutLink href={linkedIn}>LinkedIn ↗</OutLink>
          </div>
          <div className="hello-badge" aria-hidden="true">
            <span>LET'S TALK · SAY HELLO ·</span>
            <b>↗</b>
          </div>
        </div>
      </section>
      <footer className="container site-footer">
        <span>© 2026 최현준</span>
        <span>Built with React</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
export default function TalkingPortfolio() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash;
      const id = hash.startsWith("#project/")
        ? hash.slice(9)
        : hash === "#fowoco-case"
          ? "fowoco"
          : null;
      setSelected(projects.some((p) => p.id === id) ? id : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".rv,.rv-tile")
      .forEach((el) => observer.observe(el));
    document.documentElement.classList.add("motion-ready");
    return () => {
      window.removeEventListener("hashchange", sync);
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);
  const i = projects.findIndex((p) => p.id === selected);
  return (
    <>
      <a className="skip-link" href="#main">
        본문 바로가기
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
      {i >= 0 && (
        <Suspense
          fallback={
            <div className="detail-loading" role="status">
              프로젝트 상세를 불러오고 있습니다.
            </div>
          }
        >
          <ProjectDialog
            project={projects[i]}
            detail={projectDetails[selected]}
            index={i}
            total={projects.length}
            onClose={() => {
              window.history.replaceState(null, "", "#projects");
              setSelected(null);
            }}
            onNavigate={(direction) => {
              window.location.hash = `project/${projects[(i + direction + projects.length) % projects.length].id}`;
            }}
          />
        </Suspense>
      )}
    </>
  );
}
