import React from "react";

export function NumberValue({ value }) {
  return <>{value}</>;
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
