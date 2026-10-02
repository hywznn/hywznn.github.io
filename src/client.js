const links=[...document.querySelectorAll('nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window) {
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);active?a.setAttribute('aria-current','location'):a.removeAttribute('aria-current');});}}},{rootMargin:'-15% 0px -60% 0px'});
 sections.forEach(s=>observer.observe(s));
}
