import React, { useEffect, useState } from "react";
import BlurText from "./reactbits/BlurText.jsx";
import CountUp from "./reactbits/CountUp.jsx";
export function useMotionAllowed() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAllowed(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return allowed;
}
export function RevealLine({ children, className = "", delay = 0 }) {
  const animate = useMotionAllowed();
  return animate ? (
    <BlurText
      as="span"
      className={className}
      text={children}
      delay={60}
      stepDuration={0.23}
      direction="bottom"
      animationFrom={{ filter: "blur(4px)", opacity: 0.2, y: 12 }}
      animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
    />
  ) : (
    <span className={className}>{children}</span>
  );
}
export function NumberValue({ value }) {
  const animate = useMotionAllowed();
  if (!/^\d+$/.test(value) || !animate) return <>{value}</>;
  return (
    <>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        <CountUp to={Number(value)} duration={0.7} />
      </span>
    </>
  );
}
export function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}
export function External({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow diagonal />
      <span className="sr-only"> (새 탭)</span>
    </a>
  );
}
export function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">
        <span>{number}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function Tags({ items }) {
  return (
    <ul className="tags" aria-label="사용 기술">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}
export function Metrics({ items, note }) {
  return (
    <div className="metric-block">
      <dl className="metrics">
        {items.map(([v, l]) => (
          <div key={l}>
            <dt>{l}</dt>
            <dd>
              <NumberValue value={v} />
            </dd>
          </div>
        ))}
      </dl>
      {note && <p className="metric-note">{note}</p>}
    </div>
  );
}
