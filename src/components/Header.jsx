import React, { useState, useEffect } from "react";
import { External } from "./UI.jsx";
const items = [
  ["about", "소개"],
  ["projects", "프로젝트"],
  ["experience", "경험·교육"],
  ["skills", "기술"],
  ["contact", "연락"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-15% 0px -65% 0px" },
    );
    items.forEach(([id]) => {
      const s = document.getElementById(id);
      if (s) observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <div className="header-inner">
        <a
          className="brand"
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="최현준 포트폴리오 처음으로"
        >
          hj<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "닫기" : "메뉴"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="site-nav"
          className={open ? "open" : ""}
          aria-label="주요 메뉴"
        >
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <External href="https://github.com/hywznn" className="header-github">
          GitHub
        </External>
      </div>
    </header>
  );
}
