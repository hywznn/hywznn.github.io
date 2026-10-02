export const escape = (s = "") =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const external = (url, label, cls = "text-link") =>
  `<a class="${cls}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (새 탭)</span></a>`;
export const metricCards = (metrics) =>
  `<div class="metrics">${metrics.map(([value, label]) => `<div class="metric"><strong>${escape(value)}</strong><span>${escape(label)}</span></div>`).join("")}</div>`;
export const tags = (items) =>
  `<ul class="tags" aria-label="사용 기술">${items.map((t) => `<li>${escape(t)}</li>`).join("")}</ul>`;
export const heading = (number, title, description = "") =>
  `<div class="section-heading"><span class="section-index">${number}</span><div><h2>${title}</h2>${description ? `<p>${description}</p>` : ""}</div></div>`;
export const screenshot = (key, label) =>
  `<div class="screen-placeholder" data-screenshot="${key}"><span class="placeholder-icon" aria-hidden="true">▧</span><span>${label}</span><small>서비스 화면 준비 중</small></div>`;
