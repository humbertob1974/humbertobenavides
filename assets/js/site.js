document.getElementById('year').textContent = new Date().getFullYear();
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const visual = document.getElementById('parallaxVisual');
window.addEventListener('mousemove', (e) => {
  if (!visual || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - .5) * 12;
  const y = (e.clientY / window.innerHeight - .5) * 12;
  visual.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

document.querySelectorAll('[data-language]').forEach(link => {
  link.addEventListener('click', () => localStorage.setItem('hb-language', link.dataset.language));
});

// Animated business-impact counters.
const counters = document.querySelectorAll('.counter');
const animateCounter = (el) => {
  if (el.dataset.animated) return;
  el.dataset.animated = 'true';
  const target = Number(el.dataset.target || 0);
  const suffix = el.dataset.suffix || '';
  const duration = 1000;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) animateCounter(entry.target); });
  }, { threshold: .35 });
  counters.forEach(el => counterObserver.observe(el));
} else counters.forEach(animateCounter);

// Interactive use cases, bilingual according to the page language.
const isSpanish = document.documentElement.lang.toLowerCase().startsWith('es');
const cases = isSpanish ? {
  operations: { title:'Operaciones más ágiles', copy:'Automatiza seguimiento, reportes, asignación de tareas y alertas para reducir trabajo manual y mejorar el control.', points:['Reportes operativos automáticos','Alertas y seguimiento de pendientes','Flujos conectados entre correo, formularios y sistemas'] },
  service: { title:'Servicio rápido y consistente', copy:'Crea asistentes que ayuden a responder preguntas frecuentes, clasificar solicitudes y preparar respuestas con supervisión humana.', points:['Clasificación automática de consultas','Borradores de respuesta contextualizados','Base de conocimiento para el equipo'] },
  documents: { title:'Documentos convertidos en datos', copy:'Extrae y organiza información de facturas, contratos, BOL, formularios y otros documentos empresariales.', points:['Extracción de campos importantes','Clasificación y validación documental','Envío de datos a hojas, CRM o bases de datos'] },
  knowledge: { title:'Conocimiento accesible', copy:'Convierte procedimientos, políticas y archivos internos en un asistente que ayude al equipo a encontrar respuestas rápidamente.', points:['Búsqueda en SOP y manuales','Respuestas basadas en fuentes internas','Menor dependencia de conocimiento informal'] }
} : {
  operations: { title:'More agile operations', copy:'Automate follow-up, reporting, task assignment, and alerts to reduce manual work and improve control.', points:['Automated operational reporting','Alerts and pending-item follow-up','Connected workflows across email, forms, and systems'] },
  service: { title:'Fast, consistent service', copy:'Build assistants that help answer common questions, classify requests, and prepare responses with human oversight.', points:['Automatic inquiry classification','Context-aware response drafts','Team knowledge base'] },
  documents: { title:'Documents converted into data', copy:'Extract and organize information from invoices, contracts, BOLs, forms, and other business documents.', points:['Extraction of important fields','Document classification and validation','Send data to sheets, CRMs, or databases'] },
  knowledge: { title:'Accessible company knowledge', copy:'Turn procedures, policies, and internal files into an assistant that helps the team find answers quickly.', points:['Search across SOPs and manuals','Answers grounded in internal sources','Less dependence on informal knowledge'] }
};
const panel = document.getElementById('casePanel');
function renderCase(key) {
  if (!panel || !cases[key]) return;
  const item = cases[key];
  panel.innerHTML = `<div class="case-panel-inner"><span class="case-kicker">${isSpanish ? 'Aplicación práctica' : 'Practical application'}</span><h3>${item.title}</h3><p>${item.copy}</p><ul>${item.points.map(p => `<li>${p}</li>`).join('')}</ul></div>`;
  document.querySelectorAll('.case-tab').forEach(btn => btn.classList.toggle('active', btn.dataset.case === key));
}
document.querySelectorAll('.case-tab').forEach(btn => btn.addEventListener('click', () => renderCase(btn.dataset.case)));
renderCase('operations');
